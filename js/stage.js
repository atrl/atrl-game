/**
*	关卡类
*
*/

Game.module('Stage', function(Game){

	var 

	SpritePool = [],

	Stage = function(stage){
		this.stage = stage;
		this.img = 'bg';
	};

	Stage.init = function(){
	}
	Stage.prototype = {
		'start' : function(){
			this.map = Config.stage.slice();
			for(var y=0,ylen=this.map.length;y<ylen;y++){
				for(var x=0,xlen=this.map[x].length;x<xlen;x++){
					this.create(this.map[y][x],x,y);
				}
			}
		},
		
		'step' : function (){
			Game.draw(Game.imgCache[this.img],0,0);
			for(var i in SpritePool){
				if(SpritePool[i].life){
					SpritePool[i].step();
				}else{
					this.delete(i);
				}
			}
		},

		'create' : function(sprite, x, y){
			var id = sprite +'_'+ +new Date()+'_'+x+'_'+y;
			sprite = (sprite+"").split('');
			switch(+sprite[0]){
				case 1:
					SpritePool[id] = new Game.pool['Player'](x,y);
					break;
				case 2:
					SpritePool[id] = new Game.pool['Wall'](sprite[1],x,y);
					break;
				case 3:
					SpritePool[id] = new Game.pool['Keeper'](x,y);
					break;
				case 4:
					SpritePool[id] = new Game.pool['Bonus'](x,y);
					break;
				case 5:
					SpritePool[id] = new Game.pool['Bullet'](x,y);
					break;
				default:
					break;
			}
			this.map[y][x] = id;
		},
		'delete' : function(spriteId){
			delete SpritePool[spriteId];
		}
	}

	return Stage;

});