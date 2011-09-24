/**
*	关卡类
*
*/

var Stage = (function(){

	var 

	SpritePool = [],

	map,

	//canvas
	canvas,
	ctx,s


	Stage = function(stage){
		this.stage = stage;
		this.img = 'bg';
	};

	Stage.init = function(){
	
	
	}
	Stage.prototype = {
		'start' : function(){
			this.map = Config.stage.slice();
			for(var x=0,xlen=Config.stage.length;x<xlen;x++){
				for(var y=0,ylen=Config.stage[x].length;y<ylen;y++){
					this.create(Config.stage[x][y],x,y);
				}
			}
		},
		
		'step' : function (){
			Game.draw(Game.imgCache[this.img],0,0);
			for(var i=0,len=SpritePool.length;i<len;i++){
				SpritePool[i].step();
			}
		},

		'create' : function(sprite, x, y){
			var id = sprite +'_'+ +new Date();
			switch(sprite){
				case 1:
					SpritePool[id] = new Player(Config.player);
					break;
				case 2:
					SpritePool[id] = new Keeper(Config.keeper);
				case 3:
					SpritePool[id] = new Wall(Config.wall);
					break;
				case 4:
					SpritePool[id] = new Bonus(Config.bonus);
					break;
				case 5:
					SpritePool[id] = new Bullet(Config.bullet);
					break;
				default:
					break;
			}
			this.map[x][y] = id;
		},
		'delete' : function(spriteId){
			delete SpritePool[spriteId];
		}
	}

	return Stage;

})()