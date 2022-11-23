$(document).ready(() => {
    const popup = $('.popup-fade');

    $('.popup-fade__close').on('click', e => {
        e.preventDefault();
        popup.fadeOut();
    });

    popup.on('click', e => {

        if ($(target).closest('.popup').length == 0) {
            popup.fadeOut();
        }
    });

});
