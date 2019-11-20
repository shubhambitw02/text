$('.navTogglerBtn').click(function () {
    $(this).toggleClass('active');
    $('.navRow').slideToggle();
});


$(document).ready(function () {
    window.scrollTo(0, 0);
    $(".overlay").delay(2000).fadeOut("slow");
});

/* Navigation border-bottom */
$(window).on("scroll", function () {
    var wn = $(window).scrollTop();
    if (wn > 20) {
        $(".mainHead").addClass('navScrolled');
    } else {
        $(".mainHead").removeClass('navScrolled');
    }
});
