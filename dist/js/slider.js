(function () {
    const slides = $('.slider__item');

    slides.each((index, item) => {
        $(item).css('left', index * 100 + '%');
    });

    let clickNumber = 0;
    let countLimit = slides.length - 1;

    $('.arrow--right').on('click', () => {

        if (clickNumber > -countLimit) {
            clickNumber--;
            slides.each((index, item) => {
                $(item).css('left', (index * 100 + clickNumber * 100) + '%')
            });
        }
    });

    $('.arrow--left').on('click', () => {

        if (clickNumber < 0) {
            clickNumber++;
            slides.each((index, item) => {
                $(item).css('left', (index * 100 + clickNumber * 100) + '%')
            });
        }
    })

//product
    const productParams = $('.product__params');
    productParams.on('click', e => {
        const params = $(e.currentTarget).find('.product__params__list');
        params.toggleClass('product__params__list--visible');
    })
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzbGlkZXMgPSAkKCcuc2xpZGVyX19pdGVtJyk7XG5cbiAgICBzbGlkZXMuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgJChpdGVtKS5jc3MoJ2xlZnQnLCBpbmRleCAqIDEwMCArICclJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgY2xpY2tOdW1iZXIgPSAwO1xuICAgIGxldCBjb3VudExpbWl0ID0gc2xpZGVzLmxlbmd0aCAtIDE7XG5cbiAgICAkKCcuYXJyb3ctLXJpZ2h0Jykub24oJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgIGlmIChjbGlja051bWJlciA+IC1jb3VudExpbWl0KSB7XG4gICAgICAgICAgICBjbGlja051bWJlci0tO1xuICAgICAgICAgICAgc2xpZGVzLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgJChpdGVtKS5jc3MoJ2xlZnQnLCAoaW5kZXggKiAxMDAgKyBjbGlja051bWJlciAqIDEwMCkgKyAnJScpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLmFycm93LS1sZWZ0Jykub24oJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgIGlmIChjbGlja051bWJlciA8IDApIHtcbiAgICAgICAgICAgIGNsaWNrTnVtYmVyKys7XG4gICAgICAgICAgICBzbGlkZXMuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAkKGl0ZW0pLmNzcygnbGVmdCcsIChpbmRleCAqIDEwMCArIGNsaWNrTnVtYmVyICogMTAwKSArICclJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcblxuLy9wcm9kdWN0XG4gICAgY29uc3QgcHJvZHVjdFBhcmFtcyA9ICQoJy5wcm9kdWN0X19wYXJhbXMnKTtcbiAgICBwcm9kdWN0UGFyYW1zLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSAkKGUuY3VycmVudFRhcmdldCkuZmluZCgnLnByb2R1Y3RfX3BhcmFtc19fbGlzdCcpO1xuICAgICAgICBwYXJhbXMudG9nZ2xlQ2xhc3MoJ3Byb2R1Y3RfX3BhcmFtc19fbGlzdC0tdmlzaWJsZScpO1xuICAgIH0pXG59KSgpOyJdLCJmaWxlIjoic2xpZGVyLmpzIn0=
