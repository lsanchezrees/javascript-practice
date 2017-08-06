<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

		<!-- Font Awesome -->
		<link type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

		<!-- custom css link -->
		<link rel="stylesheet" type="text/css" href="css/styles.css">



		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
		<script type="text/javascript" src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script type="text/javascript" src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->

		<!-- jquery v3.0 -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>

		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>



		<!--link to js file-->
		<script type="text/javascript" src="js/scripts.js"></script>

		<title>JavaScript Practice</title>
	</head>

	<body>
		<div class="container">
			<h1 class="text-center">My javascript file</h1>
			<!--first message button-->
			<div class="row">
				<div class="col-md-12 text-center">
		<button type="button" onclick="firstMessage();">Why don't you click here?</button>
				</div><!--column-->
			</div><!--row-->

			<!--second message button-->
			<div class="row">
				<div class="col-md-12 text-center">
		<div><h2 id="dogMsg"></h2></div>
			<p class="text-center"><button type="button" onclick="secondMessage();">I dare you to click here</button></p>
				</div><!--column-->
			</div><!--row-->
			<div class="row">
				<div class="col-md-12 text-center">
		<div class="pix text-center"><p><img id="lucy"  src="images/lucy3.jpg" alt="Lucy" class="img-responsive center-block"></p></div>
				</div><!--column-->
			</div><!--row-->

			<!--div for map and button-->
			<div class="row">
				<div class="col-md-12 text-center">
			<p><button type="button" onclick="showBestPets();">Who are the best pets?</button></p>
					<ol id="pets"></ol>
				</div><!--column-->
			</div><!--row-->

			<!--jeopardy section-->
		<h2 class="text-center">Let's Play Jeopardy!</h2>
			<div class="row jeopardy">
				<div class="col-md-12 text-center">
		<div class="pix text-center"><p>A:  A giant duck</p>
		</div><!--column-->
				</div><!--row-->

				<div class="row jeopardy">
					<div class="col-md-12 text-center">
			<label for="answer">Enter your best guess for the question: &nbsp;</label><input type="text" id="answer" value="" />
					</div><!--column-->
				</div><!--row-->

				<div class="row jeopardy">
					<div class="col-md-12 text-center">
			<button type="button" onclick="jeopardyQuestion();">Click for the question</button><br><br>
					</div><!--column-->
				</div><!--row-->
						<div class="row">
							<div class="col-md-12 text-center">
			<img id="duck" src="images/duck.jpg" alt="duck" class="img-responsive center-block">
		<p id="question"></p></div>
						</div><!--column-->
			</div><!--row-->


			<!--bacon goes here-->
			<div class="row">
				<div class="col-md-12 text-center">
					<input id="baconButton" type="button" value="Give me bacon">
					<div id="baconIpsumOutput"></div>

				</div><!--column-->
			</div><!--row-->
		</div><!--container-->


	</body>
</html>