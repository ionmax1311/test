$(document).ready(function () {
    $('#rootwizard').bootstrapWizard({
        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length - 1;
            var $current = index;
            var $percent = ($current / $total) * 100;
            $('#rootwizard .progress-bar').css({width: $percent + '%'});

        }
    });
});

$(document).mouseup(function (e) {
    var container = $(".policy");
    if (container.has(e.target).length === 0) {
        container.fadeOut("slow");
        $('body').css('overflow-y', 'auto');
    }
});

$(".footer__policy-link").click(function () {
    $(".policy").fadeIn("slow");
    $('body').css('overflow-y', 'hidden');

});
$(".policy-close, .close-link-policy").click(function (event) {

    $(".policy").fadeOut("slow");
    $('body').css('overflow-y', 'auto');

});

$('.tasks-field-wrap').click(function (e) {

    $('.active .tasks-field-wrap').removeClass("active-item");
    $('.error-task').css('display', 'none');
    $(this).addClass("active-item");

});

$('.next .pager-link').click(function (e) {
    $('.error-task').css('display', 'none');
    console.log('click');
    if (!$('.active .tasks-field-wrap').hasClass('active-item')) {
        console.log('warm');
        $('.error-task').css('display', 'block');
        return false;
    }

});

$('.previous .pager-link').click(function (e) {
    if (!$('.active .tasks-field-wrap').hasClass('active-item')) {
        $('.error-task').css('display', 'block');
        return false;
    }
});

$(".popup-close").click(function () {
    $(".popup-ver").fadeOut("slow");
    $("#errorLead").css('display', 'none');

});