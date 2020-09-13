//owl carousel
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 3500,
  responsive: {
    0: {
      items: 1.5,
    },
    600: {
      items: 2,
    },
    960: {
      items: 2.5,
    },
    1200: {
      items: 3.1,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

