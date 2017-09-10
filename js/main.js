function askQuestions () {





var firstName = prompt ('what is your first name?');
var lastName = prompt ('what is your last name?');	

var fullName = firstName + ' ' + lastName;
console.log ('User is named ' + fullName);

var age = prompt ('How old are you?');
age = parseInt (age);

if (age >= 18) {
	console.log('User is an adult');
} else if (age >= 13) {
    console.log('User is a teenager');
} else {
	console.log('User is a child');
}



if (firstName.tolowerCase() == "General"  && lastName.tolowerCase() != "Assembly") {
	console.log("greetings, General");
}                              

var faveColour = prompt('what is your favourate colour?').tolowerCase();
if (faveColour === 'red' ||
	faveColour === 'blue' ||
    faveColour === 'green' ||
    faveColour === 'yellow') {
    $('h1').css('color', faveColour);
}

}



// when the page has loaded 
$(function () {

	// Hide the content
	$('h3').next().hide();
    
    // When the user cliks the image, ask questions
    $('img').on("click", askQuestions);
    
    // When thw user clinks an H3
    $('h3').on('click', function () {

       // Toggle the next element
       $(this).next().slideToggle();
    

    });



});