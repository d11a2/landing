$(document).ready(() => {
    const accordionItems = $('.accordion__item');
    const accordionTitles = $('.accordion__title-content');
    accordionTitles.on('click', (e) => {

        const target = $(e.currentTarget);
        const closestAccordionItem = target.closest('.accordion__item');

        if (closestAccordionItem.hasClass('active')) {
            accordionItems.removeClass('active');

        } else {
            accordionItems.removeClass('active');
            closestAccordionItem.addClass('active');
        }

    })
});