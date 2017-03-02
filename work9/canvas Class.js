function Canvas(){
	var ctx;
	this.connection = function(){
		alert("Yes CanvasClass is Connected!!");
	}
	this.setContext = function(id){
		var canvas = document.getElementById(id);
		ctx = canvas.getContext("2d");		
	}
	this.drawRect = function(x, y, dx, dy, cl){
		ctx.fillStyle = cl;
		ctx.fillRect(x, y, dx, dy);
	}
}