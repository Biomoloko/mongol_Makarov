$(function() {
$('a[href*=#]:not([href=#])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
if (target.length) {
$('html,body').animate({
scrollTop: target.offset().top
}, 1000);
return false;
}
}
});
});

$('#top-button').css('opacity', '0')

$(function () {
var element = $("#top-button"), display;
$(window).scroll(function () {
display = $(this).scrollTop() >= 2000;
display != element.css('opacity') && element.stop().animate({ 'opacity': display }, 500);
});
});