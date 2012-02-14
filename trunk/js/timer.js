/**
*	时间类
*
*/

Game.module('Timer', function(Game){
	var 
	//3分钟运行的帧数
	MAXTIME = 24*60*3+24,
	//分
	minute,
	//秒
	second,
	Timer = function(){
		this.frameCount = 0;
	}

	Timer.prototype = {
		start: function(){
		
		},
		step : function(){
			//时间超过上限
			if(this.frameCount == MAXTIME) Game.over;

			minute = Math.floor((MAXTIME-this.frameCount)/24/60);
			second = (Math.floor((MAXTIME-this.frameCount)/24%60) / Math.pow(10, 2)).toFixed(2).substr(2);;
			this.timeString = minute+':'+second;
			this.draw();
			this.frameCount++;
		},
		draw : function(){
			Game.ctx.font = "bold 20px Verdana";
			Game.ctx.fillStyle = "Black";
			Game.ctx.fillText(this.timeString, 140*2, 16*2);
		}
	}
	return Timer;
});