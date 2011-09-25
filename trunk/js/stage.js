/**
*	关卡类
*
*/

var Stage = (function(){

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
			for(var y=0,ylen=Config.stage.length;y<ylen;y++){
				for(var x=0,xlen=Config.stage[x].length;x<xlen;x++){
					this.create(Config.stage[y][x],x,y);
				}
			}
		},
		
		'step' : function (){
			Game.draw(Game.imgCache[this.img],0,0);
			for(var i in SpritePool){
				SpritePool[i].step();
			}
		},

		'create' : function(sprite, x, y){
			var id = sprite +'_'+ +new Date()+'_'+x+'_'+y;
			switch(sprite){
				case 1:
					SpritePool[id] = new Player(x,y);
					break;
				case 2:
					SpritePool[id] = new Keeper(x,y);
					break;
				case 3:
					SpritePool[id] = new Wall(x,y);
					break;
				case 4:
					SpritePool[id] = new Bonus(x,y);
					break;
				case 5:
					SpritePool[id] = new Bullet(x,y);
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

})()