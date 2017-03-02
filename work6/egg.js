function Egg(){
	var theCanvas = document.getElementById("canvas");
	var context = theCanvas.getContext("2d");
	
	var cx = 0;
	var cy = 0;
	var y = 0;
	var shoot = false;
	
	this.drawImage = function(){
	
	if(shoot){
	//	changePosition();
		var img = new Image();
		img.src = "blackEgg.png";
		img.onload = function(){
			context.drawImage(img,cx,cy,30,25);
		}
//		context.fillstyle = "black";
	//	context.fillRect(cx,cy+15,25,50);
		}
	}
	this.getShoot= function(){
		return shoot;
	}
	this.setPosition= function(X,Y){
		cx = X;
		cy = Y;
	}
	this.setY = function(value){
		cy = value;
	//	alert(cy);
	}
	this.getX = function(){
		return cx;
	}
	this.getY = function(){
		return cy;
	}
	this.setShoot = function(value){
		shoot = value;
	}
	function changePosition(){
		y -= 5;
		if(y<=-250){y=0;cy = 0;shoot = false;}
	}
}