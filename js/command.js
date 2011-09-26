var Command = function(){
	// 键盘事件状态
	var 
	state = {},
	instance = {
		init : function(){
			window.addEventListener('keydown', handle, false);
			window.addEventListener('keyup', handle, false);
		},
		state : state
	};
	
	//事件绑定
	function handle (e){
		var code = e.keyCode,
		timeNow = +new Date();
		switch (e.type) {
			case 'keydown':
				if (state[code] > 0) return;
				state[code] = timeNow;
				//queue.push('(' + timeNow + ')' + code + '↓');
				if (code == 80){
					Game.pause();
				}else if(code == 13){
					Game.start();
				}
				break;
			case 'keyup':
				state[code] = 0;
				//queue.push('(' + timeNow + ')' + code + '↑');
				break;
		}
	}

	return instance;
}()