$(window).on('load', function () {

    $('img[data-src]').each(function () {
        $(this).attr('src', $(this).attr('data-src')).removeAttr('data-src').addClass('is-visible');
    });

});