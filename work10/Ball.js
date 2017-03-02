function Ball(){
	var X = 50;
	var Y = 50;
	var width = 10;
	var height = 10;
	var color = "lime"
	
	var right = true;
	var up = true;
	var left = false;
	var down = false;
	
	var springProperty;
	var canvasObject;
	
	var aboutInterval;
	var ballSpeed = 1;
	var movingCondition = {
		r : function(){
			return right;
		},
		l : function(){
			return left;
		},
		u : function(){
			return up;
		},
		d : function(){
			return down;
		}
	}
	var ballProperty = {
		x:X,
		y:Y,
		w:width,
		h:height,
		setMovingCondition: function(l,r,u,d){
			right = r;
			up = u;
			down = d;
			left = l;
	//		alert(left + "  "+ right + "  " +up + "  " + down);
		},
		getMovingCondition:function(){
			return movingCondition;
		}
	}
	this.connection = function(){
		alert("ball is connected!!");
	}
	this.setContext = function(id){
		var canvas = document.getElementById(id);
		ctx = canvas.getContext("2d");
	}
	this.drawCircle = function(x,y,cl){
		ctx.fillStyle = cl;
		ctx.fillRect(x, y,width,height);
	}
	this.drawBall = function(){
		this.drawCircle(X,Y,color);
	}
	this.getSpringProperty = function(object){
		springProperty = object;
		X = object.x+object.w/2-width/2;
		Y = object.y-height;
	}
	this.updateSpringProperty = function(s){
		springProperty = s;
	}
	this.getCanvasObject = function(canvas){
		canvasObject = canvas;
	}
	this.changePosition = function(){
		if(right && up){
			X+=ballSpeed;
			if(X+width>=canvasObject.getWidth()){
				right = false;
				left = true;
				}
			Y-=ballSpeed;
			if(Y<=canvasObject.getY()){
				up = false; 
				down= true
				}
			
		}else if(left && up){
			X-=ballSpeed;
			if(X<=canvasObject.getX()){
				left = false;
				right = true;
			}
			Y-=ballSpeed;
			if(Y<=canvasObject.getY()){
				up = false;
				down = true;
			}
		}else if(left && down){
			X-=ballSpeed;
			if(X<=canvasObject.getX()){
				left = false;
				right = true;
			}
			Y+=ballSpeed;
			if(Y==springProperty.y-height && X>=springProperty.x-width && X<=springProperty.x+springProperty.w){
				down = false;
				up = true;
			}
			
		}else if(right && down){
			X+=ballSpeed;
			if(X+width>=canvasObject.getWidth()){
				right = false;
				left = true;
				}
			Y+=ballSpeed;
			if(Y==springProperty.y-height && X>=springProperty.x-width && X<=springProperty.x+springProperty.w){
				down = false;
				up = true;
			}			
		} 
		if(X+width==springProperty.x && Y<=springProperty.y && Y+height>=springProperty.y+1){
			right = false;
			left = true;
			down = true;
		}
		if(X==springProperty.x+springProperty.w && Y<=springProperty.y && Y+height>=springProperty.y+1){
			right = true;
			left = false;
			down = true;
		}
		if(Y==canvasObject.getHeight()-height)
		{
			right = false;
			left = false;
			up = false;
			down = false;
			clearInterval(aboutInterval);
		}
	}
	this.ballMovieWithSpringRight = function(){
		if(springProperty.x+springProperty.w != canvasObject.getWidth())
		if(Y==springProperty.y-height){
			X+=10
		}
	}
	this.ballMovieWithSpringLeft = function(){
		if(springProperty.x!=canvasObject.getX())
		if(Y==springProperty.y-height){
			X-=10
		}
	}
	this.run = function(){
	//	aboutInterval = setInterval(this.changePosition,0);
		this.changePosition();
	}
	this.pause = function(){
		clearInterval(aboutInterval);
	}
	this.getBallProperty = function(){
		ballProperty.x = X;
		ballProperty.y = Y;
		ballProperty.w = width;
		ballProperty.h = height;	
		return ballProperty;
	}
}