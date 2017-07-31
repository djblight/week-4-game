$( document ).ready(function() {
    

	var targetNumber = Math.floor(Math.random() * 90) + 1;
	$("#number-to-guess").text(targetNumber);
	var lockGame = false;


	var counter = 0;
	var wins = 0;
	var losses = 0;
	var numberOptions = [5, 8, 3, 7];
	var lockGame = false;


		for (i = 0; i < numberOptions.length; i++) {
		
			var imageCrystal = $("<img>");
			
			imageCrystal.addClass("crystal-image");
			imageCrystal.attr("src", "https://media1.riogrande.com/Products/Images/Large/065532.jpg");
			// imageCrystal.attr("src", "https://s-media-cache-ak0.pinimg.com/236x/f0/95/3d/f0953d9af1d6cbd5c56b07bc4858aa9b--sapphire-gemstone-gem-stones.jpg");
			// imageCrystal.attr("src", "https://images-na.ssl-images-amazon.com/images/I/61g8H1iDU9L._UY395_.jpg");
			// imageCrystal.attr("src", "http://media.paha.com/static/uploads/posts/likes/Do-You-Know-What-Your-Birthstone-Means-It-Reveals-Secrets-About-Your-Personality-weird-4.jpg");
			imageCrystal.attr("data-crystalvalue", numberOptions[i]);

			$("#crystals").append(imageCrystal);
		}

	$(".crystal-image").on("click", function() {

		if (lockGame!== true) {
		var crystalValue = ($(this).attr("data-crystalvalue"));
		crystalValue = parseInt(crystalValue);

		counter += crystalValue;

		// alert("New score " + counter);

		if (counter === targetNumber) {
			wins++;
			lockGame = true;
			var audioLose = document.getElementById("win");
        	audioLose.play();
		}

		else if (counter >= targetNumber) {
			losses++;
			lockGame = true;
			var audioLose = document.getElementById("lose");
        	audioLose.play();
		}}

       	var html = "<h1>Click on a crystal to start playing!</h1>" + 
		"<p>Number to match: " + targetNumber + "</p>" +
		"<p>Your toal score: " + counter + "</p>" +
		"<p>Wins: " + wins + "</p>" + 
		"<p>Losses: " + losses + "</p>";

		document.querySelector("#game").innerHTML = html;

	})});	
