$(document).ready(function() {
    
    var owl = $("#owl-demo");
 
  owl.owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      itemsTablet: [768,2],
      itemsMobile : [479,1]
      
  });
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
});
