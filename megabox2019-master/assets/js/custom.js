(function ($) {
  //배너 이미지 슬라이드
  const mySwiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    autoplay: {
      delay: 5000,
    },
  });

  //영화차트 이미지 슬라이드
  const mySwiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 4,
    spaceBetween: 24,
    // mousewheel: {
    //   invert: true,
    // },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      // when window width is >= 600px
      600: {
        slidesPerView: 1.5,
        spaceBetween: 24,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      // when window width is >= 960px
      960: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  //영화차트 탭 메뉴
  const movBtn = $('.movie_title > ul > li');
  const movCont = $('.movie_chart > div');

  movCont.hide().eq(0).show();

  movBtn.click(function (e) {
    e.preventDefault();

    const target = $(this);
    const index = target.index();

    movBtn.removeClass('active');
    target.addClass('active');
    movCont.css('display', 'none');
    movCont.eq(index).css('display', 'block');
  });

  //공지사항 탭 메뉴
  const tabMenu = $('.notice');

  //컨텐츠 내용을 숨겨주세요
  tabMenu.find('ul > li > ul').hide();
  tabMenu.find('li.active > ul').show();

  function tabList(e) {
    e.preventDefault();
    const target = $(this);

    target
      .next()
      .show()
      .parent('li')
      .addClass('active')
      .siblings('li')
      .removeClass('active')
      .find('ul')
      .hide();
  }
  tabMenu.find('ul > li > a').click(tabList).focus(tabList);
})(jQuery);
