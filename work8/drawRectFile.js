function rectFile(){
	var cnavas = "null";
	var canvasColor = "black";
	
	var posXofBox = 0;
	var posYofBox = 490;
	var widthofBox = 70;
	var heightofBox = 10;
	var speed = 10;
	var s = 3;
	var gY = 490;
	var boxColor = "white";
	var text = "";
	
	this.connection = function(){
		alert("yes it is connected");
	}
	
	this.setContextId = function(canvasId){
		var c = document.getElementById(canvasId);
		var ctx = c.getContext("2d");
		canvas = ctx;
	}
	
	this.drawRect = function(x, y, width, height, cl){
		canvas.fillRect(x, y, width, height);
		canvas.fillStyle = cl;
		canvasColor = cl;
	}
	
	this.drawBox = function(){
		canvas.fillStyle = canvasColor;
		canvas.fillRect(posXofBox -s, posYofBox - s, widthofBox + s + s, heightofBox + s + s);
		canvas.fillStyle = boxColor;
		canvas.fillRect(posXofBox , posYofBox, widthofBox, heightofBox);
	//	canvas.font = "30px Arial";
	//	canvas.strokeText(text,posXofBox,posYofBox+10);
	}
	this.setPosOfBox = function(valueX,valueY){
		posXofBox = valueX;
		posYofBox = valueY;
	}
	this.getPosXofBox = function(){
		return posXofBox;
	}
	this.getPosYofBox = function(){
		return posYofBox;
	}
	this.setBoxColor = function(color){
		boxColor = color	
	}
	this.getBoxColor = function(){
		return boxColor;
	}
	this.setText = function(t){
		text = t;
	}
}