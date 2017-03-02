var list= new Array();
var audio = document.getElementById("audio");

function fileAdd() {	
	var file = document.getElementById("file").files;
	for(var i = 0; i<file.length;i++)
	{
	list[list.length+i] = file.item(i);
	}
	if(file)
		loadSong(list[0], true);
		alert("what");
}

function loadSong(song,decesion){
if(decesion){
	var reader = new FileReader();
		reader.readAsDataURL(song);
		reader.addEventListener("load",function(){
		audio.src = reader.result;
	});
	}
	return false;
}