$(document).ready(function() {
    $('.main-navbar li').click(function() {
        $('.main-navbar li').removeClass('active');
        $(this).addClass('active');
    });

    $('.circel-process').click(function() {
        $('.circel-process').removeClass('active');
        $(this).addClass('active');
    });

    $('.projects-nav li').click(function() {
        $('.projects-nav li').removeClass('active');
        $(this).addClass('active');
    });
});