document.addEventListener("DOMContentLoaded", function () {

	// Custom JS
	// Анимация полосы в меню
	var line = document.querySelector('.nav-indicator');
	var itemsMenu = document.querySelectorAll('.nav-item');
	// console.log(line);
	// console.log(itemsMenu);
	findPos(itemsMenu);
	function findPos(elems) {
		for (var i = 0; i < elems.length; i++) {
			elems[i].addEventListener('mouseover', function () {
				// console.log(this.offsetLeft);
				line.style.height = 3 + 'px';
				line.style.marginLeft = this.offsetLeft + 'px';
				// console.log(this.offsetWidth);
				line.style.width = this.offsetWidth + 'px';
			});
			elems[i].addEventListener('mouseout', function () {
				line.style.height = 0 + 'px';
			});
		}
	}


	// Слайдер на главной странице
	$('.main-catalog-slick').slick({
		slidesToShow: 6,
		arrows: false,
		infinite: false,
		dots: false,
		responsive: [
			{
				breakpoint: 1365,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					variableWidth: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	// Меню в шапке
	$('.menu-burger').on('click', function () {
		$('.menu').toggleClass('active');
		$('.filter-bg').toggleClass('active');
		$('.logo').toggleClass('active');
	});

	// Поиск анимация выдвижения
	$(".menu__search").hover(function () {
		$(".menu__search").addClass('active');
	},
		function () {
			if (!$(".input-search").val() && !$('.input-search').is(":focus")) {
				$(".menu__search").removeClass('active');
			}
		});
	$(".menu__search").on('click', function () {
		$(".menu__search").addClass('active');
	});
	$(".input-search").on("input", function () {
		$(".menu__search").addClass('active');
	});
	$('.input-search').focusout(function () {
		if ($(this).val() === '') {
			$(".menu__search").removeClass('active');
		}
	});

	// Стилизация селектов
	$('select, .styler-form-element *, .input-checkbox *, .registration-modal__stock-check').styler({

	});

	// setTimeout(function() {
	// 	$('select').trigger('refresh');
	// }, 1)

	// Выпадающее меню в фильтрах
	$('.catalog-filter__dropdown-title').on('click', function () {
		if (window.innerWidth <= 767) {
			// var list = $(this + '+catalog-filter__dropdown-list');
			$(this).next().toggleClass('active');
			$(this).toggleClass('active');
		}
	});

	// Стилизайи range-слайдера
	$(".js-range-slider").ionRangeSlider({
		type: "double",
		step: 100,
		// from: 5000,
		// to: 6000,
		onStart: function (data) {
			$("#js-range-slider__from").val(data.from);
			$("#js-range-slider__to").val(data.to);
		},
		onChange: function (data) {
			$("#js-range-slider__from").val(data.from);
			$("#js-range-slider__to").val(data.to);
		},
	});

	var $ionSlider = $(".js-range-slider").data("ionRangeSlider");

	// Значение из input в слайдер
	$('#js-range-slider__from').on('change', function () {
		$ionSlider
			.update({
				// from_min: this.value,
				from: this.value
			});
	});
	$('#js-range-slider__to').on('change', function () {
		$ionSlider
			.update({
				// from_min: this.value,
				to: this.value
			});
	});


	// Кнопка фильтры в каталоге на мобильных устройствах
	$('#catalog__filter-btnmobile').on('click', function () {
		$('#catalog-filter').addClass('active');
	});
	$('.filter-mobile__btn').on('click', function () {
		$('#catalog-filter').removeClass('active');
	});


	// ТАБЫ для одного товара
	$('.productone-info__tab-title > div').on('click', function () {
		$('.productone-info__tab-title > div').removeClass('active-tab');
		$(this).addClass('active-tab');
		var id = $(this).attr('data-tab');
		$('.productone-info__tab-content > div').removeClass('active-tab');
		$('.productone-info__tab-content > div[data-tab="' + id + '"]').addClass('active-tab');
		// $('.productone-info__ackordeon > div').removeClass('active-tab');
		// $('.productone-info__ackordeon > div[data-tab="' + id + '"]').addClass('active-tab');
	});
	// Аккордеон в товаре
	$('.productone-info__ackordeon > div').on('click', function () {
		$('.productone-info__ackordeon > div').removeClass('active-tab');
		$(this).addClass('active-tab');
		// var id = $(this).attr('data-tab');
	});

	// Слайдер для карточки товара на странице товара
	$('.product-one__slider').slick({
		vertical: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		verticalSwiping: true,
		infinite: true,
		prevArrow: '<button class="slick-prev slick-arrow" type="button" style=""><img src="images/dest/product-one/arrow-slider-top.png" alt=""></button>',
		nextArrow: '<button class="slick-next slick-arrow" type="button" style=""><img src="images/dest/product-one/arrow-slider-bottom.png" alt=""></button>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					vertical: false,
					verticalSwiping: false,
					// variableWidth: true,
					arrows: false,
					dots: true,
				}
			},
		]
	});

	// Слайдер на странице товара
	$('.productpage-slider').slick({
		// centerMode: true,
		infinite: true,
		slidesToShow: 5,
		prevArrow: '<button class="slick-prev slick-arrow" type="button" style=""><img src="images/dest/product-one/arrow-big.svg" alt=""></button>',
		nextArrow: '<button class="slick-next slick-arrow" type="button" style=""><img src="images/dest/product-one/arrow-big.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 1850,
				settings: {
					slidesToShow: 4,
					variableWidth: true,
				}
			},
			{
				breakpoint: 1365,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false,
					infinite: false,
					variableWidth: true,
				}
			},
		]
	});

	// Табы на странице оформление заказа
	$('.checkout-page__block--bottom .checkout-page__tab-title').on('click', function () {
		$('.checkout-page__block--bottom .checkout-page__tab-title').removeClass('checkout-page__tab-title--active');
		$(this).addClass('checkout-page__tab-title--active');
		var id = $(this).attr('data-tab');
		$('.checkout-page__block--bottom .checkout-page__tab-content').removeClass('checkout-page__tab-content--active');
		$('.checkout-page__block--bottom .checkout-page__tab-content[data-tab="' + id + '"]').addClass('checkout-page__tab-content--active');
	});

	$('.checkout-page__block--top .checkout-page__tab-title').on('click', function () {
		$('.checkout-page__block--top .checkout-page__tab-title').removeClass('checkout-page__tab-title--active');
		$(this).addClass('checkout-page__tab-title--active');
		var id = $(this).attr('data-tab');
		$('.checkout-page__block--top .checkout-page__tab-content').removeClass('checkout-page__tab-content--active');
		$('.checkout-page__block--top .checkout-page__tab-content[data-tab="' + id + '"]').addClass('checkout-page__tab-content--active');
	});


	// Табы в блоке регистрация
	$('.inputblock__title').on("click", function () {
		$('.inputblock').addClass('active');
		$('.registrblock').removeClass('active');
	});

	$('.registrblock__title').on("click", function () {
		$('.registrblock').addClass('active');
		$('.inputblock').removeClass('active');
	});


	// Выпадающее меню в каталгое на мобильных экранах
	$('.menu__list-drop').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('active-drop');
	});

	// Маска для даты
	function setEventListener(ev, el, f) {
		if (el) {
			el.addEventListener(ev, f)
		}
	}

	var input = document.querySelectorAll('#mydate')[0];

	var dateInputMask = function dateInputMask(elm) {
		setEventListener('keypress', elm, function (e) {
			if (e.keyCode < 47 || e.keyCode > 57) {
				e.preventDefault();
			}

			var len = elm.value.length;

			// If we're at a particular place, let the user type the slash
			// i.e., 12/12/1212
			if (len !== 1 || len !== 3) {
				if (e.keyCode == 47) {
					e.preventDefault();
				}
			}

			// If they don't add the slash, do it for them...
			if (len === 2) {
				elm.value += '.';
			}

			// If they don't add the slash, do it for them...
			if (len === 5) {
				elm.value += '.';
			}
		});
	};

	dateInputMask(input);
	
	// Маска и выбор кода страны для телефона
	var input = document.querySelector("#phone");
	if (input) {
		window.intlTelInput(input, {
			onlyCountries: ["ru", "ua"],
			autoPlaceholder: "aggressive",
			separateDialCode: "true",
			utilsScript: 'js/utils.js',
		});
	}

	// Форма сменить пароль
	$(".change-password-active-button").on('click', function () {
		$('.change-password').addClass('change-password--active');
		$('.change-password__overlay').addClass('change-password__overlay--active');
		$('.change-password__form').addClass('change-password__form--active');
	});

	$(".change-password-close-button").on('click', function () {
		$('.change-password').removeClass('change-password--active');
		$('.change-password__overlay').removeClass('change-password__overlay--active');
		$('.change-password__form').removeClass('change-password__form--active');
	});

	// Форма регистрации
	$(".registration-modal-active-object").on('click', function () {
		$('.registration-modal').addClass('registration-modal--active');
	});

	$(".registration-modal-close-object").on('click', function () {
		$('.registration-modal').removeClass('registration-modal--active');
	});
});

// function inputField(input, line) {
// 	$('');
// }