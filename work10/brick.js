function Brick(){
	var X = 0;
	var Y = 0;
	var width = 50;
	var height = 15;
	var color = "red";
	var borderColor = "white"
	var borderThickness = 1;
	var aboutDraw = true;
	var ballProperty;
	var hit = true;
	this.connection = function(){
		alert("Brick is connected");
	}
	this.setContext = function(id){
		var canvas = document.getElementById(id);
		ctx = canvas.getContext("2d");
	}
	this.drawRect = function(x,y,width,height,cl){
		ctx.fillStyle = cl;
		ctx.fillRect(x,y,width,height);
	}
	this.aboutDrawBrick = function(v){
		aboutDraw = v;
	}
	this.drawBrick = function(){
		if(aboutDraw){
		this.drawRect(X,Y,width,height,borderColor);
		this.drawRect(X+borderThickness,Y+borderThickness,width-borderThickness,height-borderThickness,color);
		}else{
			X = 0;
			Y = 0;
			width = 0;
			height = 0;
		}
	}
	this.setX = function(x){
		X=x;
	}
	this.getX = function(){
		return X;
	}
	
	this.setY = function(y){
		Y = y;
	}
	this.getY = function(){
		return Y;
	}
	this.setXYC = function(x,y,cl){
		X = x;
		Y = y;
		color = cl;
	}
	this.setWidth = function(w){
		width = w;
	}
	this.getWidth = function(){
		return width;
	}
	
	this.setHeight = function(h){
		height = h;
	}
	this.getHeight = function(){
		return height;
	}
	this.setColor = function(cl){
		color = cl;
	}
	this.setBallProperty = function(object){
		ballProperty = object;
	//	ballProperty.setMovingCondition(true,false,true,false);
		this.decideMovingofBall()
	}
	this.decideMovingofBall = function(){
		if(ballProperty.x+ballProperty.w>=X && ballProperty.x<=X+width && ballProperty.y+ballProperty.h==Y){
		//	alert("up to down yes");
			if(ballProperty.getMovingCondition().l() && ballProperty.getMovingCondition().d())
				ballProperty.setMovingCondition(true,false,true,false);
			else if(ballProperty.getMovingCondition().r() && ballProperty.getMovingCondition().d())
				ballProperty.setMovingCondition(false,true,true,false);
			this.decideAboutDraw();
		}
		if(ballProperty.x==X+width && Y<=ballProperty.y+ballProperty.h && Y+height>=ballProperty.y){
		//	alert("right to left yes");
			if(ballProperty.getMovingCondition().d() && ballProperty.getMovingCondition().l())
				ballProperty.setMovingCondition(false,true,false,true);
			else if(ballProperty.getMovingCondition().l() && ballProperty.getMovingCondition().u())
				ballProperty.setMovingCondition(false,true,true,false);
			this.decideAboutDraw();
		}
		if(ballProperty.x+ballProperty.w==X && Y<=ballProperty.y+ballProperty.h && Y+height>=ballProperty.y){
		//	alert("left to right yes");
			if(ballProperty.getMovingCondition().d() && ballProperty.getMovingCondition().r())
				ballProperty.setMovingCondition(true,false,false,true);
			else if(ballProperty.getMovingCondition().r() && ballProperty.getMovingCondition().u())
				ballProperty.setMovingCondition(true,false,true,false);
			this.decideAboutDraw();
		}
		if(ballProperty.x+ballProperty.w>=X && ballProperty.x<=X+width && ballProperty.y==Y+height){
		//	alert("down to up yes");
			if(ballProperty.getMovingCondition().u() && ballProperty.getMovingCondition().r())
				ballProperty.setMovingCondition(false,true,false,true);
			else if(ballProperty.getMovingCondition().l() && ballProperty.getMovingCondition().u())
				ballProperty.setMovingCondition(true,false,false,true);
			this.decideAboutDraw();
		}
	}
	this.decideAboutDraw = function(){
		if(color == "gray"){
			aboutDraw = true;
		}else if(color == "red"){ 
			color = "blue";
		}else if(color == "blue"){
			color = "green";
		}else
			{
			aboutDraw = false;
			hit = true;
			}
	}
	this.setHitCondition = function(value){
		hit = value;
	}
	this.hitCondition = function(){
		return hit;
	}
}