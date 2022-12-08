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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJoYW1idXJnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGhhbWJ1cmdlciA9ICQoJy5oYW1idXJnZXInKTtcbiAgICBjb25zdCBtZW51ID0gJCgnLm1lbnUnKTtcbiAgICBjb25zdCBtZW51TGluayA9ICQoJy5tZW51X19saW5rJyk7XG4gICAgaGFtYnVyZ2VyLm9uKCdjbGljaycsIGUgPT4ge1xuXG4gICAgICAgIGlmIChoYW1idXJnZXIuaGFzQ2xhc3MoJ2hhbWJ1cmdlci0tdmlzaWJsZScpKSB7XG4gICAgICAgICAgICBoYW1idXJnZXIucmVtb3ZlQ2xhc3MoJ2hhbWJ1cmdlci0tdmlzaWJsZScpO1xuICAgICAgICAgICAgbWVudS5yZW1vdmVDbGFzcygnaGFtYnVyZ2VyLS12aXNpYmxlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51LmFkZENsYXNzKCdoYW1idXJnZXItLXZpc2libGUnKTtcbiAgICAgICAgICAgIGhhbWJ1cmdlci5hZGRDbGFzcygnaGFtYnVyZ2VyLS12aXNpYmxlJyk7XG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICBtZW51TGluay5vbignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaGFtYnVyZ2VyLnJlbW92ZUNsYXNzKCdoYW1idXJnZXItLXZpc2libGUnKTtcbiAgICAgICAgbWVudS5yZW1vdmVDbGFzcygnaGFtYnVyZ2VyLS12aXNpYmxlJyk7XG4gICAgfSk7XG59KSgpOyJdLCJmaWxlIjoiaGFtYnVyZ2VyLmpzIn0=
