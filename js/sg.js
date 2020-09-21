//owl carousel
$(".owl-one").owlCarousel({
  items: 4,
  loop: true,
  margin: 0,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3500,
  responsive: {
    0: {
      items: 1.3,
    },
    600: {
      items: 2,
    },
    960: {
      items: 2.5,
    },
    1200: {
      items: 3.2,
    },
  },
});

$(".owl-two").owlCarousel({
  loop: true,
  autoplay: true,
  dots: false,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2.3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
$(".owl-three").owlCarousel({
  loop: true,
  autoplay: true,
  dots: false,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
