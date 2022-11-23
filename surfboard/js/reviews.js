$(document).ready(() => {
    const reviewsSwitchItems = $('.reviews__switch__item');
    const reviewsItems = $('.reviews__item');
    reviewsSwitchItems.on('click', (e) => {

        const target = $(e.currentTarget);
        const targetIndex = target.index();

        reviewsSwitchItems.removeClass('reviews__switch__item--active');

        reviewsItems.each((index, item) => {
            if (index == targetIndex) {
                $(item).addClass('reviews__item--active');
                target.addClass('reviews__switch__item--active');
            } else {
                $(item).removeClass('reviews__item--active');
            }
        })
    })
});