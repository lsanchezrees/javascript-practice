/**
 * Created by Leonora on 8/5/2017.
 */
function firstMessage() {
	document.getElementById("dogMsg").innerHTML ="Dogs rule; Cats drool!";
}
function secondMessage() {
	document.getElementById("lucy").style.visibility="visible";
}

function jeopardyQuestion() {
	document.getElementById("duck").style.visibility="visible";
	document.getElementById("question").innerHTML="Q: What is something you should never tell a family member about because you might end up with one in your bathtub?"
	document.getElementById("question").style.fontWeight="bold";
	document.getElementById("question").style.backgroundColor="yellow";
}