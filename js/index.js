//ScrollReveal
window.sr = ScrollReveal();

var reveal = {
  duration: 800,
  scale: 1,
  origin: "top",
  mobile: true,
  reset: true
};

sr.reveal("h1", reveal);
sr.reveal("h3", reveal);
sr.reveal("#cv", reveal);

//Isotope
$(".grid").isotope({
  layoutMode: "packery",
  itemSelector: ".grid-item",
  percentPosition: true,
  packery: {
    columnWidth: ".grid-sizer"
  }
});

$(".filter-button-group").on("click", "button", function() {
  var filterValue = $(this).attr("data-filter");
  $(".grid").isotope({ filter: filterValue });
});
