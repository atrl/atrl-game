﻿/**
*	资源
*/
var Config = {

	img : ['player','bg','keeper'],
	/**
	*	地图
	*	1:玩家
	*	2:墙
	*	3:障碍
	*	4:奖励
	*	5:炸弹
	*/
	map : [
		[1 ,0, 0 ,3 ,3 ,0 ,3 ,0 ,3 ,3 ,0 ,0 ,1 ],
		[0 ,20,0 ,23,3 ,23,3 ,22,3 ,21,0 ,23,0 ],
		[0 ,0 ,0 ,3 ,3 ,3 ,3 ,3 ,0 ,0 ,0 ,0 ,0 ],
		[3 ,23,3 ,22,3 ,21,3 ,22,3 ,20,0 ,22,3 ],
		[3 ,3 ,3 ,3 ,3 ,3 ,3 ,3 ,0 ,3 ,3 ,3 ,3 ],
		[0 ,23,0 ,20,3 ,22,3 ,21,3 ,23,3 ,23,3 ],
		[3 ,3 ,3 ,3 ,3 ,0 ,3 ,0 ,3 ,3 ,3 ,3 ,3 ],
		[3 ,23,0 ,20,3 ,22,3 ,23,3 ,20,3 ,23,3 ],
		[0 ,0 ,0 ,0 ,3 ,3 ,3 ,0 ,3 ,3 ,0 ,0 ,0 ],
		[0 ,21,0 ,23,3 ,23,3 ,21,3 ,22,0 ,20,0 ],
		[0 ,0 ,0 ,3 ,3 ,0 ,3 ,0 ,3 ,3 ,0 ,0 ,0 ]
	],
	//格子属性
	gridW : 16,
	gridH : 16,
	//地图边距
	paddingX : 48,
	paddingY : 10,
	
	//速度基数
	speed : 0.1,
	
	//精灵属性
	player : {
		img : 'player',
		keycode : [37, 38, 39, 40],
		A : 97,
		B : 98,
		power : 1,
		bullets : 2,
		speed : 1,
		frames :{
			 // 0:左 1:上 2:右 3:下
			default :[
				{x:0,y:82,w:19,h:23,cx:0,cy:-7},
				{x:0,y:30,w:17,h:23,cx:0,cy:-7},
				{x:0,y:56,w:19,h:23,cx:-4,cy:-7},
				{x:0,y:0 ,w:17,h:27,cx:0,cy:-11}
			],
			0 : [
				{x:19,y:82,w:19,h:23,cx:0,cy:-7},
				{x:19,y:82,w:19,h:23,cx:0,cy:-7},
				{x:38,y:82,w:19,h:23,cx:0,cy:-7},
				{x:38,y:82,w:19,h:23,cx:0,cy:-7},
				{x:57,y:82,w:19,h:23,cx:0,cy:-7},
				{x:57,y:82,w:19,h:23,cx:0,cy:-7},
				{x:76,y:82,w:19,h:23,cx:0,cy:-7},
				{x:76,y:82,w:19,h:23,cx:0,cy:-7},
			],
			1 : [
				{x:17,y:30,w:17,h:23,cx:0,cy:-7},
				{x:34,y:30,w:17,h:23,cx:0,cy:-7},
				{x:51,y:30,w:17,h:23,cx:0,cy:-7},
				{x:68,y:30,w:17,h:23,cx:0,cy:-7},
				{x:85,y:30,w:17,h:23,cx:0,cy:-7},
				{x:102,y:30,w:17,h:23,cx:0,cy:-7}
			],
			2 : [
				{x:19,y:56,w:19,h:23,cx:-4,cy:-7},
				{x:19,y:56,w:19,h:23,cx:-4,cy:-7},
				{x:38,y:56,w:19,h:23,cx:-4,cy:-7},
				{x:38,y:56,w:19,h:23,cx:-4,cy:-7},
				{x:57,y:56,w:19,h:23,cx:-4,cy:-7},
				{x:57,y:56,w:19,h:23,cx:-4,cy:-7},
				{x:76,y:56,w:19,h:23,cx:-4,cy:-7},
				{x:76,y:56,w:19,h:23,cx:-4,cy:-7},
			],
			3 : [
				{x:17,y:0,w:17,h:27,cx:0,cy:-11},
				{x:34,y:0,w:17,h:27,cx:0,cy:-11},
				{x:51,y:0,w:17,h:27,cx:0,cy:-11},
				{x:68,y:0,w:17,h:27,cx:0,cy:-11},
				{x:85,y:0,w:17,h:27,cx:0,cy:-11},
				{x:102,y:0,w:17,h:27,cx:0,cy:-11}
			],
			stand : [
				{x:0,y:107,w:17,h:25,cx:0,cy:-9},
				{x:0,y:107,w:17,h:25,cx:0,cy:-9},
				{x:17,y:107,w:17,h:25,cx:0,cy:-9},
				{x:17,y:107,w:17,h:25,cx:0,cy:-9},
				{x:0,y:107,w:17,h:25,cx:0,cy:-9},
				{x:0,y:107,w:17,h:25,cx:0,cy:-9},
				{x:17,y:107,w:17,h:25,cx:0,cy:-9},
				{x:17,y:107,w:17,h:25,cx:0,cy:-9}
			],
			die : [
				{x:0,y:135,w:17,h:41,cx:0,cy:-35},
				{x:0,y:135,w:17,h:41,cx:0,cy:-35},
				{x:17,y:135,w:17,h:41,cx:0,cy:-35},
				{x:17,y:135,w:17,h:41,cx:0,cy:-35},
				{x:0,y:135,w:17,h:41,cx:0,cy:-35},
				{x:0,y:135,w:17,h:41,cx:0,cy:-35},
				{x:17,y:135,w:17,h:41,cx:0,cy:-35},
				{x:17,y:135,w:17,h:41,cx:0,cy:-35},
				{x:0,y:135,w:17,h:41,cx:0,cy:-35},
				{x:0,y:135,w:17,h:41,cx:0,cy:-35},
				{x:17,y:135,w:17,h:41,cx:0,cy:-35},
				{x:17,y:135,w:17,h:41,cx:0,cy:-35},
				{x:34,y:135,w:17,h:41,cx:0,cy:-35},
				{x:34,y:135,w:17,h:41,cx:0,cy:-35},
				{x:51,y:135,w:17,h:41,cx:0,cy:-35},
				{x:51,y:135,w:17,h:41,cx:0,cy:-35},
				{x:68,y:135,w:17,h:41,cx:0,cy:-35},
				{x:68,y:135,w:17,h:41,cx:0,cy:-35},
				{x:85,y:135,w:17,h:41,cx:0,cy:-35},
				{x:85,y:135,w:17,h:41,cx:0,cy:-35},
				{x:102,y:135,w:17,h:41,cx:0,cy:-35},
				{x:102,y:135,w:17,h:41,cx:0,cy:-35},
				{x:119,y:135,w:17,h:41,cx:0,cy:-35},
				{x:119,y:135,w:17,h:41,cx:0,cy:-35},
				{x:119,y:135,w:17,h:41,cx:0,cy:-35},
				{x:119,y:135,w:17,h:41,cx:0,cy:-35}
			]
		}
	},
	bullet : {
		img:'keeper',
		frames:{
			default:[
				{x:0,y:42,w:16,h:16,cx:0,cy:0},
				{x:0,y:42,w:16,h:16,cx:0,cy:0},
				{x:16,y:42,w:16,h:16,cx:0,cy:0},
				{x:16,y:42,w:16,h:16,cx:0,cy:0},
				{x:32,y:42,w:16,h:16,cx:0,cy:0},
				{x:32,y:42,w:16,h:16,cx:0,cy:0},
				{x:48,y:42,w:16,h:16,cx:0,cy:0},
				{x:48,y:42,w:16,h:16,cx:0,cy:0}
			],
		}
	},
	keeper : {
		img:'keeper',
		frames:{
			default:[{x:0,y:0,w:16,h:16,cx:0,cy:0}],
			die:[
				{x:16,y:0,w:16,h:16,cx:0,cy:0},
				{x:16,y:0,w:16,h:16,cx:0,cy:0},
				{x:32,y:0,w:16,h:16,cx:0,cy:0},
				{x:32,y:0,w:16,h:16,cx:0,cy:0},
				{x:48,y:0,w:16,h:16,cx:0,cy:0},
				{x:48,y:0,w:16,h:16,cx:0,cy:0},
				{x:64,y:0,w:16,h:16,cx:0,cy:0},
				{x:64,y:0,w:16,h:16,cx:0,cy:0},
				{x:80,y:0,w:16,h:16,cx:0,cy:0},
				{x:80,y:0,w:16,h:16,cx:0,cy:0},
				{x:96,y:0,w:16,h:16,cx:0,cy:0},
				{x:96,y:0,w:16,h:16,cx:0,cy:0},
				{x:112,y:0,w:16,h:16,cx:0,cy:0},
				{x:112,y:0,w:16,h:16,cx:0,cy:0}
			]
		}
	},
	bonus  : {
		img: 'keeper',
		frames:{
			power : [
				{x:0,y:58,w:16,h:21,cx:0,cy:-5},
				{x:0,y:58,w:16,h:21,cx:0,cy:-5},
				{x:16,y:58,w:16,h:21,cx:0,cy:-5},
				{x:16,y:58,w:16,h:21,cx:0,cy:-5},
				{x:32,y:58,w:16,h:21,cx:0,cy:-5},
				{x:32,y:58,w:16,h:21,cx:0,cy:-5},
				{x:48,y:58,w:16,h:21,cx:0,cy:-5},
				{x:48,y:58,w:16,h:21,cx:0,cy:-5},
				{x:64,y:58,w:16,h:21,cx:0,cy:-5},
				{x:64,y:58,w:16,h:21,cx:0,cy:-5},
				{x:80,y:58,w:16,h:21,cx:0,cy:-5},
				{x:80,y:58,w:16,h:21,cx:0,cy:-5},
				{x:96,y:58,w:16,h:21,cx:0,cy:-5},
				{x:96,y:58,w:16,h:21,cx:0,cy:-5},
				{x:112,y:58,w:16,h:21,cx:0,cy:-5},
				{x:112,y:58,w:16,h:21,cx:0,cy:-5}
			],
			speed : [
				{x:0,y:83,w:14,h:23,cx:1,cy:-7},
				{x:0,y:83,w:14,h:23,cx:1,cy:-7},
				{x:14,y:83,w:14,h:23,cx:1,cy:-7},
				{x:14,y:83,w:14,h:23,cx:1,cy:-7},
				{x:28,y:83,w:14,h:23,cx:1,cy:-7},
				{x:28,y:83,w:14,h:23,cx:1,cy:-7},
				{x:42,y:83,w:14,h:23,cx:1,cy:-7},
				{x:42,y:83,w:14,h:23,cx:1,cy:-7},
				{x:56,y:83,w:14,h:23,cx:1,cy:-7},
				{x:56,y:83,w:14,h:23,cx:1,cy:-7},
				{x:70,y:83,w:14,h:23,cx:1,cy:-7},
				{x:70,y:83,w:14,h:23,cx:1,cy:-7}
			],
			bullets : [
				{x:0,y:109,w:14,h:20,cx:1,cy:-4},
				{x:0,y:109,w:14,h:20,cx:1,cy:-4},
				{x:14,y:109,w:14,h:20,cx:1,cy:-4},
				{x:14,y:109,w:14,h:20,cx:1,cy:-4},
				{x:28,y:109,w:14,h:20,cx:1,cy:-4},
				{x:28,y:109,w:14,h:20,cx:1,cy:-4},
				{x:42,y:109,w:14,h:20,cx:1,cy:-4},
				{x:42,y:109,w:14,h:20,cx:1,cy:-4},
				{x:56,y:109,w:14,h:20,cx:1,cy:-4},
				{x:56,y:109,w:14,h:20,cx:1,cy:-4},
				{x:70,y:109,w:14,h:20,cx:1,cy:-4},
				{x:70,y:109,w:14,h:20,cx:1,cy:-4},
				{x:84,y:109,w:14,h:20,cx:1,cy:-4},
				{x:84,y:109,w:14,h:20,cx:1,cy:-4},
				{x:98,y:109,w:14,h:20,cx:1,cy:-4},
				{x:98,y:109,w:14,h:20,cx:1,cy:-4}
			]
		}
	},

	wall : {
		img:'keeper',
		frames:{
			default:[
				{x:0,y:16,w:16,h:22,cx:0,cy:-6},
				{x:16,y:16,w:16,h:22,cx:0,cy:-6},
				{x:32,y:16,w:16,h:22,cx:0,cy:-6},
				{x:48,y:16,w:16,h:22,cx:0,cy:-6}
			]
		}
	},
	atom : {
		img : 'keeper',
		frames:{
			default:[
				{x:0,y:40,w:16,h:22,cx:0,cy:0},
			]
		}
	}

};