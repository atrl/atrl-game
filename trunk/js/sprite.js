/**
*	精灵类
*
*/

function Sprite(){
	this.life = 0;
	this.control = 0;
	this.grid = [];
	this.gridWidth = 50;


}

Sprite.prototype = {
	
	draw : function(){
		drawImage(this.img, sourceX, sourceY, sourceWidth, sourceHeight,destX, destY, destWidth, destHeight)
	}
	



}