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
					mapCache[y] = [];
					for(var x=0,xlen=Config.map[x].length;x<xlen;x++){
						this.create(Config.map[y][x],x,y);
						mapCache[y][x] = [];
					}
				}
				this.x = xlen-1;
				this.y = ylen-1;
				//创建地图缓存
				this.checkMapCache();
			},

			step : function(){
				//循环缓存地图上的精灵
				for(var y=0,ylen=mapCache.length;y<ylen;y++){
					for(var x=0,xlen=mapCache[y].length;x<xlen;x++){
						for(var s=0,slen=mapCache[y][x].length;s<slen;s++){
							SpriteId = mapCache[y][x][s];
							if(SpritePool[SpriteId].life){
								SpritePool[SpriteId].step();
							}else{
								this.delete(SpriteId);
							}
						}
					}
				}
				
				//更新地图缓存
				this.checkMapCache();
			},
			
			//构造地图缓存
			checkMapCache : function(){
				var x,y;
				for(var y=0,ylen=Config.map.length;y<ylen;y++){
					mapCache[y] = [];
					for(var x=0,xlen=Config.map[x].length;x<xlen;x++){
						mapCache[y][x] = [];
					}
				}
				for(var i in SpritePool){
					x = Math.round(SpritePool[i].x);
					y = Math.round(SpritePool[i].y);
					mapCache[y][x].push(i);
				}
			},
			
			//判断是否可行
			cross : function(x, y){
				for(var s=0,slen=mapCache[y][x].length;s<slen;s++){
					SpriteId = mapCache[y][x][s];
					// 精灵类型 
					// http://lifesinger.wordpress.com/2011/09/30/simplify-indexof-using-bitwise-not/
					if(~[2,3,5].indexOf(+SpriteId.split('')[0]))
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
				if(typeof Class !== 'undefined')SpritePool[id] = new Game.pool[Class](x,y,id,sprite[1]);
			},

			//删除精灵
			delete : function(spriteId){
				delete SpritePool[spriteId];
			}
		}

	return Map;
});
