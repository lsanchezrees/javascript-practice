/**
 * Created by Leonora on 8/5/2017.
 */
/* I spent half a day trying to add jquery to my file,  but
could never get it to work with external files */


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
	var answerValue = document.getElementById("answer").value;
	var response = "";
		if (answerValue === "What is something you should never tell a family member about because you might end up with one in your bathtub?") {
		response = "Wow, you are so clever!  Copy and paste are very advanced functions!";
	} else {
		response = "No, '" + answerValue + "' is not the right question. The correct one is:<br><br>Q: What is something you should never tell a family member about because you might end up with one in your bathtub?";
	}


	document.getElementById("duck").style.visibility="visible";
	document.getElementById("question").innerHTML=response;
	document.getElementById("question").style.fontWeight="bold";
	document.getElementById("question").style.backgroundColor="yellow";
}

/*bacon function copied directly from https://baconipsum.com/json-api/
 * Additional styling added to format text */
$(document).ready(function()
{
	$("#baconButton").click(function() {
		$.getJSON('https://baconipsum.com/api/?callback=?',
			{ 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'3' },
			function(baconGoodness) {
				if (baconGoodness && baconGoodness.length > 0) {
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

//https://learnwebcode.github.io/json-example/animals-1.json

function getJsonData() {
	var dogs = document.getElementById("jsonData");
	var newRequest = new XMLHttpRequest();
	newRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
	newRequest.onload = function() {
		var ourData = JSON.parse(newRequest.responseText);
		console.log(ourData[0]);
		renderHTML(ourData);
	};
	newRequest.send();
}

function renderHTML(data) {
	var jsonContainer = document.getElementById("jsonData");
	var htmlString = "";
	for (i=0; i < data.length; i++) {
		htmlString = htmlString + "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
	}
	jsonContainer.insertAdjacentHTML('beforeend',htmlString);




}

