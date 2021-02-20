window.addEventListener('DOMContentLoaded', function () {
	const burgerHead = document.querySelector('.js-header__burger');
	const headMenuAll = document.querySelectorAll('.menu__items .menu__item-link');
	const menuHead = document.querySelector('.menu__items');
	const paginationBullet = document.querySelector('.swiper-pagination');
	const BREAK_POINT = 1030;

	//Функция изменение tabindexa меню при изменении размера viewport
	function changTabindex(elementAll, bPoint = false) {
		const w = window.innerWidth;
		if (bPoint) {
			if (w <= bPoint) {
				for (const key of elementAll) {
					key.tabIndex = -1;
				};
				return;
			} else {
				for (const key of elementAll) {
					key.tabIndex = 0;
				};
				return;
			};
		};

		for (const key of elementAll) {
			if (key.tabIndex == 0) {
				key.tabIndex = -1;
			} else {
				key.tabIndex = 0;
			};
		};
	};

	//Проверка размера экрана при загрузке сайта
	//Установка tabindexa меню
	changTabindex(headMenuAll, BREAK_POINT);

	//Открыть закрыть бургер
	burgerHead.addEventListener('click', () => {
		burgerHead.classList.toggle('header__burger-activ');
		menuHead.classList.toggle('js-menu__items');
		changTabindex(headMenuAll);
	});

	//Отслеживаем размер viewport для изменения tabindex
	window.addEventListener(`resize`, (ev) => {
		if (ev.target.innerWidth <= BREAK_POINT) {
			changTabindex(headMenuAll, BREAK_POINT);
			return;
		} else {
			changTabindex(headMenuAll, BREAK_POINT);
			return;
		};
	}, false);

	//Отслеживание активности на кнопках пагинации, установка табиндекса на кнопке контента в слайде
	paginationBullet.addEventListener('click', (ev) => {
		setTimeout(() => {
			if (ev.target.nodeName == "BUTTON") {
				const swipContentBtn = document.querySelectorAll('.solutions__button');
				for (const key of swipContentBtn) {
					key.tabIndex = -1;
				};

				const swipContentBtnActiv = document.querySelector('.swiper-slide-active .solutions__button');
				swipContentBtnActiv.tabIndex = 0;
				console.log(swipContentBtnActiv);
			};
		}, 300);
	});

});

$(document).ready(function () {
	const swiperHead = new Swiper('.header__slids', {
		speed: 1500,
		autoplay: {
			delay: 5000,
			autoplayDisableOnInteraction: false,
		},
		loop: true,
		effect: 'fade',
		a11y: {
			prevSlideMessage: 'Предыдущий слайд',
			nextSlideMessage: 'Следующий слайд',
			paginationBulletMessage: 'Перейти к слайду {{index}}',
		},
		scrollbar: {
			hide: true,
		},
		pagination: {
			el: '.swiper-pagination',
			bulletElement: 'button',
			clickable: true,
		},
	});

	$(".faq__boody").accordion({
		collapsible: true,
		clearStyle: true,
		active: '',
		heightStyle: 'content',
		icons: {
			header: 'boody__question-el',
			activeHeader: 'boody__question-el_activ',
		},
	});

	$('input,textarea').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder'))
		$(this).attr('placeholder', '');
	});
	$('input,textarea').blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});

});