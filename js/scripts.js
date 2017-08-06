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

/*bacon function copied directly from https://baconipsum.com/json-api/
* Additional styling added to format text */
$(document).ready(function()
{
	$("#baconButton").click(function()
	{
		$.getJSON('https://baconipsum.com/api/?callback=?',
			{ 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'3' },
			function(baconGoodness)
			{
				if (baconGoodness && baconGoodness.length > 0)
				{
					$("#baconIpsumOutput").html('');
					for (var i = 0; i < baconGoodness.length; i++)
						$("#baconIpsumOutput").append('<p>' + baconGoodness[i] + '</p>');
					document.getElementById("baconIpsumOutput").style.fontSize="2rem";
					document.getElementById("baconIpsumOutput").style.borderColor="gray";
					document.getElementById("baconIpsumOutput").style.borderStyle="solid";
					document.getElementById("baconIpsumOutput").style.borderWeight="0.5rem";



					$("#baconIpsumOutput").show();
				}
			});
	});
});



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