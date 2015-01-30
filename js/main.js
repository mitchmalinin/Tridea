$(document).ready(function () {

    $("#contact-form").validate({
        rules: {
            fullname: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                maxlength: 8000
            }
        },

        messages: { // custom messages
            fullname: {
                required: "Please enter your name"
            },
            email: {
                required: "Please enter your email address"
            },
            message: {
                required: "enter your message",
                maxlength: jQuery.format("The maxlength for message is {0} !")
            },
        },

        submitHandler: function(form) {
            $form = $(form);
            $container = $form.parent();
            w = $form.outerWidth();
            h = $form.outerHeight();
            $form.hide();
            
            $('#msg_submitting', $container).width(w).height(h).fadeIn(1000);            
            $.ajax({
                type: "POST",
                url: $form.attr('action'),
                data: $form.serialize(),
                success: function (data) {
                        $('#msg_submitting', $container).hide();
                        if(data == 'success'){
                            $('#msg_submitted',$container).width(w).height(h).fadeIn(1000);
                        }
                        else{
                            $('#errors',$container).html(data).show();
                            $form.show();
                        }
                }
            });
            
            return false;
        
        }

    });

});
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

