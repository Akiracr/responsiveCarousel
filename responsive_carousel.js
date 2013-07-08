(function ( $ ) {

  $.fn.responsiveCarousel = function( options ) {
    
    // This is the easiest way to have default options.
    var settings = $.extend({
      // These are the defaults.
      selector : '',
      carusel_slides: 0,
      slide_average_width: 0,
      carusel_increase_pager: 0,
    }, options );
    
    // Bind resize window
    $(window).bind("resize", maxRCarousel);
 
    //Set selector
    settings.selector = $(this).selector;
    
    return _init();
    
    /**
     * Init function
     */
    function _init(){

      //Set varibles values
      $(settings.selector).find('.carusel-slides .row').each(function(i, obj){
        settings.carusel_slides += $(this).outerWidth(true);
      });

      settings.slide_average_width = settings.carusel_slides / $(settings.selector).find('.carusel-slides .row').size();
      settings.carusel_increase_pager = getFixIncreaseCarousel();
      $(settings.selector).find('.carusel-slides').width(settings.carusel_slides);
      
      //Add actions to controls
      $(settings.selector).find('.preview').click(function(){moveCarusel('preview');});
      $(settings.selector).find('.next').click(function(){moveCarusel('next');});

    }
    

    /**
     * This function calc fix increase
     */
    function getFixIncreaseCarousel(){

      var increase = Math.floor($(settings.selector).find('.carusel').width() / settings.slide_average_width);
      increase = (increase < 1 ? 1 : increase);
      return increase * settings.slide_average_width;

    }


    /**
     * This function recalcule increase
     */
    function maxRCarousel(){

      settings.carusel_increase_pager = getFixIncreaseCarousel();
      $(settings.selector).find('.carusel-slides').css('left', 0);

    }


    /**
     * This function move carousel
     */
    function moveCarusel(action){

      var action_operator = (action == 'next' ? -1 : 1);
      
      var status = Number($(settings.selector).find('.carusel-slides').css('left').replace('px',''));
      
      var next = (status * action_operator) + (settings.carusel_increase_pager)
      next = next * action_operator;

      if( 
        next > 0
        &&
        action_operator > 0
      ){
        $(settings.selector).find('.carusel-slides').animate(
          {left : -(settings.carusel_slides - settings.carusel_increase_pager)}, 1500);
      }else if(action == 'next' && next <= (settings.carusel_slides  *-1) ){
        $(settings.selector).find('.carusel-slides').animate({left : 0}, 1500);
      }else{
        $(settings.selector).find('.carusel-slides').animate({left : next}, 1500);
      }

    }
   
  };
  
 }( jQuery ));