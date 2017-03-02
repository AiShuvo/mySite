function brickMap(){
	var ballObject;
	var brickObject;
	var id;
	var setOnce = true;
	var selectMap = 0;
	var noOfBrickUsed = 56;
	var stage = 1;
	brick = [new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick(),new Brick()];
	this.connection = function(){
		alert("Map is connected")
	}
	this.getId = function(i){
		id = i;
	}
	this.getMap = function(){
		return selectMap;
	}
	this.setNoOfbrickUsed = function(v){
		noOfBrickUsed = v;
	}
	//here is Map 1........................................................................
	this.map1Draw = function(){			
			var i;
			var totalhited = 0;
			var gx,gy,bx,by,rx,ry;
			if(setOnce)
				{		
				if(stage==1)
					noOfBrickUsed = this.map1ColorAndPos();
				else if(stage==2)
					noOfBrickUsed = this.map2ColorAndPos();
				else
					noOfBrickUsed = this.map1ColorAndPos();
				
				
				for(i=0; i<noOfBrickUsed; i++)
					{
					brick[i].setHitCondition(false);
					brick[i].aboutDrawBrick(true);
					}
				setOnce = false;
				alert(noOfBrickUsed)
				}
			for(i =0;i<noOfBrickUsed;i++){
				brick[i].setContext("canvas");
				brick[i].setBallProperty(ball.getBallProperty());
			}			
			//green brick set.......
			for(i =0;i<noOfBrickUsed;i++){
			brick[i].drawBrick();
			}
			for(i =0;i<noOfBrickUsed;i++){
			if(brick[i].hitCondition())
				totalhited+=1;
			}
			if(totalhited==noOfBrickUsed)
				{
				stage++;
				alert("Stage : " +stage+""+totalhited);
				setOnce = true;
				}
			else
				totalhited = 0;
	}
	this.map1ColorAndPos = function(){
		var color1 = "green";
		var color2 = "blue";
		var color3 = "red";
		var Y = 50;
		var X = -25;
		var i = 0;
		var bH = brick[0].getHeight();
		
		//alert(brick[0].getHeight());
			brick[0].setXYC(4*50+X,Y,color1);
			brick[1].setXYC(3*50+X,Y+bH,color1);
			brick[2].setXYC(2*50+X,Y+2*bH,color1);
			brick[3].setXYC(50+X,Y+3*bH,color1);
			brick[4].setXYC(5*50+X,Y,color1);
			brick[5].setXYC(6*50+X,Y+bH,color1);
			brick[6].setXYC(7*50+X,Y+2*bH,color1);
			brick[7].setXYC(8*50+X,Y+3*bH,color1);
			brick[8].setXYC(50+X,Y+6*bH,color1);
			brick[9].setXYC(2*50+X,Y+7*bH,color1);
			brick[10].setXYC(3*50+X,Y+8*bH,color1);
			brick[11].setXYC(4*50+X,Y+9*bH,color1);
			brick[12].setXYC(5*50+X,Y+9*bH,color1);
			brick[13].setXYC(6*50+X,Y+8*bH,color1);
			brick[14].setXYC(7*50+X,Y+7*bH,color1);
			brick[15].setXYC(8*50+X,Y+6*bH,color1);
			brick[16].setXYC(50+X,Y+4*bH,color2);
			brick[17].setXYC(50+X,Y+5*bH,color2);
			brick[18].setXYC(2*50+X,Y+3*bH,color2);
			brick[19].setXYC(2*50+X,Y+4*bH,color2);
			brick[20].setXYC(2*50+X,Y+5*bH,color2);
			brick[21].setXYC(2*50+X,Y+6*bH,color2);
			brick[22].setXYC(3*50+X,Y+2*bH,color2);
			brick[23].setXYC(3*50+X,Y+3*bH,color2);
			brick[24].setXYC(3*50+X,Y+6*bH,color2);
			brick[25].setXYC(3*50+X,Y+7*bH,color2);
			brick[26].setXYC(4*50+X,Y+bH,color2);
			brick[27].setXYC(4*50+X,Y+2*bH,color2);
			brick[28].setXYC(4*50+X,Y+7*bH,color2);
			brick[29].setXYC(4*50+X,Y+8*bH,color2);
			brick[30].setXYC(5*50+X,Y+bH,color2);
			brick[31].setXYC(5*50+X,Y+2*bH,color2);
			brick[32].setXYC(5*50+X,Y+7*bH,color2);
			brick[33].setXYC(5*50+X,Y+8*bH,color2);
			brick[34].setXYC(6*50+X,Y+2*bH,color2);
			brick[35].setXYC(6*50+X,Y+3*bH,color2);
			brick[36].setXYC(6*50+X,Y+6*bH,color2);
			brick[37].setXYC(6*50+X,Y+7*bH,color2);
			brick[38].setXYC(7*50+X,Y+3*bH,color2);
			brick[39].setXYC(7*50+X,Y+4*bH,color2);
			brick[40].setXYC(7*50+X,Y+5*bH,color2);
			brick[41].setXYC(7*50+X,Y+6*bH,color2);
			brick[42].setXYC(8*50+X,Y+4*bH,color2);
			brick[43].setXYC(8*50+X,Y+5*bH,color2);
			brick[44].setXYC(3*50+X,Y+4*bH,color3);
			brick[45].setXYC(3*50+X,Y+5*bH,color3);
			brick[46].setXYC(4*50+X,Y+3*bH,color3);
			brick[47].setXYC(4*50+X,Y+4*bH,color3);
			brick[48].setXYC(4*50+X,Y+5*bH,color3);
			brick[49].setXYC(4*50+X,Y+6*bH,color3);
			brick[50].setXYC(5*50+X,Y+3*bH,color3);
			brick[51].setXYC(5*50+X,Y+4*bH,color3);
			brick[52].setXYC(5*50+X,Y+5*bH,color3);
			brick[53].setXYC(5*50+X,Y+6*bH,color3);
			brick[54].setXYC(6*50+X,Y+4*bH,color3);
			brick[55].setXYC(6*50+X,Y+5*bH,color3);
			return 56;
	}
	//here is Map 2.........................................................................
	this.map2ColorAndPos = function(){
		var color1 = "green";
		var color2 = "green";
		var color3 = "green";
		var Y = 50;
		var X = -25;
		var i = 0;
		var bH = brick[0].getHeight();
		
		//alert(brick[0].getHeight());
			brick[0].setXYC(4*50+X,Y,color1);
			brick[1].setXYC(3*50+X,Y+bH,color1);
			brick[2].setXYC(2*50+X,Y+2*bH,color1);
			brick[3].setXYC(50+X,Y+3*bH,color1);
			brick[4].setXYC(5*50+X,Y,color1);
			brick[5].setXYC(6*50+X,Y+bH,color1);
			brick[6].setXYC(7*50+X,Y+2*bH,color1);
			brick[7].setXYC(8*50+X,Y+3*bH,color1);
			brick[8].setXYC(50+X,Y+6*bH,color1);
			brick[9].setXYC(2*50+X,Y+7*bH,color1);
			brick[10].setXYC(3*50+X,Y+8*bH,color1);
			brick[11].setXYC(4*50+X,Y+9*bH,color1);
			brick[12].setXYC(5*50+X,Y+9*bH,color1);
			brick[13].setXYC(6*50+X,Y+8*bH,color1);
			brick[14].setXYC(7*50+X,Y+7*bH,color1);
			brick[15].setXYC(8*50+X,Y+6*bH,color1);
			brick[16].setXYC(50+X,Y+4*bH,color2);
			brick[17].setXYC(50+X,Y+5*bH,color2);
			brick[18].setXYC(2*50+X,Y+3*bH,color2);
			brick[19].setXYC(2*50+X,Y+4*bH,color2);
			brick[20].setXYC(2*50+X,Y+5*bH,color2);
			brick[21].setXYC(2*50+X,Y+6*bH,color2);
			brick[22].setXYC(3*50+X,Y+2*bH,color2);
			brick[23].setXYC(3*50+X,Y+3*bH,color2);
			brick[24].setXYC(3*50+X,Y+6*bH,color2);
			brick[25].setXYC(3*50+X,Y+7*bH,color2);
			brick[26].setXYC(4*50+X,Y+bH,color2);
			brick[27].setXYC(4*50+X,Y+2*bH,color2);
			brick[28].setXYC(4*50+X,Y+7*bH,color2);
			brick[29].setXYC(4*50+X,Y+8*bH,color2);
			brick[30].setXYC(5*50+X,Y+bH,color2);
			brick[31].setXYC(5*50+X,Y+2*bH,color2);
			brick[32].setXYC(5*50+X,Y+7*bH,color2);
			brick[33].setXYC(5*50+X,Y+8*bH,color2);
			brick[34].setXYC(6*50+X,Y+2*bH,color2);
			brick[35].setXYC(6*50+X,Y+3*bH,color2);
			brick[36].setXYC(6*50+X,Y+6*bH,color2);
			brick[37].setXYC(6*50+X,Y+7*bH,color2);
			brick[38].setXYC(7*50+X,Y+3*bH,color2);
			brick[39].setXYC(7*50+X,Y+4*bH,color2);
			brick[40].setXYC(7*50+X,Y+5*bH,color2);
			brick[41].setXYC(7*50+X,Y+6*bH,color2);
			brick[42].setXYC(8*50+X,Y+4*bH,color2);
			brick[43].setXYC(8*50+X,Y+5*bH,color2);
			brick[44].setXYC(3*50+X,Y+4*bH,color3);
			brick[45].setXYC(3*50+X,Y+5*bH,color3);
			brick[46].setXYC(4*50+X,Y+3*bH,color3);
			brick[47].setXYC(4*50+X,Y+4*bH,color3);
			brick[48].setXYC(4*50+X,Y+5*bH,color3);
			brick[49].setXYC(4*50+X,Y+6*bH,color3);
			brick[50].setXYC(5*50+X,Y+3*bH,color3);
			brick[51].setXYC(5*50+X,Y+4*bH,color3);
			brick[52].setXYC(5*50+X,Y+5*bH,color3);
			brick[53].setXYC(5*50+X,Y+6*bH,color3);
			brick[54].setXYC(6*50+X,Y+4*bH,color3);
			brick[55].setXYC(6*50+X,Y+5*bH,color3);
			return 56;
	}
}