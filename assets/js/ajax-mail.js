$(function () {
	// Get the form.
	var form = $('#contact-form');
	// Get the messages div.
	var formMessages = $('.form__output');
	// Set up an event listener for the contact form.
	$(form).submit(function (e) {
		// Stop the browser from submitting the form.
		e.preventDefault();
		// Serialize the form data.
		var formData = $(this).serializeArray();

		
		const body1 = { name: formData[0].value, phone: formData[1].value, message: formData[3].value }
		const body2 = { name: formData[0].value, phone: formData[1].value, email: formData[2].value, message: formData[3].value }
	const body = formData[2].value === "" ? body1 : body2;
		
		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: "https://contact-us-api.carigartools.com/support",
			data: body
		}).done(function (response) {
				// Make sure that the formMessages div has the 'success' class.
				$(formMessages).removeClass('error');
				$(formMessages).addClass('success');
				// Set the message text.
				$(formMessages).text(response.message);
				//Clear the form.
				$('#contact-form input,#contact-form textarea').val('');
	    }).fail(function (data) {
				// Make sure that the formMessages div has the 'error' class.
				$(formMessages).removeClass('success');
				$(formMessages).addClass('error');
				// Set the message text.
			    var errorMessage  = JSON.parse(data.responseText).error.details[0].message;
				if (data.responseText !== '') {
					$(formMessages).text(errorMessage);
				} else {
					$(formMessages).text('Oops! An error occured and your message could not be sent.');
				}
			});
	});
});

var validations = {
	email: [/^\d{10}$/, 'Please enter correct phone number ']
};
$(document).ready(function () {
	// Check all the input fields of type email. This function will handle all the email addresses validations
	$("input[type=number]").change(function () {
		// Set the regular expression to validate the email 
		validation = new RegExp(validations['email'][0]);
		// validate the email value against the regular expression
		if (!validation.test(this.value)) {
			// If the validation fails then we show the custom error message
			this.setCustomValidity(validations['email'][1]);
			return false;
		} else {
			// This is really important. If the validation is successful you need to reset the custom error message
			this.setCustomValidity('');
		}
	});
})