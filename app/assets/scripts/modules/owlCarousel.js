$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dragClass: "test demo",
    navText: [
      '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    ],
  });
  // $(".owl-carousel").on("changed.owl.carousel", function (event) {
  //   console.log(event);
  // });
});