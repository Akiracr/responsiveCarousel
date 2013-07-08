#jQuery Plugin: Responsive Carousel

**Description**  
jQuery plugin to create responsive carousels  

**Basic structure**
  
    <div class="carusel-wrapper <?php print $classes;?>">
      <div class="carusel">

        <div class="carusel-slides">

          <?php foreach ($rows as $id => $row): ?>
            <div class="row"><?php print $row; ?></div>
          <?php endforeach; ?>

        </div>

      </div>

      <div class="pager">
        <span class="pager-btn preview"><< Preview</span>
        <span class="pager-btn next">Next >></span>
      </div>
    </div>