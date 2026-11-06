// here all our events will be handled
const form = document.getElementById("application-form");
const message = document.getElementById("message");

form.addEventListener('submit', function(event){
	// prevent the default form submission behavior
	event.preventDefault();

	// get the form data
	const fullname = document.getElementById('full-name').value;
	const email = document.getElementById('email').value;
	const programme = document.getElementById('programme').value;

	// log in the browser console
	console.log("Full Name:" +  fullname);
	console.log("Email:" + email);
	console.log("Programme:" + programme);

	// success message
	alert("Hi" + fullname +  ", Your Application has been submitted successfully!")
	message.textContent = "Your Application has been submitted successfully!";
});
