function limeBox(){
	var boxColor = "lime";
	var width = 15;
	var height = 15;
	var posX = 0;
	var posY = 0;
	this.connection = function(){
		alert("lime box connected");
	}
	
	this.setContextId = function(canvasId){
		var c = document.getElementById(canvasId);
		var ctx = c.getContext("2d");
		canvas = ctx;
	}
	
	this.drawBox = function(){
		
	//	canvas.fillStyle = "black";
	//	canvas.fillRect(posX-10, posY-15, 30, 16);
		canvas.fillStyle = boxColor;
		canvas.fillRect(posX, posY-10, 10, 10);	
		canvas.fillStyle = "black";
	}
	this.setPosition = function(x, y){
		posX = x;
		posY = y;
	}
	this.getXpos =function(){
		return posX;
	}
	this.getYpos = function(){
		return posY;
	}
}