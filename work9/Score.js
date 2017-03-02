function Score(){
	var life = 5;
	var eL1= 5;
	var eL2 = 5;
	var eL3 = 5;
	var eL4 = 5;
	this.Connection = function(){
		alert("Score is Connected!!");
	}
	this.setContext = function(id){
		var canvas = document.getElementById(id);
		ctx = canvas.getContext("2d");		
	}
	this.drawRect = function(x, y, dx, dy, cl){
		ctx.fillStyle = cl;
		ctx.fillRect(x, y, dx, dy);
	}
	this.drawText = function(text,x,y){
		ctx.fillStyle = "white";
		ctx.font = "14px Arial";
		ctx.fillText(text,x,y);
	}
	this.drawScore = function(){
		var i =0;
		var x = 52;
		var y = 22;
		var eX=192;
		var width = 10;
		var height = 10;
		var next = 11
		this.drawText("Life  ",20,30);
		this.drawRect(50,20,58,14,"black");
		if(life>0)
		for(i=0;i<life;i++){
			this.drawRect(x,y,width,height,"white");
			x=x+next;
		}
		this.drawText("Enemy Life  ",110,30);
		this.drawRect(190,5,58,7,"black");
		this.drawRect(190,15,58,7,"black");
		this.drawRect(190,25,58,7,"black");
		this.drawRect(190,35,58,7,"black");

		for(i=0;i<eL1;i++){
			this.drawRect(eX,6,10,5,"white");
			eX=eX+next;
		}
		eX=192;
		for(i=0;i<eL2;i++){
			this.drawRect(eX,16,10,5,"white");
			eX=eX+next;
		}
		eX = 192;
		for(i=0;i<eL3;i++){
			this.drawRect(eX,26,10,5,"white");
			eX=eX+next;
		}
		eX = 192;
		for(i=0;i<eL4;i++){
			this.drawRect(eX,36,10,5,"white");
			eX=eX+next;
		}
	}
	this.setLife = function(x,e1,e2,e3,e4){
		life = x-1;
		eL1 = e1;
		eL2 = e2;
		eL3 = e3;
		eL4 = e4;
	}
}