$(document).ready(function() {

    $("#header-mobile-menu-btn a, #nav-mobile-menu-close-btn a").click(function(e) {
        e.preventDefault();
        $("nav").toggle();
    });



    $("nav #nav-links a").click(function() {
        $("nav").hide();
    });

});