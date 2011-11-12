﻿/**
*	地图类
*/
Game.module('Map',function(Game){

	var 
		//精灵缓存
		SpritePool = {},
		//地图缓存
		mapCache = [],

		Map = function(){
		
		
		};

		Map.prototype = {
			start : function(){
				SpritePool = {};
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
				//精灵排序
				mapCache.sort(function(a, b){
					return Math.ceil(SpritePool[a].y) - Math.ceil(SpritePool[b].y) || 
						Math.ceil(SpritePool[a].x) - Math.ceil(SpritePool[b].x) || 
						a.substring(0,1)<b.substring(0,1);
				})

					window.mapCache = mapCache;
				//所有精灵进步
				for(var i = 0,len = mapCache.length; i<len; i++){
					if(SpritePool[mapCache[i]].life){
						SpritePool[mapCache[i]].step();
					}else{
						this.delete(mapCache[i]);
						i--;
						len--;
					}
					
				}
			},

			//添加精灵
			create : function(sprite, x, y, config){
				var id = sprite +'_' + x + '_' +y +'_'+Math.random().toString(36).substring(2), Class;

				// 精灵类型
				sprite = (sprite+"").split('');
				
				config = config || {};
				config.type = sprite[0];
				switch(+sprite[0]){
					case 1:
						Class = 'Player';
						config.style = config.style || sprite[1];
						break;
					case 2:
						Class = 'Wall';
						config.style = config.style || sprite[1];
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
					case 6:
						Class = 'Atom';
						break;
				}
				if(typeof Class !== 'undefined'){
					SpritePool[id] = new Game.pool[Class](x, y, id, config);
					mapCache.push(id);
				}
			},
			
			//判断是否可行
			cross : function(x, y){
				//超过地图边界
				if(x<0 || y<0 || x>this.x ||y>this.y)
					return false;
				var Area = [],type;
				for(var i=0,len=mapCache.length;i<len;i++){
					if( Math.round(SpritePool[mapCache[i]].x) !== x ||  Math.round(SpritePool[mapCache[i]].y) !== y)
						continue;
					type = +mapCache[i].split('')[0];
					if(~[2,3].indexOf(type))
						return false;
					Area.push(type);
				}
				return ~Area.indexOf(5)?~Area.indexOf(1):true;
			},
			

			//删除精灵
			delete : function(id){
				for(var i = 0,len = mapCache.length; i<len; i++){
					if(mapCache[i] == id) 
						mapCache.splice(i,1); 
				}
				delete SpritePool[id];
			},
			
			//检测碰撞
			collision : function(x, y){
				for(var i=0,len=mapCache.length;i<len;i++){
					if( Math.round(SpritePool[mapCache[i]].x) !== Math.round(x) ||  Math.round(SpritePool[mapCache[i]].y) !== Math.round(y))
						continue;
				// http://lifesinger.wordpress.com/2011/09/30/simplify-indexof-using-bitwise-not/
					if(~[4].indexOf(+mapCache[i].split('')[0])){
						var result = SpritePool[mapCache[i]].action;
						SpritePool[mapCache[i]].action = 'die';
						return result;
					}
				}
				return false;

			},
			
			//坐标精灵动作
			doAction : function (x, y, sprite, actionName){
				var result = false;
				if(!actionName){
					actionName = sprite;
					sprite = 0;
				}
				for(var i=0,len=mapCache.length;i<len;i++){
					if( Math.round(SpritePool[mapCache[i]].x) !== x ||  Math.round(SpritePool[mapCache[i]].y) !== y)
						continue;
					if(SpritePool[mapCache[i]].life)
						SpritePool[mapCache[i]].doAction(actionName);
				}
			}

		}

	return Map;
});
