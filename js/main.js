const swiper = new Swiper('.swiper-container', {
	loop: true,
	slidesPerView: 1,
	breakpoints: {
		1900: {
			slidesPerView: 6,
		},
		1600: {
			slidesPerView: 5,
		},
		1300: {
			slidesPerView: 4,
		},
		1124: {
			slidesPerView: 3,
		},
		760: {
			slidesPerView: 2,
		},
		640: {
			slidesPerView: 1,
		},
	},
	spaceBetween: 40,
	// Navigation arrows
	navigation: {
		nextEl: '.channel-button-next',
		prevEl: '.channel-button-prev',
	},
});

const swiperRecomended = new Swiper('.swiper-container-recomended', {
	loop: true,
	slidesPerView: 1,
	breakpoints: {
		1600: {
			slidesPerView: 3,
		},
		1124: {
			slidesPerView: 2,
		},
	},
	spaceBetween: 40,
	// Navigation arrows
	navigation: {
		nextEl: '.recomended-button-next',
		prevEl: '.recomended-button-prev',
	},
});

const swiperFood = new Swiper('.swiper-container-food', {
	loop: true,
	slidesPerView: 1,
	breakpoints: {
		1900: {
			slidesPerView: 6,
		},
		1600: {
			slidesPerView: 5,
		},
		1300: {
			slidesPerView: 4,
		},
		1124: {
			slidesPerView: 3,
		},
		760: {
			slidesPerView: 2,
		},
	},
	spaceBetween: 40,
	// Navigation arrows
	navigation: {
		nextEl: '.food-button-next',
		prevEl: '.food-button-prev',
	},
});


const mobileSearch = document.querySelector('.mobile-search');
const searchWrapper = document.querySelector('.search-wrapper');
const logo = document.querySelector('.logo');

mobileSearch.addEventListener('click', () => {
	mobileSearch.classList.toggle('diactiv');
	logo.classList.toggle('diactiv');
	searchWrapper.classList.toggle('active');

});

if (document.documentElement.scrollWidth <= 640) {
	swiper.destroy();
	swiperRecomended.destroy();
	swiperFood.destroy();

}