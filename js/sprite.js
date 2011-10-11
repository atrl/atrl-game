/**
*	精灵类
*
*/

Game.module('Sprite', function(Game){

	var Sprite = function(x, y, id, config){
		this.life = 1;
		this.x = x;
		this.y = y;
		this.id = id;
		this.action = 'default';
		this.frameCount = 0;
		this.actions = {'default':1};
	}

	Sprite.prototype = {
		draw : function(){
			Game.draw(
				this.img, 
				this.frame.x, this.frame.y, 
				this.frame.w, this.frame.h, 
				this.x*Config.gridW + this.frame.cx, this.y*Config.gridH + this.frame.cy, 
				this.frame.w, this.frame.h
			);
		},
		doAction : function(actionName){
			if(!this.actions[actionName]) return;
			this.action = actionName;
			this.frameCount = 0;
		}
	}

	return Sprite;

});