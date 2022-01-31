$(document).ready(function () {
  // Heroslider Slider Starts
  var heroSlider = $(".hero .owl-carousel");
  heroSlider.owlCarousel({
    loop: true,
    margin: 0,
    lazyLoad: true,
    nav: false,
    items: 1,
    dots: false,
    smartSpeed: 2000,
    autoplayHoverPause: true,
    smooth: false,
    autoplay: false,
    autoplaySpeed: 2000,
  });
  $(".nextHero").click(function () {
    heroSlider.trigger("next.owl.carousel");
  });
  $(".prevHero").click(function () {
    heroSlider.trigger("prev.owl.carousel", [300]);
  });

  // Heroslider Slider ends

  // newsslider Slider Starts

  var newsSlider = $(".news .owl-carousel");
  newsSlider.owlCarousel({
    loop: true,
    margin: 30,
    autoplaySpeed: 6000,

    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
  $(".customNextBtn").click(function () {
    newsSlider.trigger("next.owl.carousel");
  });
  $(".customPrevBtn").click(function () {
    newsSlider.trigger("prev.owl.carousel", [300]);
  });

  // newsslider Slider ends

  // looksAndThemeSlider Slider Starts

  var looksAndThemeSlider = $(".looksAndTheme .owl-carousel");

  looksAndThemeSlider.owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    autoplaySpeed: 6000,

    nav: false,
    navText: [
      "<i class='las la-angle-left'></i>",
      "<i class='las la-angle-right'></i>",
    ],

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".customNextBtn").click(function () {
    looksAndThemeSlider.trigger("next.owl.carousel");
  });
  $(".customPrevBtn").click(function () {
    looksAndThemeSlider.trigger("prev.owl.carousel", [300]);
  });
  // looksAndThemeSlider Slider ends
  // shinyCollection Slider Starts
  var shinyCollectionSlider = $(".shinyCollection .owl-carousel");

  shinyCollectionSlider.owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: false,
    autoplaySpeed: 6000,

    navText: [
      "<i class='las la-angle-left'></i>",
      "<i class='las la-angle-right'></i>",
    ],

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".gotoright").click(function () {
    shinyCollectionSlider.trigger("next.owl.carousel");
  });
  $(".gotoleft").click(function () {
    shinyCollectionSlider.trigger("prev.owl.carousel", [300]);
  });

  // looksAndThemeSlider Slider ends

  // comfort slider Starts

  var comfortSlider = $(".comfort .owl-carousel");

  comfortSlider.owlCarousel({
    loop: true,
    margin: 16,
    dots: false,
    autoPlay: false,
    nav: false,
    autoplaySpeed: 6000,

    navText: [
      "<i class='las la-angle-left'></i>",
      "<i class='las la-angle-right'></i>",
    ],

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".customNextBtn").click(function () {
    comfortSlider.trigger("next.owl.carousel");
  });
  $(".customPrevBtn").click(function () {
    comfortSlider.trigger("prev.owl.carousel", [300]);
  });

  // comfortSlider Slider ends

  // heroBanner slider Starts

  var heroBannerSlider = $(".heroBanner .owl-carousel");

  heroBannerSlider.owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    autoPlay: true,
    // autoplayTimeout: 3000,
    nav: false,
    autoplaySpeed: 2000,
    items: 1,

    navText: [
      "<i class='las la-angle-left'></i>",
      "<i class='las la-angle-right'></i>",
    ],
  });

  $(".customNextBtn").click(function () {
    comfortSlider.trigger("next.owl.carousel");
  });
  $(".customPrevBtn").click(function () {
    comfortSlider.trigger("prev.owl.carousel", [300]);
  });

  // heroBanner ends

  $(document).ready(function () {
    var sliders = document.querySelectorAll(" .sliderItem");
    sliders.forEach((slider) => {
      const colorThief = new ColorThief();
      const img = slider.querySelector(".heroImg");
      var themeColor = colorThief.getColor(img);
      var red = themeColor[0];
      var green = themeColor[1];
      var blue = themeColor[2];

      slider.style.backgroundColor = `rgb(${red},${green},${blue})`;
    });
  });

  $(document).ready(function () {
    const colorThief = new ColorThief();
    const img = $(".lookspage .pickColor");
    var themeColor = colorThief.getColor(img);
    var red = themeColor[0];
    var green = themeColor[1];
    var blue = themeColor[2];
    $("cardwrapper").style.backgroundColor = `rgb(${red},${green},${blue})`;
  });

  // pickColor;

  // $(document).ready(function () {
  //   var thumbnails = document.querySelectorAll(".xzoom-thumbs .xzoom-gallery");

  //   thumbnails.forEach((thumbnail) => {
  //     thumbnail.find(".xzoom-gallery").click(function () {
  //       alert("hello");
  //       $(".mid .bgColor").style.backgroundColor = `red`;
  //     });

  //     const colorThief = new ColorThief();
  //     const img = slider.querySelector(".xzoom-gallery");
  //     var themeColor = colorThief.getColor(img);
  //     var red = themeColor[0];
  //     var green = themeColor[1];
  //     var blue = themeColor[2];

  //     $(".mid .bgColor").style.backgroundColor = `rgb(${red},${green},${blue})`;
  //   });
  // });

  $(document).ready(function () {
    $(".featuredslider .owl-carousel").owlCarousel({
      loop: true,
      items: 1,
      slideSpeed: 2000,
      autoplay: false,
      thumbs: true,
      thumbImage: true,
      thumbContainerClass: "owl-thumbs",
      thumbItemClass: "owl-thumb-item",
    });
  });
});
// $(".catItemWrapper").click(function () {
//   $(this).toggleClass("active");
// });

$(document).ready(function () {
  $(".catItemWrapper").bind("click", function () {
    // remove the active class from all elements with active class
    $(".active").removeClass("active");
    // add active class to clicked element
    $(this).addClass("active");
  });
});

// $(window).on("resize", function () {
//   var win = $(this); //this = window

//   if (win.width() >= 768) {
//     $(location).attr("href", "index.html");
//   }
// });

// header hides on scrol
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}
