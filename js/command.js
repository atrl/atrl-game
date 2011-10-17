var Command = function(){
	// 键盘事件状态
	var 
	state = {},
	Command = {
		init : function(){
			window.addEventListener('keydown', handle, false);
			window.addEventListener('keyup', handle, false);
		},
		unbind : function(){
			window.removeEventListener('keydown', handle, false);
			window.removeEventListener('keyup', handle, false);
		
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
				if (code == 80){
					Game.pause();
				}
				break;
			case 'keyup':
				state[code] = 0;
				break;
		}
	}

	return Command;
}()