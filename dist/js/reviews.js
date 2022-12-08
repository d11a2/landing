(function () {
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
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJyZXZpZXdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV2aWV3c1N3aXRjaEl0ZW1zID0gJCgnLnJldmlld3NfX3N3aXRjaF9faXRlbScpO1xuICAgIGNvbnN0IHJldmlld3NJdGVtcyA9ICQoJy5yZXZpZXdzX19pdGVtJyk7XG4gICAgcmV2aWV3c1N3aXRjaEl0ZW1zLm9uKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IHRhcmdldC5pbmRleCgpO1xuXG4gICAgICAgIHJldmlld3NTd2l0Y2hJdGVtcy5yZW1vdmVDbGFzcygncmV2aWV3c19fc3dpdGNoX19pdGVtLS1hY3RpdmUnKTtcblxuICAgICAgICByZXZpZXdzSXRlbXMuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSB0YXJnZXRJbmRleCkge1xuICAgICAgICAgICAgICAgICQoaXRlbSkuYWRkQ2xhc3MoJ3Jldmlld3NfX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRDbGFzcygncmV2aWV3c19fc3dpdGNoX19pdGVtLS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChpdGVtKS5yZW1vdmVDbGFzcygncmV2aWV3c19faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn0pKCk7Il0sImZpbGUiOiJyZXZpZXdzLmpzIn0=
