$(document).ready(function() {

    var hero = $("#hero");
    var header = $("header");

    $(window).scroll(function() {
        if ($(window).scrollTop() >= hero.height()) {
            if (!header.hasClass("solid-header")) {
                header.addClass("solid-header");
            }
        } else {
            if (header.hasClass("solid-header")) {
                header.removeClass("solid-header");
            }
        }
    });

});