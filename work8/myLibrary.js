var canvasApp = {
		docElement : function(canvasId){
		 var cnvs = document.getElementById(canvasId);
		 var ctx = cnvs.getContext("2d");
		 return ctx;
		},
		cheak : function(){
			alert("yeah your laibrary is ok what");
		}
		,
		drawFillRect : function(canvasId,x,y,length,height,fillColor){
			var ctx = this.docElement(canvasId);
			ctx.fillStyle = fillColor;
			ctx.globalCompositeOperation = "source-over";
			ctx.fillRect(x,y,length,height);			
		}
		,
		drawRect : function(canvasId,x,y,length,height,strokeColor,linew){
			var ctx = this.docElement(canvasId);
		//	ctx.setTransform(10,20);
			var angleInRadians = 45 * Math.PI / 180;
			//ctx.rotate(angleInRadians);
			ctx.strokeStyle = strokeColor;
			ctx.lineWidth = linew;
			ctx.strokeRect(x,y,length,height);
		}
		,
		clearRect : function(canvasId,x,y,length,height){
			var ctx = this.docElement(canvasId);
			ctx.clearRect(x,y,length,height);
		},
		drawText : function(canvasId,posX,posY,sizeAndtype,text,color,baseline){
			var ctx = this.docElement(canvasId); 
			ctx.fillStyle = color;
			ctx.font = sizeAndtype;
			ctx.fillText(text,posX,posY);
			ctx.textBaseline = baseline;
		}
		,
		drawLine : function(canvasId,posX1,posY1,posX2,posY2,storkeColor,linew){
			var ctx = this.docElement(canvasId);
			ctx.strokeStyle  = storkeColor; //string ex : 'red',"green","blue";
			ctx.lineWidth  = linew;//integer ex : 1;
		//	ctx.lineJoin = lineJoin;//string ex : "miter","bevel","round";
			//ctx.lineCap  = lineCap;//string ex : 'square',"butt","round";
			ctx.beginPath();
			ctx.moveTo(posX1, posY1);//(int,int) ex:(2,2);
			ctx.lineTo(posX2, posY2);//(int,int) ex:(20,45);
			ctx.stroke();
			ctx.closePath();
		}
		,
		drawAlphaLine : function(canvasId,posX1,posY1,posX2,posY2,storkeColor,linew){
			var ctx = this.docElement(canvasId);
			ctx.strokeStyle  = storkeColor; //string ex : 'red',"green","blue";
			ctx.lineWidth  = linew;//integer ex : 1;
		//	ctx.lineJoin = lineJoin;//string ex : "miter","bevel","round";
			//ctx.lineCap  = lineCap;//string ex : 'square',"butt","round";
			ctx.globalAlpha = 1;
			ctx.beginPath();
			ctx.moveTo(posX1, posY1);//(int,int) ex:(2,2);
			ctx.lineTo(posX2, posY2);//(int,int) ex:(20,45);
			ctx.stroke();
			ctx.globalAlpha = 1;
			ctx.closePath();
		}
		,
		drawMultiLine : function(canvasId,posX1,posY1,MultiPosX2,MultiPosY2,storkeColor,linew,lineCap,lineJoin){
			var ctx = this.docElement(canvasId);
			ctx.strokeStyle  = storkeColor; //string ex : 'red',"green","blue";
			ctx.lineWidth  = linew;//integer ex : 1;
			ctx.lineJoin = lineJoin;//string ex : "miter","bevel","round";
			ctx.lineCap  = lineCap;//string ex : 'square',"butt","round";
			ctx.beginPath();
			ctx.moveTo(posX1, posY1);//(int,int) ex:(2,2);
			for(var i =0;i<MultiPosX2.length;i++){
			ctx.lineTo(MultiPosX2[i], MultiPosY2[i]);//(int[],int[]) ex:([20,30,30,50],[20,30,30,50]);
			}
			ctx.stroke();
			ctx.closePath();
		}
		,
		arcs : function(canvasId,x, y, radius, startAngle, endAngle, anticlockwise,linew,color){
			var ctx = this.docElement(canvasId);
			ctx.beginPath();
			ctx.strokeStyle = color;
			ctx.fillStyle = color;
			ctx.lineWidth = linew;
			ctx.arc(x, y, radius, (Math.PI/180)*startAngle, (Math.PI/180)*endAngle, anticlockwise);//ex anticlockwise= true/false;
      //full circle
			ctx.stroke();
			ctx.closePath();
		},
		 printImage : function(canvasId,url,x,y,width,height){
			var ctx = this.docElement(canvasId);
			var img = new Image();
			img.src = url;
			img.onload = function(){
			ctx.drawImage(img,x,y,width,height);
			}
		 },
		 printSomePartImage : function(canvasId,url,sx, sy, sw, sh, dx, dy, dw, dh){//sx and sy= starting position of copy on image.
		 //sw snd sh = width and height on image.
		 //dx and dy = position of copied section on canvas.
		 //dw and dh = width and height of image on canvas.
			var ctx = this.docElement(canvasId);
			var img = new Image();
			img.src = url;
			img.onload = function(){
			ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
			}
		 }
	  }
	  
	  ///////////////////////////////////////////////
	  /*আর ও add করা যাবে 
	  ex :  1. ctx.globalCompositeOperation = "source-over" or "destination-atop" or //eita mainly z-Index এর মত করে কাজ করে;
			2.context.globalAlpha = .5;//it will give the amount of transparency 1-0;
			3. context.rotate(angleInRadians);
			4. context.setTransform(1,0,0,1,0,0);
			5. context.translate(x+.5*width, y+.5*height);
			6. context.scale(2,2);
			7. Color add korar process : "red","#fff000",rgb(255,0,0),rgba(255,0,0,0.5),
               var gr = context.createLinearGradient(0, 0, 100, 0);
      // Add the color stops.
               gr.addColorStop(0,'rgb(255,0,0)');
			   gr.addColorStop(.5,'rgb(0,255,0)');
               gr.addColorStop(1,'rgb(255,0,0)');	
			    
				var gr = context.createRadialGradient(50,50,25,50,50,100);
      // Add the color stops.
               gr.addColorStop(0,'rgb(255,0,0)');
      gr.addColorStop(.5,'rgb(0,255,0)');
      gr.addColorStop(1,'rgb(255,0,0)');
	  */