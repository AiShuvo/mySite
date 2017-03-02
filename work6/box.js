function Box(){
	var theCanvas = document.getElementById("canvas");
	var context = theCanvas.getContext("2d");
	
	var x = 0;	var y = 0; var cx =0; var cy =0;
	var range = 40+Math.floor(Math.random()*60);
	var movingMode = Math.floor(Math.random()*8);
	var direction = true;
	var setEggImage = false;
	var verticalMovement = false;
	var verticleCount = 0;
	
	this.connection = function(){
		alert("Connection is Okay!!");
	}
	
	this.drawImage = function(){
		changePosition(movingMode);
		var img = new Image();
		
		if(setEggImage)
		{img.src = "blackEggInPot.png";}
		else
		{img.src = "blackPot.png";}
		
		img.onload = function(){
			context.drawImage(img,cx+x,cy+y,40,30);
		}
	}
	this.setMode =function(){
		movingMode = 2;
	}
	this.setPosition = function(X,Y){
		cx = X;
		cy = Y;
	}
	this.getX = function(){return cx+x;}
	this.getY = function(){return cy+y;}
	this.getCy = function(){return cy;}
	this.setImageType = function(value){
		setEggImage = value;
	}
	this.getImageType = function(){
		return setEggImage;
	}
	this.setVerticalMovement = function(value){
		verticalMovement = value;
	}
	this.getRangeX = function(){
	     return cx+x+30;
	}
	this.getRangeY = function(){
		return cy+y+30;
	}
	function changePosition(mode){
	//	alert(mode);
		if(mode==0){
			if(direction){
				x++;
				y++;if(x>=range)direction = false;
			}else{
				x--;
				y--;if(x<=-range)direction = true;
			}
		}
		else if(mode == 1){
			if(direction){
				x++;if(x>=range)direction = false;
			}else{
				x--;if(x<=-range)direction = true;
			}
		}
		else if(mode==2)
		{
			x=x;y=y;
		}
		else {
			if(direction){
				x++;y--;if(x>=range)direction = false;
			}else{
				x--;y++;if(x<=-range)direction = true;
			}
		}
		if(verticalMovement)
		{
			cy++;verticleCount++;
			if(cy>=504){cy = 0;cx = 180;y = 0;x= 0;movingMode = Math.floor(Math.random()*3);
			context.fillStyle = "black";
				context.fillRect(0,0,theCanvas.width,theCanvas.height);
			}
			if(verticleCount==168)
				{
	//			verticalMovement = false;
				verticleCount = 0;
				}
		}
	}
}