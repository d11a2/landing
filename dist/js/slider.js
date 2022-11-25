$(document).ready(() => {
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
});