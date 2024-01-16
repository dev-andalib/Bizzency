$(document).ready(function () {
  var vw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  $(window).resize(function () {
    location.reload();
  });
  if (vw > 1230) {
    $(".slider").slick({
      infinite: true,
      slidesToShow: 3,
      slideToScroll: 1,
      nextArrow: $(".slide_btn"),
      prevArrow: $(".prev"),
    });

    $(".profiler").slick({
      infinite: true,
      slidesToShow: 3,
      slideToScroll: 1,
      nextArrow: $(".p_next"),
      prevArrow: $(".p_prev"),
    });
  }

  if (vw > 900) {
    $(".slider").slick({
      infinite: true,
      slidesToShow: 2,
      slideToScroll: 1,
      nextArrow: $(".slide_btn"),
      prevArrow: $(".prev"),
    });

    $(".profiler").slick({
      infinite: true,
      slidesToShow: 2,
      slideToScroll: 1,
      nextArrow: $(".p_next"),
      prevArrow: $(".p_prev"),
    });
  }

  if (vw < 900) {
    $(".slider").slick({
      infinite: true,
      slidesToShow: 1,
      slideToScroll: 1,
      nextArrow: $(".slide_btn"),
      prevArrow: $(".prev"),
    });

    $(".profiler").slick({
      infinite: true,
      slidesToShow: 1,
      slideToScroll: 1,
      nextArrow: $(".p_next"),
      prevArrow: $(".p_prev"),
    });
  }

  $(".testimonial").slick({
    infinite: true,
    slidesToShow: 2,
    slideToScroll: 2,
    nextArrow: $(".t_next"),
    prevArrow: $(".t_prev"),
  });

  $(".blog_item").slick({
    infinite: true,
    slidesToShow: 3,
    slideToScroll: 1,
    nextArrow: $(".b_next"),
    prevArrow: $(".b_prev"),
  });

  $(".up").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
