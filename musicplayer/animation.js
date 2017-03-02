function fileListOpen(){
		var playerSkin = document.getElementById("playerSkin");
		var fileSkin = document.getElementById("fileSkin");
		if(animationType()==1){
			playerSkin.style.animationName = "shrinkPlayerFull";
			fileSkin.style.animationName = "openPlaylistFull";
		}else if(animationType()==2){
			playerSkin.style.animationName = "shrinkPlayer";
			fileSkin.style.animationName = "openPlaylist";
		}
		playerSkin.classList.remove("helpToClosePlaylist");
		playerSkin.classList.add("helpToShowPlaylist");
		
		fileSkin.classList.remove("hidePlaylist");
		fileSkin.classList.add("showPlaylist");
	}
	function fileListClose(){
		var playerSkin = document.getElementById("playerSkin");
		var fileSkin = document.getElementById("fileSkin");
		
		if(animationType()==1){
			playerSkin.style.animationName = "growPlayerFull";
			fileSkin.style.animationName = "closePlaylistFull";
		}else if(animationType()==2){
			playerSkin.style.animationName = "growPlayer";
			fileSkin.style.animationName = "closePlaylist";
		}
		
		playerSkin.classList.remove("helpToShowPlaylist");
		playerSkin.classList.add("helpToClosePlaylist");
		
		fileSkin.classList.remove("showPlaylist");
		fileSkin.classList.add("hidePlaylist");
	}
//choose the window condition, which type of animation is perfect acctually.	
	function animationType(){
		var height = window.innerHeight;
		var width = window.innerWidth;
		var maxHeight = screen.height;
		var maxWidth = screen.width;
		
		var percentageOfHeight = (height * 100)/maxHeight;
		var percentageOfWidth = (width * 100)/maxWidth;
//			alert(width + " "+ height+ " "+maxWidth +"  "+maxHeight);
	//		alert(percentageOfHeight+"  "+percentageOfWidth);
		if(percentageOfHeight < 39.0625 && percentageOfWidth < 46.8521){
			return 1; //animation in audio player skin 100% ly;
		}else if(percentageOfHeight < 39.0625 && percentageOfWidth > 46.8521)
			return 2;//animation 50% in audio player;
		else if(percentageOfHeight > 39.0625 && percentageOfWidth > 46.8521)
			return 2;//animate in body
	}
	function onResizeAction(){
		fileListClose();
	}