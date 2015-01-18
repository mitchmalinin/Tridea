console.log('we made it');

$("#submit").click(function() {
	Parse.initialize("JHoLum302q8xVJocCtS2ZgidJ5Fna8PrfmcoUGVe", "REzU5fAkLs6uiFHMMeBtN6Ngl28fzWkG53tWLCUO");
	var user = new Parse.User();
	var email = $("#email").val();
	var password = $("#passsword").val()
	user.set("email", email);
	user.set("password", password);

	user.signUp(null, {
		success: function(user) {
    // Hooray! Let them use the app now.
    console.log("It worked")
	}
}, error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
}	

});
