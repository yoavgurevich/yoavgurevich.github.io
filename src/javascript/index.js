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
        return '<span class="' + className + ' grow">' + roman[index] + '</span>';
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
    $('.modal-trigger').leanModal();
    $('.carousel').carousel();
    swiper.once('slideChangeStart', function(){
        Materialize.fadeInImage('#profile');
    });
    swiper.once('slideChangeEnd', function(){
        Materialize.showStaggeredList('#staggered-list');
    });
});
