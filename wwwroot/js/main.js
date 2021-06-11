$(document).ready(function () {
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function () {

        $(this).addClass('transition');
    }, function () {

        $(this).removeClass('transition');
    });
});
//$('a.accordion-toggle').click(function () {

//        $(this).text('Отправлено');
//        $(collapseOne1).text($(btnGroupDrop1).text());
//    //if ($(this).next('.accordion-body').hasClass('in')) {


//    //} else {
//    //    $(this).text('Отправлено');
//    //    $(collapseOne1).text($(btnGroupDrop1).text());
//    //}

//    //if ($(this).next('.accordion-body').hasClass('in')) {
//    //    $(this).text('Отправлено');
//    //} else {
//    //    $(this).text('Find Cafe');
//    //}
//});
$('a.dropdown-item').click(function () {



    $(btnGroupDrop1).text($(this).text());

});

$(dislikes).click(function () {


    $(ressend).text("Отправлено "+$(btnGroupDrop1).text());

});