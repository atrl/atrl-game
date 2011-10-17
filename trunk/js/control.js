/**
*	游戏控制类
*
*/

var Game = (function(){
	
	var 
	//默认 fps
	fps = 24,
	
	//单步运行时间
	step_time = Math.round(1000/fps),

	//循环控件
	interval,
	
	//游戏状态
	is_pause = false,
	is_start = false,

	//统计帧
	frame_count = 0,
	frame_last_time = 0,

	//canvas
	canvas,
	ctx,

	imgCache = {},

	//游戏主程序
	Game = {
		//关卡
		stage : 0,

		//类池
		pool : {},

		//入口函数 加载设置
		init : function(){
			//删除入口
			delete this.init;
			//删除模块加载方法
			delete this.module;
			//加载图片
			load();
			//监听事件
			Command.init();
			canvas = document.getElementById('canvas');
			ctx = canvas.getContext('2d');
			canvas.width = 304;
			canvas.height = 202;
			this.start();
		},
		//游戏开始
		start : function(){
			if(is_start) return;
			(this.stage = new this.pool['Stage'](1)).start();
			this.step();
			is_start = true;
		},

		//暂停
		pause : function(){
			var that = this;
			if(is_pause){
				interval = setTimeout(function(){that.step()},step_time);
			}else{
				clearTimeout(interval);
			}
			is_pause = !is_pause;
		},
		
		//游戏结束
		over : function(){
			
		},

		//单步循环
		step : function(){
			var that = this;
			
			//每50帧调节一次fps
			if( frame_count%50 == 0) {
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

			//帧进步
			this.stage.step();

			interval = setTimeout(function(){that.step()},step_time);
			frame_count++;
		},
		//绘画方法
		draw : function(img,x,y,w,h,cx,cy,cw,ch){
			img = imgCache[img];
			w = w || img.width;
			h = h || img.height;
			cx= cx + Config.paddingX || x;
			cy= cy + Config.paddingY || y;
			cw= cw || w;
			ch= ch || h;
			ctx.drawImage(img,x,y,w,h,cx,cy,cw,ch);
		},
		
	};

	//加载函数
	function load(){
		var loadCount = 0 ;
		for (var i=0,len=Config.img.length; i<len; i++){
			imgCache[Config.img[i]] = new Image();
			imgCache[Config.img[i]].src = 'img/'+Config.img[i]+'.gif';
			imgCache[Config.img[i]].onload = function(){
				loadCount++;
			}
		}
	}

	//返回外部接口
	return {
		init : function(Config){
			Game.init(Config);
		},
		start : function(){
			Game.start();
		},
		pause :function(){
			Game.pause();
		},
		module : function(name, func){
			Game.pool[name] = func(Game);
		}
	};

})()

window.onload = function(){
	Game.init(Config);
}