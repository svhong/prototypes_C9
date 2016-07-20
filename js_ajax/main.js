//Create GLOBAL variable below here on line 2
var global_result = null;
var movie1info = null;
var response = null;
var movie_images = [];
var movie_names = [];
$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);
                global_result = result;
                response = result.feed.entry;
                // movie1info = global_result.feed.entry[0]['im:image'][2].label;
                for (var i = 0; i < response.length; i++) {
                    var movieimage = response[i]['im:image'][2].label;
                    var director = response[i]['im:artist'].label;
                    var movietitle = response[i]['im:name'].label;
                    var title = $('<div>').text(movietitle).css({
                        'font-size':'1em',
                        'font-weight': 'bold'
                    });
                    var image = $('<img>').attr('src',movieimage).css({
                        'width':'100%',
                        'height':'100%',
                    });
                    $('<div>').append(title).append(director).append(image).appendTo('#main').css({
                        'width':'150px',
                        'height':'200px',
                        'display':'inline-block',
                        'margin':'40px',
                        'color': 'black',
                        'text-align': 'center'
                    });

                }
            }
        });
        console.log('End of click function');
    });
});