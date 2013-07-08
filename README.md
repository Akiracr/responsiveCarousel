#jQuery Plugin: Responsive Carousel

**Description**  
jQuery plugin to create responsive carousels  

**Basic structure**
  
    <div class="carusel-wrapper">
      
      <div class="carusel">
        <div class="carusel-slides">
          <div class="row"><img src="image.png"></div>
          <div class="row"><img src="image.png"></div>
          <div class="row"><img src="image.png"></div>
          <div class="row"><img src="image.png"></div>
        </div>
      </div>

      <div class="pager">
        <span class="preview"><< Preview</span>
        <span class="next">Next >></span>
      </div>

    </div>  
  
**Initialization**  
  
    $(document).ready(function(){
      $('.carusel-wrapper').responsiveCarousel();
    });  

