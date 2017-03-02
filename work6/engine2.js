function canvas(){
window.addEventListener("keypress",eventControllar,false);
alert("Press \"space\" button to shoot the Egg. if the egg reaches to it's nearest container, your point will increase.\n otherwise the game will over.")
var mess =[	"-Life Is Very Beautiful If You have true Love.",
			"-If You Want To See Heaven Then Look At Your Mom.",
			"-Keep Faith On Allah.",
			"-Importunity can break up your relationship.",
			"-Sometimes some1 can miss you.\"keep in mind\"",
			"-Try to Understand other's problem.",
			"A man goes to the doctor and says, \"Doctor, wherever I touch, it hurts.\" <br>The doctor asks, \"What do you mean?\"<br>The man says, \"When I touch my shoulder, it really hurts. If I touch my knee - OUCH! When I touch my forehead, it really, really hurts.\" <br>The doctor says, \"I know what's wrong with you - you've broken your finger!\"",
			
			" Doctor, I have a pain in my eye whenever I drink tea. <br>Doctor: Take the spoon out of the mug before you drink.",
			"Doctor! You've got to help me! Nobody ever listens to me. No one ever pays any attention to what I have to say.<br>Doctor: Next please! ",
			
			" Two boys were arguing when the teacher entered the room. The teacher says, \"Why are you arguing?\" One boy answers, \"We found a ten dollor bill and decided to give it to whoever tells the biggest lie.\" \"You should be ashamed of yourselves,\" said the teacher, \"When I was your age I didn't even know what a lie was.\" The boys gave the ten dollars to the teacher.",
			"A: Hey, man! Please call me a taxi.<br>B: Yes, sir. You are a taxi. ",
			"PUPIL: \"Would you punish me for something I didn`t do?\"<br> TEACHER:\" Of course not.\" <br>PUPIL: \"Good, because I haven`t done my homework.\" ",
			"A teacher asked a student to write 55. <br>Student asked: How? <br>Teacher: Write 5 and beside it another 5! The student wrote 5 and stopped. <br>Teacher: What are you waiting for? <br>student: I don't know which side to write the other 5!",
			"Johnny: Teacher, can I go to the bathroom?<br>Teacher: Little Johnny, MAY I go to the bathroom?<br>Little Johnny: But I asked first!",
			"Customer in a restaurant: I would like to have a plate of rice and a piece of fried chicken and a cup of coffee <br>Waitress : Is it enough Sir?<br>Customer : What? Do you think I can't buy more? ",
			"\"You look very funny wearing that belt.\" \"I would look even funnier if I didn't wear it.\"",
			"Patient: Doctor, I think that I've been bitten by a vampire.<br>Doctor: Drink this glass of water. <br>Patient: Will it make me better?<br>Doctor: No, I but I'll be able to see if your neck leaks. ",
			"-If You Don't Help Yourself Allah must not.",
			"-A 1000's Mile Of Journey Must Begin With Singel Step."
			];

 var theCanvas = document.getElementById("canvas");
 var context = theCanvas.getContext("2d");
 	var shoot = false;
	context.fillStyle = "black";
	context.fillRect(0,0,theCanvas.width,theCanvas.height);
	var totalScore = 0;
	var eggx;
	var eggy;
	var eggUpLimit;
	var interval;
	//var shootCount = 0;
	var egg = new Egg();
	var box = [new Box(),new Box(),new Box()]

	box[0].setPosition(180,420);box[0].setImageType(true);
	box[1].setPosition(180,252);box[1].setImageType(false);
	box[2].setPosition(180,84);box[2].setImageType(false);
	box[0].setMode();
	function draw(){
		for(var i = 0;i<=2;i++)
		box[i].drawImage();
		
		if(shoot){
			whatHappenedInShoot();
			egg.drawImage();
		}
		for(var i =0;i<=2;i++)
		if(box[i].getImageType()){
			if(box[i].getCy()==420)
			for(var j =0;j<=2;j++)
			box[j].setVerticalMovement(false);
		}
		drawScore();
	}
	function whatHappenedInShoot(){
		for(var i = 0;i<=2;i++)
		if(box[i].getImageType())
		{
			egg.setPosition(box[i].getX()+7,box[i].getY());
			eggy = box[i].getY();
			eggUpLimit = eggy-200;
			box[i].setImageType(false);
			egg.setShoot(true);
		}
//		if(shoot)
		egg.setY(eggy-=5);
		//changing the form tumi kintu eikhan thekennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
		for(var i = 0;i<=2;i++){
		if(egg.getX()>=box[i].getX()&& egg.getX()<=box[i].getRangeX()&&egg.getY()>=box[i].getY() && egg.getY()<=box[i].getRangeY()){
			egg.setShoot(false);
			for(var j = 0;j<=2;j++)
			box[j].setVerticalMovement(true);			
			shoot = false;
			box[i].setImageType(true);
			totalScore = totalScore+9;
			canvasRepaint();
	//		alert("i:"+i+";  eggx: "+egg.getX()+"eggy:"+egg.getY()+" boxX : "+box[i].getX()+" r"+box[i].getRangeX()+"boxY : "+box[i].getY()+" r"+box[i].getRangeY());
		}
		}
		if(eggy<=eggUpLimit)
		{
			egg.setShoot(false);
			shoot=false;
			egg.setPosition(0,0);
			gameOverMessage();
		}
	}
	function eventControllar(e){
		if(e.keyCode == 32)
		shoot = true;
	//	alert(shoot);
	}
	function canvasRepaint(){
		context.fillStyle = "black";
		context.fillRect(0,0,theCanvas.width,theCanvas.height);
	}
	function drawScore(){
		context.fillStyle = "black";
		context.fillRect(0,0,100,50);
		context.fillStyle = "white";
		context.font = "20px _sans";
		context.textBaseline = "top";
		context.fillText("Score : "+totalScore,0,0);
		//atert("tummi");
	}
	function gameOverMessage(){
	clearInterval(interval);
		/*canvasApp.drawFillRect("Canvas",0,0,500,360,"black");
		canvasApp.drawText("Canvas",180,30,"30px _sans","Score: "+score.totalScore,"lime",top);
		canvasApp.drawText("Canvas",180,70,"40px _sans","Game Over","lime",top);
		canvasApp.drawText("Canvas",0,150,"14px GothicE",mess[Math.floor(Math.random()*mess.length)],"lime",top);
		canvasApp.drawText("Canvas",180,200,"14px _sans","www.facebook.com/AISHUVO","blue",top);
		*/
		var canv = document.getElementById("canvas");
		var msg = document.getElementById("msg");
		var uktimas = document.getElementById("uktimas");
		canv.style.display = "none";
		var messageBox = document.getElementById("messageBox");
		messageBox.style.display = "block";
		msg.innerHTML = "Score : "+ totalScore +"<br/>GameOver";
		uktimas.innerHTML += mess[Math.floor(Math.random()*mess.length)];
	}
	interval = setInterval(draw,10);
}