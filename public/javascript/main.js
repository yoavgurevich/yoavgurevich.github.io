$(document).ready(function() {
  $('#myCarousel').carousel({
    interval: 0
  }).on('wheel', function(e) {
    if(e.originalEvent.wheelDelta < 0){
      $(this).carousel('next');
    }
    if(e.originalEvent.wheelDelta > 0){
      $(this).carousel('prev');
    }
  });
});
