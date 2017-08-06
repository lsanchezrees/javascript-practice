/**
 * Created by Leonora on 8/5/2017.
 */
function firstMessage() {
	document.getElementById("dogMsg").innerHTML ="Dogs rule; Cats drool!";
}
function secondMessage() {
	document.getElementById("lucy").style.visibility="visible";
}


function showBestPets() {
	var pets = ["dogs", "dogs", "more dogs", "goldfish", "cats"];
	var userList = "";


	pets.map(function(user) {
		console.log("current user list: " + userList);
		userList = userList + "<li>" + user + "</li>";
	});
	document.getElementById("pets").innerHTML = userList;
	document.getElementById("pets").style.color="blue";
	document.getElementById("pets").style.fontSize="2rem";
}




function jeopardyQuestion() {

	document.getElementById("duck").style.visibility="visible";
	document.getElementById("question").innerHTML="No, '" + document.getElementById("answer").value + "' is not the right question. The correct one is:<br><br>Q: What is something you should never tell a family member about because you might end up with one in your bathtub?";
	document.getElementById("question").style.fontWeight="bold";
	document.getElementById("question").style.backgroundColor="yellow";
}



function reloadWindow() {
	document.getElementById("answer").value ="";
}
window.onload=reloadWindow();