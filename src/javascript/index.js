window.addEventListener('DOMContentLoaded', function() {
    QueryLoader2(document.querySelector("body"), {
        barColor: "#000000",
        backgroundColor: "#fff",
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

$(document).ready(function() {
  $('.scrollspy').scrollSpy();
  $('.parallax').parallax();
  $('.modal-trigger').leanModal();
  $('.carousel').carousel();
  $('#wellpad-flip').flip();

  var options = [
    {selector: '#profile', offset: 100, callback: function(el) {
      Materialize.fadeInImage($(el));
    }},
    {selector: '#staggered-list', offset: 150, callback: function(el) {
      Materialize.showStaggeredList($(el));
    }}
  ];

  Materialize.scrollFire(options);
});
