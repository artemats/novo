const burger = $('.burger');
const nav = $('.header-nav');
const wrapper = $('#wrapper');

$(document).ready(function () {

    // REVIEWS CAROUSEL //
    $('.reviews-carousel').slick({
        speed: 600,
        cssEase: 'ease',
        arrows: true,
        dots: true,
        infinite: false
    });

    // TOGGLE NAV MENU ON MOBILE //
    burger.on('click', function () {
        burger.hasClass('is-active') ? closeNavMenu() : openNavMenu();
    });

    // RESULT CAROUSEL //
    $('.result-carousel').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 600,
        cssEase: 'ease',
        prevArrow: '.result .carousel-nav .slick-prev',
        nextArrow: '.result .carousel-nav .slick-next'
    });

    // PRICES CAROUSEL //
    const pricingCarousel = $('.pricing-carousel');
    pricingCarousel.slick({
        arrows: false,
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        speed: 600,
        cssEase: 'ease',
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 992,
                settings: 'unslick'
            }
        ]
    });
    pricingCarousel.slick('slickGoTo', 1);

    // TRANSITION ROUTING //
    // $('a').not('a[target="_blank"]').on('click', function (event) {
    //     event.preventDefault();
    //     let href = $(this).attr('href');
    //     wrapper.addClass('is-content-hidden');
    //     setTimeout(function () {
    //         window.location.href = href;
    //     }, 200);
    // });

    // TOGGLE VALUE ON PAYMENT STEP //
    let readonly = true;
    $('#toggle-value').on('click', function () {
       const inputBox = $(this).closest('.input-container.__payment');
       const input = $(this).closest('.input-container.__payment').find('input');
       inputBox.toggleClass('__readonly');
       readonly = !readonly;
       input.attr('readonly', readonly);
    });

    // OPEN POPUP //
    $('.open-popup').magnificPopup({
        type: 'inline'
    });

    // CLOSE POPUP //
    $('.close-popup').on('click', function () {
        $.magnificPopup.close();
    });

    $('[data-toggle="datepicker"]').datepicker({
        format: 'dd.mm.yyyy',
        pick: function () {
            $(this).trigger('focus');
        }
    });

    // DETECT AGREE CLICK //
    $('#agree').on('change', function () {
        const btn = $(this).closest('.consultation').find('.btn');
        $(this).prop('checked') ? btn.removeClass('disabled') : btn.addClass('disabled');
    });

    // OPEN VIDEO ON CLICK //
    $('.video-btn').on('click', function () {
       const videoBox = $(this).closest('.video');
       videoBox.addClass('is-active');
    });

    // TABS SWITCH //
    $(document).on('click', '.tab-btn', function () {
        const tabBtn = $(this);
        const tabBtnId = tabBtn.attr('data-tab-id');
        const tabRole = tabBtn.attr('data-tab-role');
        $(`.tab-btn[data-tab-role="${tabRole}"]`).removeClass('is-active');
        $(`.tab-content[data-tab-role="${tabRole}"]`).hide();
        $(`.tab-content[data-tab-content-id="${tabBtnId}"]`).fadeIn();
        tabBtn.addClass('is-active');
    });

    setIdenticalHeight($('.result-box'));

});

$(window).on('load', function () {

    // $('img[data-src]').each(function () {
    //     $(this).attr('src', $(this).attr('data-src')).removeAttr('data-src').addClass('is-visible');
    // });

    wrapper.removeClass('is-loading');

    // SET CONSULTATION STEPS NUMBERS //
    $('.consultation-nav .link').each(function (i) {
       $(this).find('.link-num').html((i + 1) + '.');
    });

    scrollToActiveLink();

});


$(window).on('scroll', function () {

    const scrollValue = $(this).scrollTop();

    scrollValue > 1 ? closeNavMenu(): null;

    loadImagesOnScroll(scrollValue);
    showOnScroll(scrollValue);
    heroParallax(scrollValue);
    backgroundParallax(scrollValue);

});

const loadImagesOnScroll = (scrollValue) => {
    $('[data-src]').each(function () {
        let elem = $(this);
        if (elem.offset().top <= (scrollValue + $(window).height())) {
            elem.attr('src', $(this).attr('data-src')).removeAttr('data-src').addClass('is-visible');
        }
    });
};

const openNavMenu = () => {
    burger.addClass('is-active');
    nav.fadeIn(400);
};

const closeNavMenu = () => {
    burger.removeClass('is-active');
    nav.fadeOut(400);
};

const showOnScroll = (scrollValue) => {
    $('.show-on-scroll.hide').each(function () {
        let elem = $(this);
        if (elem.offset().top <= (scrollValue + $(window).height())) {
            elem.removeClass('hide');
        }
    });
};

const heroParallax = (scrollValue) => {
    $('#home-hero').css({
        'transform': 'translateY('+ ( scrollValue / 6 ) +'px)'
    });
};

const setIdenticalHeight = (elements) => {
    let avHeight = 0;
    elements.each(function (index, elem) {
        let elemHeight = $(elem).outerHeight();
        elemHeight > avHeight ? avHeight = elemHeight : null;
    });
    elements.css('height', avHeight);
};

const backgroundParallax = (scrollValue) => {
    $('.bg').each(function () {
        let bg = $(this);
        let parallaxScrollValue = Math.min(0, bg.offset().top - scrollValue - $(window).height());
        if( bg[0] && bg.offset().top - scrollValue < $(window).height() ){
            bg.css({
                'transform': 'translateY('+ Math.abs(parallaxScrollValue / 12) +'px)'
            });
        }
    });
};

const scrollToActiveLink = () => {
    let prevWidth = 0;
    $('.consultation-nav-list .link.active').prevAll('.link').each(function () {
        prevWidth = prevWidth + $(this).outerWidth() + 15;
    });

    $('.consultation-nav-list').scrollLeft(prevWidth);

};