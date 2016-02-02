window.addEventListener('DOMContentLoaded', function() {
    QueryLoader2(document.querySelector("body"), {
        barColor: "#f0ffff",
        backgroundColor: "#000",
        barHeight: 1,
        minimumTime: 300,
        onComplete: function() {
            $('#introPanel')
                .addClass('animated bounceIn')
                .find('.material-icons')
                .addClass('animated fadeIn');
            $('#a1').addClass('animated fadeInLeft');
            $('#a2').addClass('animated fadeInRight');
            $('#a3').addClass('animated fadeInLeft');
            $('#arrow').addClass('animated flash');
        }
    });
});

var swiper = new Swiper('.swiper-container', {
    parallax: true,
    pagination: '.swiper-pagination',
    speed: 600,
    paginationClickable: true,
    paginationBulletRender: function (index, className) {
        return '<span class="' + className + ' tooltipped grow""></span>';
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
    swiper.on('slideChangeEnd', function(){
       switch(swiper.activeIndex) {
           case 2:
               $('#wellpad').addClass('magictime vanishIn');
               break;
           case 3:
               $('#opendojo').addClass('magictime swap');
               break;
           case 4:
               $('#cdot').addClass('magictime swashIn');
               break;
       }
    });
});
