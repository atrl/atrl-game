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
	//精灵属性
	player : {
		img : 'player',
		keycode : [37, 38, 39, 40],
		A : 97,
		B : 98,
		power : 2,
		frames :{
			 // 0:左 1:上 2:右 3:下
			default :[
				{x:0,y:82,w:19,h:23,cx:2,cy:-7},
				{x:0,y:26,w:17,h:27,cx:-1,cy:-11},
				{x:0,y:56,w:19,h:23,cx:-2,cy:-7},
				{x:0,y:0 ,w:17,h:27,cx:-1,cy:-11}
			],
			0 : [
				{x:19,y:82,w:19,h:23,cx:2,cy:-7},
				{x:38,y:82,w:19,h:23,cx:2,cy:-7},
				{x:57,y:82,w:19,h:23,cx:2,cy:-7},
				{x:76,y:82,w:19,h:23,cx:2,cy:-7},
				{x:95,y:82,w:19,h:23,cx:2,cy:-7},
				{x:114,y:82,w:19,h:23,cx:2,cy:-7}
			],
			1 : [
				{x:17,y:26,w:17,h:27,cx:-1,cy:-11},
				{x:34,y:26,w:17,h:27,cx:-1,cy:-11},
				{x:51,y:26,w:17,h:27,cx:-1,cy:-11},
				{x:68,y:26,w:17,h:27,cx:-1,cy:-11},
				{x:85,y:26,w:17,h:27,cx:-1,cy:-11},
				{x:102,y:26,w:17,h:27,cx:-1,cy:-11}
			],
			2 : [
				{x:19,y:56,w:19,h:23,cx:-2,cy:-7},
				{x:38,y:56,w:19,h:23,cx:-2,cy:-7},
				{x:57,y:56,w:19,h:23,cx:-2,cy:-7},
				{x:76,y:56,w:19,h:23,cx:-2,cy:-7},
				{x:95,y:56,w:19,h:23,cx:-2,cy:-7},
				{x:114,y:56,w:19,h:23,cx:-2,cy:-7}
			],
			3 : [
				{x:17,y:0,w:17,h:27,cx:-1,cy:-11},
				{x:34,y:0,w:17,h:27,cx:-1,cy:-11},
				{x:51,y:0,w:17,h:27,cx:-1,cy:-11},
				{x:68,y:0,w:17,h:27,cx:-1,cy:-11},
				{x:85,y:0,w:17,h:27,cx:-1,cy:-11},
				{x:102,y:0,w:17,h:27,cx:-1,cy:-11}
			],
			stand : [
			
			],
			die : [
			
			]
		}
	},
	bullet : {},
	keeper : {
		img:'keeper',
		frames:{
			default:[{x:0,y:0,w:16,h:16,cx:0,cy:0}],
			die:[
				{x:16,y:0,w:16,h:16,cx:0,cy:0},
				{x:32,y:0,w:16,h:16,cx:0,cy:0},
				{x:48,y:0,w:16,h:16,cx:0,cy:0},
				{x:64,y:0,w:16,h:16,cx:0,cy:0},
				{x:80,y:0,w:16,h:16,cx:0,cy:0},
				{x:96,y:0,w:16,h:16,cx:0,cy:0},
				{x:112,y:0,w:16,h:16,cx:0,cy:0}
			]
		}
	},
	bonus  : {},

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
	}
};