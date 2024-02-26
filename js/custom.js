$(function () {

    $('.header .mopen').on('click', function () {
        $('.gnb').toggleClass('on')
    });

    $('.main_visual .visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.side_content .slide_wrap').slick({
        slidesToShow: 4,
        arrows: false,
        dots: false,
        slidesPerGroup: 4,

        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]


    });

    $('.side_content .arrows .left').on('click', function () {
        $('.slide_wrap').slick('slickPrev');
    });

    $('.side_content .arrows .right').on('click', function () {
        $('.slide_wrap').slick('slickNext');
    });

    $('.totop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800)
    });

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 300) {
            $('.totop').addClass('on');
            $('.Header').addClass('on');
        } else {
            $('.totop').removeClass('on');
            $('.Header').removeClass('on');
        }
    });

    $('.header .mopen').on('click', function () {
        $('.gnb').toggleClass('on')
    });

});