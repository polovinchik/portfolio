$(document).ready(function () {
  // Открытие меню при клике на бургер

  $(".nav-menu-icon-wrapper").click(function (event) {
    $(".overlay").toggleClass("overlay--active");
    $(".menu").toggleClass("menu--active");
    $("body").toggleClass("hidden");
  });

  // Клик на крестик - удалить классы

  $(".nav-menu-icon-exit").click(function (event) {
    $(".overlay").removeClass("overlay--active");
    $(".menu").removeClass("menu--active");
    $("body").removeClass("hidden");
  });

  // Клик на ссылку - удалить все классы

  $(".menu-list__link").click(function (event) {
    $(".overlay").removeClass("overlay--active");
    $(".menu").removeClass("menu--active");
    $("body").removeClass("hidden");
  });

  // Клик на Лого - удалить все классы

  $(".nav__logo").click(function (event) {
    $(".overlay").removeClass("overlay--active");
    $(".menu").removeClass("menu--active");
    $("body").removeClass("hidden");
  });

  // Клик на Оверлей

  $(".overlay").click(function (event) {
    $(".overlay").removeClass("overlay--active");
    $(".menu").removeClass("menu--active");
    $("body").removeClass("hidden");
  });

  // Для ресайза

  window.addEventListener("resize", function () {
    $(".overlay").removeClass("overlay--active");
    $(".menu").removeClass("menu--active");
    $("body").removeClass("hidden");
  });

  // Ховер для большого

  $(".large-project").hover(
    function () {
      $(this)
        .find($(".project-large-hover"))
        .addClass("project-large-hover--active");
      $(this)
        .find($(".large-project-title"))
        .addClass("large-project-title--active");
    },

    function () {
      $(this)
        .find($(".project-large-hover"))
        .removeClass("project-large-hover--active");
      $(this)
        .find($(".large-project-title"))
        .removeClass("large-project-title--active");
    }
  );

  // Для маленького проекта

  $(".small-project").hover(
    function () {
      $(this)
        .find($(".project-small-hover"))
        .addClass("project-small-hover--active");
      $(this)
        .find($(".small-project-title"))
        .addClass("small-project-title--active");
    },
    function () {
      $(this)
        .find($(".project-small-hover"))
        .removeClass("project-small-hover--active");
      $(this)
        .find($(".small-project-title"))
        .removeClass("small-project-title--active");
    }
  );

  // Фильтрация работ

  // В мечтах о.о

  // Ховер для Как я работаю
  $(".work-plan-card").hover(
    function () {
      $(this).find($(".work-plan-title")).addClass("work-plan-title--active");
    },
    function () {
      $(this)
        .find($(".work-plan-title"))
        .removeClass("work-plan-title--active");
    }
  );
});
