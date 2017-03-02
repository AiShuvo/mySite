function myTank(){
	var ctx;
	var X = 150;
	var Y = 200;
	var right = false;
	var left = false;
	var up = false;
	var down = true;
	var bRight = false;
	var bLeft = false;
	var bUp = false;
	var bDown = false;
	var bX = -10;
	var bY = -10;
	var life = 6;
	var blockPositionX = [0,0,0,0,0,0];
	var blockPositionY = [0,0,0,0,0,0];
	this.connection = function(){
		alert("myTank is connected!!!");
	}
	this.setContext = function(id){
		var canvas = document.getElementById(id);
		ctx = canvas.getContext("2d");
	}
	this.drawRect = function(x,y){
		ctx.fillStyle = "black";
		ctx.fillRect(x-1,y-1,11,11);
		ctx.fillStyle = "lime";
		ctx.fillRect(x,y,9,9);
		ctx.fillStyle = "Blue";
	}
	this.bullet = function(x,y, cl){
	//	ctx.fillstyle = cl;
		ctx.fillRect(x,y,9,9);
	}
	this.drawText = function(){
		ctx.font = "20px Arial";
		ctx.fillText("you lose.Game Over",10,200);
	}
	this.changePosition = function(){
		if(right)
			X+=10;
		else if(left)
			X-=10;
		else if(up)
			Y-=10;
		else if(down)
			Y+=10;
	}
	this.setFace = function(l,r,u,d){
		left = l;
		right = r;
		up = u;
		down = d;
	}
	this.tankRight = function(){
		this.drawRect(X,Y,9,9);
		this.drawRect(X,Y+20,9,9);
		this.drawRect(X+10,Y,9,9);
		this.drawRect(X+10,Y+10,9,9);
		this.drawRect(X+10,Y+20,9,9);
		this.drawRect(X+20,Y+10,9,9);
		this.setEveryBlockPosition(X,X,X+10,X+10,X+10,X+20,Y,Y+20,Y,Y+10,Y+20,Y+10);
	}
	this.tankLeft = function(){
		this.drawRect(X,Y+10,9,9);
		this.drawRect(X+10,Y,9,9);
		this.drawRect(X+10,Y+10,9,9);
		this.drawRect(X+10,Y+20,9,9);
		this.drawRect(X+20,Y,9,9);
		this.drawRect(X+20,Y+20,9,9);
		this.setEveryBlockPosition(X,X+10,X+10,X+10,X+20,X+20,Y+10,Y,Y+10,Y+20,Y,Y+20);
	}
	this.tankUp = function(){
		this.drawRect(X+10,Y,9,9);
		this.drawRect(X,Y+10,9,9);
		this.drawRect(X,Y+20,9,9);
		this.drawRect(X+10,Y+10,9,9);
		this.drawRect(X+20,Y+10,9,9);
		this.drawRect(X+20,Y+20,9,9);
		this.setEveryBlockPosition(X+10,X,X,X+10,X+20,X+20,Y,Y+10,Y+20,Y+10,Y+10,Y+20);
	}
	this.tankDown = function(){
		this.drawRect(X,Y,9,9);
		this.drawRect(X,Y+10,9,9);
		this.drawRect(X+10,Y+10,9,9);
		this.drawRect(X+10,Y+20,9,9);
		this.drawRect(X+20,Y,9,9);
		this.drawRect(X+20,Y+10,9,9);
		this.setEveryBlockPosition(X,X,X+10,X+10,X+20,X+20,Y,Y+10,Y+10,Y+20,Y,Y+10);
	}
	this.drawTank = function(){
		if(right){
			this.tankRight();
		}else if(left){
			this.tankLeft();
		}else if(up){
			this.tankUp();
		}else if(down){
			this.tankDown();
		}
	//	if(bX!=0||bX!=300)||bY!=50||bY!=400){
		if(bRight)
		bX++;
		else if(bLeft)
		bX--;
		else if(bDown)
		bY++;
		else if(bUp)
		bY--;
		this.drawBullet();
	//	}
	}
	this.setXY = function(x,y){
		X = x;
		Y = y;
	}
	this.getX = function(){
		return X+10;
	}
	this.getY = function(){
		return Y+10;
	}
	this.setBulletPosition = function(x,y){
		bX = x;
		bY = y;
	}
	this.getBulletX = function(){
		return bX;
	}
	this.getBulletY = function(){
		return bY;
	}
	this.drawBullet = function(){
		this.bullet(bX,bY,"black");
	}
	this.getRight = function(){
		return right;
	}
	this.getLeft = function(){
		return left;
	}
	this.getUp = function(){
		return up;
	}
	this.getDown = function(){
		return down;
	}
	this.setBulletFace = function(l,r,u,d){
		bRight = r;
		bLeft = l;
		bUp = u;
		bDown = d;
	}
	this.getbX = function(){
		return bX;
	}
	this.getbY = function(){
		return bY;
	}
	this.setEveryBlockPosition = function(x1,x2,x3,x4,x5,x6,y1,y2,y3,y4,y5,y6){
		blockPositionX = [x1,x2,x3,x4,x5,x6];
		blockPositionY = [y1,y2,y3,y4,y5,y6];
	}
	this.getBlockPositionX = function(){
		return blockPositionX;
	}
	this.getBlockPositionY = function(){
		return blockPositionY;
	}
	this.decideLife = function(clearInterval1,clearInterval2){
		life--;
		if(life <= 0)
		{
			alert("You loose game over");
			clearInterval(clearInterval1);
			clearInterval(clearInterval2);
		}
	}
	this.getLife = function(){
		return life;
	}
}