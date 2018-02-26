$(document).ready(function() {
    $( '#slider' ).lemmonSlider();

    $('#first_road').on('click', function(e){
        e.preventDefault();
        $('.infrastructure').css({'background-image' : 'url(./images/first_road.png), url(./images/infrastructure.png)'});
    });
    $('#second_road').on('click', function(e){
        e.preventDefault();
        $('.infrastructure').css({'background-image' : 'url(./images/second_road.png), url(./images/infrastructure.png)'});
    });
});