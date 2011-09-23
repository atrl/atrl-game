var Command = function(){
	// 键盘事件状态
	var instance = {
		init : function(){
			window.addEventListener('keydown', handle, false);
			window.addEventListener('keyup', handle, false);
		},
		state : {}
	};
	
	//事件绑定
	function handle (e){
		var code = e.keyCode,
		timeNow = +new Date();
		switch (e.type) {
			case 'keydown':
				if (this.state[code] > 0) return;
				this.state[code] ? ++this.state[code] : this.state[code] = 1;
				//queue.push('(' + timeNow + ')' + code + '↓');
				if (code == 80){
					Game.pause();
				}
				break;
			case 'keyup':
				this.state[code] = 0;
				//queue.push('(' + timeNow + ')' + code + '↑');
				break;
		}
	}

	return instance;
}()