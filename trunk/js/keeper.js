/**
*	障碍类
*/
Game.module('Keeper',function(Game){


	var Keeper = function(x, y, id, config){
		Game.pool['Sprite'].call(this, x, y, id, config);

		this.img = Config.keeper.img;
		this.frames = Config.keeper.frames;
		this.actions = ['die'];
	}
		
	Keeper.prototype = new Game.pool['Sprite']();
	Keeper.prototype.constructor = Keeper;

	Keeper.prototype.step = function(){

		if(this.action == 'die' ){
			if(this.frameCount >= this.frames[this.action].length){
				this.life = 0;
				//产生奖励
				this.checkBonus();
				return;
			}
		}else{
			this.frameCount = 0;
		}

		this.frame = this.frames[this.action][this.frameCount];

		this.draw();
		this.frameCount++;
	}
	
	Keeper.prototype.checkBonus = function(){
		var ran = Math.random();
		if(ran<0.3){
			Game.stage.map.create(4, this.x, this.y,{style : Math.floor(ran*10)});
		}
	}

	return Keeper;

});