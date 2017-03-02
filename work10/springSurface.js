function springSurface(){
	var ctx = "";
	var X = 250;
	var Y = 490;
	var width = 100;
	var height = 10;
	var Color = "white";
	var canvasClass;
	var marginBottom = 10;
	var springSpeed = 50;
	var springProperty = {
		x:X,
		y:Y,
		w:width,
		h:height
	}
	this.connection = function(){
		alert("springSurface is Connected");
	}
	this.setContext = function(id){
		var canvas = document.getElementById(id);
		ctx = canvas.getContext("2d");
	}
	this.drawRect = function(x,y,width,height,cl){
		ctx.fillStyle = cl;
		ctx.fillRect(x,y,width,height);
	}
	this.drawSpringSurface = function(){
		this.drawRect(X,Y,width,height,Color);
	}
	this.setCanvasObject = function(canvas){
		canvasClass = canvas;
		X = parseInt((canvas.getWidth()-width)/2);
		Y = canvas.getHeight()-height-marginBottom;
	}
	this.moveLeft = function(){
		X-=springSpeed;
		if(X<=0) X =0;
	}
	this.moveRight = function(){
		X+=springSpeed;
		if(X>=canvasClass.getWidth()-width)
		X=canvasClass.getWidth()-width;
	} 
	this.getSpringProperty = function(){
		springProperty.x = X;
		springProperty.y = Y;
		return springProperty;
	}
}