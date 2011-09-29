﻿/**
*	地图类
*/
Game.module('Map',function(Game){

	var 
		SpritePool = {},
		mapCache = [],
	Map = function(){
		for(var y=0,ylen=this.map.length;y<ylen;y++){
			for(var x=0,xlen=this.map[x].length;x<xlen;x++){
				this.create(this.map[y][x],x,y);
			}
		}
	}
	Map.prototype = {
		start : function(){
			this.map = Config.map.slice();
			for(var y=0,ylen=this.map.length;y<ylen;y++){
				for(var x=0,xlen=this.map[x].length;x<xlen;x++){
					this.create(this.map[y][x],x,y);
				}
			}


		},

		step : function(){
			for(var i in SpritePool){
				if(SpritePool[i].life){
					SpritePool[i].step();
				}else{
					this.delete(i);
				}
			}
			
		},
		add : function(x, y){
		
		},
		remove : function(x, y){
		
		},
		get : function(x, y){
		
		},
		cross : function(x, y){
			
		}
	}

});
