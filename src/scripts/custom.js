$(function() {
    console.log('window loaded');

    $('#button').bind('click', function() {
        $('#text').slideUp();

        $.get('https://api.chucknorris.io/jokes/random', function(data) {
            // jQuery does smart response data detection > JSON
            console.log(data.value);

            // Add response data to DOM
            $('#text').html(data.value).slideDown();
        });
    });
});