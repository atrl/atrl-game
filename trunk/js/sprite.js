/**
*	精灵类
*
*/

Game.module('Sprite', function(Game){

	var Sprite = function(x, y, id, config){
		//生命
		this.life = 1;
		this.x = x;
		this.y = y;
		this.id = id;
		//动作
		this.actions = {'default':1};
		this.action = 'default';
		this.frameCount = 0;
		//精灵类型
		//this.type = config.type;
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
			if(!this.actions[actionName] || this.action == actionName) return;
			this.action = actionName;
			this.frameCount = 0;
		}
	}

	return Sprite;

});