var roman = ['i', 'ii', 'iii', 'iv', 'v'];

window.addEventListener('DOMContentLoaded', function() {
    QueryLoader2(document.querySelector("body"), {
        barColor: "#f0ffff",
        backgroundColor: "#000",
        barHeight: 1,
        minimumTime: 300
    });
});

var swiper = new Swiper('.swiper-container', {
    parallax: true,
    pagination: '.swiper-pagination',
    speed: 600,
    paginationClickable: true,
    paginationBulletRender: function (index, className) {
        return '<span class="' + className + '">' + roman[index] + '</span>';
    },
    mousewheelControl: true,
    keyboardControl: true,
    direction: 'vertical',
    resistanceRatio: '0.6'
});

$(document).ready(function() {
    var toastText = "Click on the center of the images \n or their bottom tabs \n to view more information...";
    var $toastContent = $('<span><p><i id="toastIcon" class="material-icons">info_outline</i></p>' + toastText + '</span>');
    swiper.once('slideChangeEnd', function(){
        Materialize.toast($toastContent, 5000, 'pop-up');
    });
});
