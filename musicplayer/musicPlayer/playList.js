var song = new Array("ami ar kita likhtam","tumi ki jano","allah plz help me","ami chai na.","tumi chaao na","kita koram","what the fuck");	
var addSong = true;

function showSongList(){
	createSongList(addSong);
}

function createSongList(i){

if(i){
var container = document.getElementById("fileSkin");

	for(var i = 0;i<file.length;i++){
		var singleSong = document.createElement("div");
		singleSong.setAttribute("class", "singleSong");
		singleSong.setAttribute("id", "singleSong"+i);
		container.appendChild(singleSong);

		var delBtn = document.createElement("span");
		delBtn.appendChild(document.createTextNode("X"));
		delBtn.setAttribute("class", "delBtn");
		delBtn.setAttribute("id", "delBtn"+i);
		delBtn.setAttribute("onclick", "delSong("+i+")");
		singleSong.appendChild(delBtn);

		var songName = document.createElement("span");
		songName.appendChild(document.createTextNode(file[i].name));
		songName.setAttribute("class","songName");
		songName.setAttribute("id","songName"+i);
		songName.setAttribute("onclick","songName(songName"+i+")");
		singleSong.appendChild(songName);
		}
	addSong=false;
	}
}
function delSong(i){
	var id = "singleSong"+i;
	document.getElementById(id).style.display= "none";
	song.splice(i,1);
}