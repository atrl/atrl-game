/**
*	精灵类
*
*/

function Sprite(x, y, id, config){
	this.life = 1;
	this.x = x;
	this.y = y;
	this.id = id;
	this.action = 'default';
	this.frameCount = 0;
}

Sprite.prototype = {

}