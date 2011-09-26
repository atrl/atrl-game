/**
*	障碍类
*/
Game.module('Keeper',function(Game){


	var Keeper = function(x,y){
		this.img = Config.keeper.img;
		this.frames = Config.keeper.frames;
		this.action = 'default';
		this.frameCount = 0;
		this.x = x;
		this.y = y;
	}
		
	Keeper.prototype = new Sprite();
	Keeper.prototype.constructor = Keeper;

	Keeper.prototype.step = function(){

		if(this.frameCount < this.frames[this.action].length-1){
			
		}else if(this.frameCount = this.frames[this.action].length-1){
			this.action == 'die' ? this.life = 0 : this.frameCount = 0;
		}
		this.frame = this.frames[this.action][this.frameCount];
		Game.draw(Game.imgCache[this.img], this.frame.x, this.frame.y, this.frame.w, this.frame.h,this.x*Config.gridW+Config.paddingX,this.y*Config.gridH+Config.paddingY, this.frame.w, this.frame.h);

		this.frameCount++;
	}

	return Keeper;

});