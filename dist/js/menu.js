(function () {
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
})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSAkKCcuYWNjb3JkaW9uX19pdGVtJyk7XG4gICAgY29uc3QgYWNjb3JkaW9uVGl0bGVzID0gJCgnLmFjY29yZGlvbl9fdGl0bGUtY29udGVudCcpO1xuICAgIGFjY29yZGlvblRpdGxlcy5vbignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgY2xvc2VzdEFjY29yZGlvbkl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnLmFjY29yZGlvbl9faXRlbScpO1xuXG4gICAgICAgIGlmIChjbG9zZXN0QWNjb3JkaW9uSXRlbS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGFjY29yZGlvbkl0ZW1zLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWNjb3JkaW9uSXRlbXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY2xvc2VzdEFjY29yZGlvbkl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICB9KVxufSkoKTtcbiJdLCJmaWxlIjoibWVudS5qcyJ9
