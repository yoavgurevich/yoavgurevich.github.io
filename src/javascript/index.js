var roman = ['i', 'ii', 'iii', 'iv', 'v', 'vi'];

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
    resistanceRatio: '0.6',
    a11y: true,
    firstSlideMessage: 'Welcome',
    lastSlideMessage: 'Contact Info'
});

$(document).ready(function() {
    $('.carousel').carousel();
    var toastText = " Click on the center of the images \n or their bottom tabs \n to view more information...";
    var $toastContent = $('<span><i id="toastIcon" class="material-icons">info_outline</i>' + toastText + '</span>');
    var hasFired = false;
    swiper.once('slideChangeStart', function(){
        Materialize.fadeInImage('#profile');
    });
    swiper.once('slideChangeEnd', function(){
        Materialize.showStaggeredList('#staggered-list');
    });
    swiper.on('slideChangeEnd', function(){
        if(swiper.previousIndex == 1 && !swiper.isBeginning && !hasFired) {
            Materialize.toast($toastContent, 6000, 'pop-up');
            hasFired = true;
        }
    });
});
