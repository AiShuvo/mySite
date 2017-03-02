function Enemy(){
	var ctx = "";
	var X=0;
	var Y = 50;
	var Right = true;
	var Left = false;
	var Up = false;
	var Down = false;
	var step = [3,4,5,6,7,8];
	var i = 0;
	var stepCount = 0;
	var everyBlockPositionX = [0,0,0,0,0,0,0];
	var everyBlockPositionY = [0,0,0,0,0,0,0];
	var bX = 0;
	var bY = 0;
	var bRight = false;
	var bLeft = false;
	var bUp = false;
	var bDown = true;
	var life = 5;
	var hitBullet = 1;
	this.connection = function(){
		alert("enemy class is connected!!");
	}
	this.setContext = function(id){
		var canvas = document.getElementById(id);
		ctx = canvas.getContext("2d");
	}
	this.drawRect = function(x, y, dx, dy){
		ctx.fillStyle = "black";
		ctx.fillRect(x-1, y-1, dx+2, dy+2);
		ctx.fillStyle = "yellow";
		ctx.fillRect(x, y, dx, dy);
	}
	this.drawText = function(){
		ctx.font = "20px Arial";
		ctx.fillText("you Won.Game Over",10,200);
	}
	this.drawRedRect= function(x,y,dx,dy){
		ctx.fillStyle = "red";
		ctx.fillRect(x, y, dx, dy);
	}
	this.drawEnemyDown = function(pX,pY){
		this.drawRect(pX,pY,9,9);
		this.drawRect(pX,pY+10,9,9);
		this.drawRect(pX+10,pY,9,9);
		this.drawRect(pX+10,pY+10,9,9);
		this.drawRect(pX+10,pY+20,9,9);
		this.drawRect(pX+20,pY,9,9);
		this.drawRect(pX+20,pY+10,9,9);
		this.setEveryBlockPosition(pX,pX,pX+10,pX+10,pX+10,pX+20,pX+20,pY,pY+10,pY,pY+10,pY+20,pY,pY+10);
//	alert("i have completed my task");
	}
	this.drawEnemyRight = function(pX,pY){
		this.drawRect(pX,pY,9,9);
		this.drawRect(pX,pY+10,9,9);
		this.drawRect(pX,pY+20,9,9);
		this.drawRect(pX+10,pY,9,9);
		this.drawRect(pX+10,pY+10,9,9);
		this.drawRect(pX+10,pY+20,9,9);
		this.drawRect(pX+20,pY+10,9,9);
		this.setEveryBlockPosition(pX,pX,pX,pX+10,pX+10,pX+10,pX+20,pY,pY+10,pY+20,pY,pY+10,pY+20,pY+10);
	//	this.drawBlackRect(pX+20,pY,10,10);
	//	this.drawBlackRect(pX+20,pY+20,10,10);
//	alert("i have completed my task");
	}
	this.drawEnemyLeft = function(pX,pY){
	//	this.drawBlackRect(pX,pY,10,10);
		this.drawRect(pX,pY+10,9,9);
	//	this.drawBlackRect(pX,pY+20,10,10);
		this.drawRect(pX+10,pY,9,9);
		this.drawRect(pX+10,pY+10,9,9);
		this.drawRect(pX+10,pY+20,9,9);
		this.drawRect(pX+20,pY,9,9);
		this.drawRect(pX+20,pY+10,9,9);
		this.drawRect(pX+20,pY+20,9,9);
		this.setEveryBlockPosition(pX,pX+10,pX+10,pX+10,pX+20,pX+20,pX+20,pY+10,pY,pY+10,pY+20,pY,pY+10,pY+20);
//		alert("i have completed my task");
	}
	this.drawEnemyUp = function(pX,pY){
	//	this.drawBlackRect(pX,pY,10,10);
		this.drawRect(pX,pY+10,9,9);
		this.drawRect(pX,pY+20,9,9);
		this.drawRect(pX+10,pY,9,9);
		this.drawRect(pX+10,pY+10,9,9);
		this.drawRect(pX+10,pY+20,9,9);
	//	this.drawBlackRect(pX+20,pY,10,10);
		this.drawRect(pX+20,pY+10,9,9);
		this.drawRect(pX+20,pY+20,9,9);
		this.setEveryBlockPosition(pX,pX,pX+10,pX+10,pX+10,pX+20,pX+20,pY+10,pY+20,pY,pY+10,pY+20,pY+10,pY+10);
//		alert("i have completed my task");
	}
	this.changeEnemyPosition = function(){
		if(Right){
			if(X!=270)
				X+=10;
			this.drawEnemyRight(X,Y)
		}else if(Left){
			if(X!=0)
				X-=10;
			this.drawEnemyLeft(X,Y)
		}else if(Up){
			if(Y!=50)
				Y-=10;
			this.drawEnemyUp(X,Y)
		}else if(Down){
			if(Y!=370)
				Y+=10;
			this.drawEnemyDown(X,Y);
		}
		if(stepCount >= step[i]){
			i = this.randomNumber(6);
			this.chooseDirection();
			stepCount = 0;
		}
		stepCount++;
	}
	this.drawEnemy = function(){	
		if(life!=0){
		if(Right){
			this.drawEnemyRight(X,Y)
		}else if(Left){
			this.drawEnemyLeft(X,Y);
		}else if(Up){
			this.drawEnemyUp(X,Y)
		}else if(Down){
			this.drawEnemyDown(X,Y);
		}
		this.drawBullet();
		if(bX <= 0)
			this.setBulletPosition();
		else if(bX>=300)
			this.setBulletPosition();
		else if(bY<=50)
			this.setBulletPosition();
		else if(bY>=400)
			this.setBulletPosition();
			}
	}
	this.chooseDirection = function (){
		var direction = this.randomNumber(4);
//		alert(direction);
		if(direction==0){
			Right = true;
			Left = false;
			Up = false;
			Down = false;
			}
			else if(direction==1){
			Right = false;
			Left = true;
			Up = false;
			Down = false;
			}
			else if(direction==2){
			Right = false;
			Left = false;
			Up = true;
			Down = false;
			}
			else{
			Right = false;
			Left = false;
			Up = false;
			Down = true;
			}
			
	}
	this.setPosition = function(x,y){
		X = x;
		Y = y;
	}
	this.setFace = function(l,r,u,d){
		Right = r;
		Left = l;
		Up = u;
		Down = d;
	}
	this.getRight = function(){
		return Right;
	}
	this.getLeft = function(){
		return Left;
	}
	this.getUp = function(){
		return Up;
	}
	this.getDown = function(){
		return Down;
	}
	this.setEveryBlockPosition = function(x1,x2,x3,x4,x5,x6,x7,y1,y2,y3,y4,y5,y6,y7){
		everyBlockPositionX = [x1,x2,x3,x4,x5,x6,x7];
		everyBlockPositionY = [y1,y2,y3,y4,y5,y6,y7];
	}
	this.getEveryBlockPositionX = function(){
		return everyBlockPositionX;
	}
	this.getEveryBlockPositionY = function(){
		return everyBlockPositionY;
	}
	this.randomNumber = function (upTo){
	var value = 0;
	do{
		value = parseInt(Math.random()*upTo);
	}while(value>=upTo)
		return value;
		}
	this.getX = function(){
		return X;
	}
	this.getY =function(){
		return Y;
	}
	this.drawBullet = function(){
		if(bRight)
		{
			bX+=1;
			this.drawRedRect(bX,bY,9,9);
		}
		else if(bLeft){
			bX-=1;
			this.drawRedRect(bX,bY,9,9);
		}
		else if(bUp){
			bY-=1;
			this.drawRedRect(bX,bY,9,9);
		}
		else if(bDown){
			bY+=1;
			this.drawRedRect(bX,bY,9,9);
		}
	}
	this.setBulletPosition = function(){
		bX = this.getX()+10;
		bY = this.getY()+10;
		bRight = this.getRight();
		bLeft = this.getLeft();
		bUp = this.getUp();
		bDown = this.getDown();
	//	alert("tumi ki saradibe"+ this.getX() + "tumi ki : "+this.getY());
	}
	this.decideLife = function(){
		hitBullet--;
		if(hitBullet == 0)
		{
		life--;
		hitBullet = 1;
		}
//		alert(life);
	}
	this.getLife = function(){
		return life;
	}
	this.getBulletX = function(){
		return bX;
	}
	this.getBulletY = function(){
		return bY;
	}
	this.checkGameOver = function(x){
		if(x[0]+x[1]+x[2]+x[3]==4)
			return true;
		else 
			return false;
	}
	this.setLife = function(){
		return life;
	}
}