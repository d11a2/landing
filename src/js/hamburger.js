(function () {

    const hamburger = $('.hamburger');
    const menu = $('.menu');
    const menuLink = $('.menu__link');
    hamburger.on('click', e => {

        if (hamburger.hasClass('hamburger--visible')) {
            hamburger.removeClass('hamburger--visible');
            menu.removeClass('hamburger--visible');
        } else {
            menu.addClass('hamburger--visible');
            hamburger.addClass('hamburger--visible');
        }

    })

    menuLink.on('click', e => {
        hamburger.removeClass('hamburger--visible');
        menu.removeClass('hamburger--visible');
    });
})();