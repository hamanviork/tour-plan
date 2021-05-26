$(document).ready(function () {
    var swiper1 = new Swiper('.swiper-container', {
    loop: true,
    effect: 'coverflow',
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },
  });

  const swiper2 = new Swiper('.reviews-slider', {
    loop: true,
    effect: 'coverflow',
    navigation: {
      nextEl: '.reviews-btns__button_next',
      prevEl: '.reviews-btns__button_prev',
    },});

  var menuButton = document.querySelector(".mobile-menu");

  menuButton.addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle('navbar--visible');
    document.querySelector("body").classList.toggle('body_hidden');
  });

  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $('.modal__close');

  modalButton.on('click', openModal)
  closeModalButton.on('click', closeModal)

    function closeModal(event) {
      event.preventDefault();
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }

    function openModal() {
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.addClass('modal__overlay--visible');
      modalDialog.addClass('modal__dialog--visible');
    }

    // Обработка формы
    $(".form").validate({
      errorClass: "invalid",
        rules: {
          name: "required",
          email: {
            required: true,
            email: true
          },
        },
        messages: {
          name: "Пожалуйста введите ваше имя",
          email: {
            required: "Дай свой адрес",
            email: "Your email address must be in the format of name@domain.com"
          },
          phone: {
            required: "Телефон обьязателен"
          }
        },
      });
    });