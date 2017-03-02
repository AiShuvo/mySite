function Canvas(){
	var ctx = "";
	var width = 450;
	var height = 500;
	var blackCanvas = 50;
	var greenCanvasHeight = 50;
	this.connection = function(){
		alert("yes canvas is connected also");
	}
	this.setContext = function(id){
		var canvas = document.getElementById(id);
		ctx = canvas.getContext("2d");
	}
	this.drawRect = function(x,y,w,h,cl){
		ctx.fillStyle = cl;
		ctx.fillRect(x,y,w,h);
	}
	this.canvasArea = function(){
		this.drawRect(0,51,width,height,"black");
		this.drawRect(0,0,width,greenCanvasHeight,"green");
	}
	this.drawCanvas = function(){
		this.canvasArea();
	}
	this.getX = function(){
		return 0;
	}
	this.getY = function(){
		return blackCanvas;
	}
	this.getWidth = function(){
		return width;
	}
	this.getHeight = function(){
		return height;
	}
}