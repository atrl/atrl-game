﻿/**
*	地图类
*/
Game.module('Map',function(Game){

	var 
		//精灵缓存
		SpritePool = {},
		//地图缓存
		mapCache = [],

		//精灵ID
		SpriteId,

		Map = function(){
		
		
		};

		Map.prototype = {
			start : function(){
				//创建精灵
				for(var y=0,ylen=Config.map.length;y<ylen;y++){
					for(var x=0,xlen=Config.map[x].length;x<xlen;x++){
						this.create(Config.map[y][x],x,y);
					}
				}
				this.x = xlen-1;
				this.y = ylen-1;
			},

			step : function(){
				//循环缓存地图上的精灵
				mapCache.sort(function(a, b){
					return SpritePool[a].y<SpritePool[b].y &&  SpritePool[a].x<SpritePool[b].x ;
				})
				
				for(var i=0,len= mapCache.length;i<len;i++){
					if(SpritePool[mapCache[i]].life){
						SpritePool[mapCache[i]].step();
					}else{
						this.delete(mapCache[i]);
					}
					
				}
			},
			
			//判断是否可行
			cross : function(x, y){
				for(var i=0,len=mapCache.length;i<len;i++){
					if( Math.round(SpritePool[mapCache[i]].x) !== x ||  Math.round(SpritePool[mapCache[i]].y) !== y)
						continue;
					// 精灵类型 
					// http://lifesinger.wordpress.com/2011/09/30/simplify-indexof-using-bitwise-not/
					if(~[2,3,5].indexOf(+mapCache[i].split('')[0]))
						return false;
				}
				return true;
			},
			
			//添加精灵
			create : function(sprite, x, y, config){
				var id = sprite +'_' + x + '_' +y, Class;

				// 精灵类型
				sprite = (sprite+"").split('');
				
				config = config || {};
				config.type = config.type || sprite[1];
				switch(+sprite[0]){
					case 1:
						Class = 'Player';
						break;
					case 2:
						Class = 'Wall';
						break;
					case 3:
						Class = 'Keeper';
						break;
					case 4:
						Class = 'Bonus';
						break;
					case 5:
						Class = 'Bullet';
						break;
				}
				if(typeof Class !== 'undefined'){
					SpritePool[id] = new Game.pool[Class](x, y, id, config);
					mapCache.push(id);
				}
			},

			//删除精灵
			delete : function(id){
				for(var i = 0,len = mapCache.length; i<len; i++){
					if(mapCache[i] == id) 
						mapCache.splice(i,1); 
				}
				delete SpritePool[id];
			},
			
			//坐标精灵动作
			action : function (x, y, actionName){
				for(var s=0,slen=mapCache[y][x].length;s<slen;s++){
					var id = mapCache[y][x][s];
					if(SpritePool[id].life){
						SpritePool[id][action] = actionName;
					}
				}
			}

		}

	return Map;
});
