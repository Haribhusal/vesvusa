$(document).ready(function () {
  $(".todayToggle").click(function () {
    $(".slideBar").hide();
    $(".sidebar_cart").hide();
    $(".search_sidebar").hide();
    $(".notification_sidebar").hide();
    $(".favourites_sidebar").hide();
    $(".login_sidebar").hide();
  });

  $(".accountToggle").click(function () {
    $(".slideBar").show().addClass("animate__animated animate__fadeInRight");
    $(".sidebar_cart").hide();
    $(".search_sidebar").hide();
    $(".notification_sidebar").hide();
    $(".favourites_sidebar").hide();
    $(".login_sidebar").hide();
  });
  $(".close").click(function () {
    $(".slideBar").hide();
  });
  $(".cartToggle").click(function () {
    $(".slideBar").hide();
    $(".sidebar_cart")
      .show()
      .addClass("animate__animated animate__fadeInRight");
    $(".search_sidebar").hide();
    $(".notification_sidebar").hide();
    $(".favourites_sidebar").hide();
    $(".login_sidebar").hide();
  });
  $(".close").click(function () {
    $(".sidebar_cart").hide();
  });
  $(".forgetTrigger").click(function () {
    $(".forget_sidebar")
      .show()
      .addClass("animate__animated animate__fadeInRight");
    $(".slideBar").hide();
    $(".sidebar_cart").hide();
    $(".search_sidebar").hide();
    $(".notification_sidebar").hide();
    $(".favourites_sidebar").hide();
    $(".login_sidebar").hide();
  });
  $(".close").click(function () {
    $(".forget_sidebar").hide();
  });
  $(".searchToggle").click(function () {
    $(".search_sidebar")
      .show()
      .addClass("animate__animated animate__fadeInRight");
    $(".slideBar").hide();
    $(".sidebar_cart").hide();
    $(".notification_sidebar").hide();
    $(".favourites_sidebar").hide();
    $(".login_sidebar").hide();
  });
  $(".close").click(function () {
    $(".search_sidebar").hide();
  });
  $(".notificationToggle").click(function () {
    $(".notification_sidebar")
      .show()
      .addClass("animate__animated animate__fadeInRight");
    $(".slideBar").hide();
    $(".sidebar_cart").hide();
    $(".search_sidebar").hide();
    $(".favourites_sidebar").hide();
    $(".login_sidebar").hide();
  });
  $(".close").click(function () {
    $(".notification_sidebar").hide();
  });
  $(".favouritesToggle").click(function () {
    $(".favourites_sidebar")
      .show()
      .addClass("animate__animated animate__fadeInRight");
    $(".slideBar").hide();
    $(".sidebar_cart").hide();
    $(".search_sidebar").hide();
    $(".notification_sidebar").hide();
    $(".login_sidebar").hide();
  });
  $(".close").click(function () {
    $(".favourites_sidebar").hide();
  });
  $(".loginToggle").click(function () {
    $(".login_sidebar").show();
  });
  $(".close").click(function () {
    $(".login_sidebar").hide();
  });
  $(".signupToggle").click(function () {
    $(".signup_sidebar").show();
  });
  $(".close").click(function () {
    $(".signup_sidebar").hide();
  });

  $(".exploreToggle").click(function () {
    $(location).attr("href", "index.html");
  });
});
