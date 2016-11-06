window.addEventListener('DOMContentLoaded', function() {
    QueryLoader2(document.querySelector("body"), {
        barColor: "#ffffff",
        backgroundColor: "#000",
        barHeight: 1,
        minimumTime: 300,
        onComplete: function() {
            $('#introPanel')
                .addClass('animated fadeInUp')
                .find('.material-icons')
                .addClass('animated fadeIn');
            $('#a1').addClass('animated fadeIn');
            $('#a2').addClass('animated fadeIn');
            $('#a3').addClass('animated fadeIn');
            $('#arrow').addClass('animated flash');
        }
    });
});

$(document).ready(function() {
  $(document).scrollTop(0);
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
