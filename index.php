<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/styles.css">
		<script type="text/javascript" src="js/scripts.js"></script>
		<title>JavaScript Practice</title>
	</head>
	<body>
		<h1>My javascript file</h1>
		<div class="center"><button type="button" onclick="firstMessage();">Why don't you click here?</button></div>
		<div><h2 id="dogMsg"></h2></div>
		<button type="button" onclick="secondMessage();">I dare you to click here</button>
		<div class="pix"><p><img id="lucy"  src="images/lucy3.jpg" alt="Lucy"></p></div>
		<h2>Let's Play Jeopardy!</h2>
		<div class="pix"><p>A:  A giant duck</p>
			<label for="answer">Enter your best guess for the question: </label><input type="text" id="answer" value="" /><br><br>
			<button type="button" onclick="jeopardyQuestion();">Click for the question</button><br><br>
			<img id="duck" src="images/duck.jpg" alt="duck">
		<p id="question"></p></div>



	</body>
</html>