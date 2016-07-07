// Answer the questions here:

// - What do you think is going to happen?
//      After appending the newly created DOM element, I believe that when the
//      button is clicked, it will still log with the corresponding button number.
//
// - What happened?
//      When the button was clicked, the console output read "Delegated Button #5
//      Handler".
// - Why?
//      This happened because the event handler was created on the parent element.
//      Therefore regardless of when the child button was created, the parent element
//      still had the event handler applied allowing the newly created DOM element
//      to function properly through event delegation.
//========== Write your code below ===========//
$(document).ready(function(){
    $('#list').on('click','button',function () {
        console.log($(this).text());

        if($(this).attr('data-goto') == 'google'){
            window.open('https://www.google.com','_blank')
        }
    });

    $('#list').append('<li><button style="margin-top: 10px">Delegated Button#5 Handler</button></li>');
    $('#list').append('<li><button style="margin-top: 10px; background-color: red" data-goto="google">Teh Googs</button>');
});
