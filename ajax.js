$(document).ready(function(){

		function showCharacters (response) {
					console.log("success!");
					console.log(response);

				var charactersArray = response; 

					charactersArray.forEach(function (theCharacter){
						var html = "<li>" + theCharacter.name + "</li>";
						$('.js-character-list').append(html);
					})
		}

		function handleError(error){
					console.log("error!");
					console.log(error.responseText);
		}

		function updateList(response){
			console.log("success!");
			console.log("data");

			var html = "<li>" + response.name + "</li>";
						$('.js-character-list').append(html);

		}


	$('button').on('click', function() {

			$.ajax ({
				type:"GET",
				url: "https://ironhack-characters.herokuapp.com/characters",
				success: showCharacters,
				error: handleError
			});


		$('form').on('submit', function(event) {
			event.preventDefault();

			var newCharacter= {
		    name:$('#name').val(),
		    occupation:$('#occupation').val(),
		    weapon:$('#weapon').val()
		  	};

			$.ajax({
				type: "POST",
				url: "https://ironhack-characters.herokuapp.com/characters",
				data: newCharacter,
				success: updateList,
				error: handleError	

			});


		});

	});
});