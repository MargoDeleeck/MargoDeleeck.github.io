function main() {

//ScrollReveal.js
window.sr = ScrollReveal();

var reveal = {
   duration: 800, scale: 1, origin: "top", mobile: true, reset: true,
};

sr.reveal("h1", reveal);
sr.reveal("h3", reveal);
sr.reveal("#cv", reveal);

}
window.onload = function() {
      main();
}

//Isotope
$('.grid').isotope({
  layoutMode: 'packery',
  itemSelector: '.grid-item',
  percentPosition: true,
  packery: {
    columnWidth: '.grid-sizer'
  },
  getSortData: {
     name: '.name'
  }
});

$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $('.grid').isotope({ filter: filterValue });
});

$('.sort-button-group').on( 'click', 'button', function() {
   var sortValue = $(this).attr('data-sort-value');
   $('.grid').isotope({ sortBy: sortValue });
});
// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};
