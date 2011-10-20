/**
*	场景类
*/
Game.module('Scene', function(Game){


	var Scene = function(){
	
	
	}

	Scene.prototype = {
		start :function(stage){
			this.bg = Config.scene[stage].bg || '';
			this.img = Config.scene[stage].img || '';
			this.frames = Config.scene[stage].frames || '';
			this.frameCount = 0;
		},

		step : function(){
			this.bg && Game.draw(this.bg, 0, 0 );
			this.frame = this.frames[this.frameCount%this.frames.length];
			this.img && Game.draw(this.img, this.frame.x, this.frame.y, this.frame.w, this.frame.h, this.frame.cx, this.frame.cy);
			this.frameCount++;
		}
	}

	return Scene;

});