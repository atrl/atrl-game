/**
*	游戏控制类
*
*/

var Game = (function(){
	
	var 
	//默认 fps
	fps = 30,

	//循环控件
	interval,
	
	//游戏状态
	is_pause = false,
	
	//单步运行时间
	step_time = 10,

	//统计帧
	frame_count = 0,
	
	frame_last_time = 0,
	
	//关卡
	stage,

	//单例类
	instance = {
		//入口函数 加载设置
		init : function(Config){
			delete this.init;
			load(Config);
			Stage.init();
		},
		//游戏开始
		start : function(){
			(stage = new Stage(1)).start();
			this.step();
		},

		//暂停
		pause : function(){
			if(is_pause){
				interval = setTimeout(function(){that.step()},step_time);
			}else{
				clearTimeout(interval);
			}
			is_pause = !is_pause;
		},
		//单步循环
		step : function(){
			var that = this;

			frame_count++;
			
			//每50帧调节一次fps
			if( frame_count%50 ) {
				// 计算 fps
				var t = +new Date();
				fps = Math.round(500000 / (t - frame_last_time)) / 10;
				frame_last_time = t;

				// 动态调整 step_time ，保证 fps 恒定为 24 左右
				if (fps < 23.6 && step_time > 1) {
					step_time --;
				} else if (fps > 24.4) {
					step_time ++;
				}
			}
			stage.step();
			interval = setTimeout(function(){that.step()},step_time);
		}
	};

	//加载函数
	function load(Config){
		var loadCount = 0 ;
		for (var i=0,len=Config.img.length; i<len; i++){
			var img = new Image();
			img.src = Config.img[i];
			img.onload = function(){
				loadCount++;
			}
		}
	}

	return instance;
	
})()

window.onload = function(){
	Game.init(Config);
}