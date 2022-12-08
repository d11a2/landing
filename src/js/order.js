(function () {
    const popup = $('.popup-fade');
    const popupContent = $('.popup__content');
    const url = "https://webdev-api.loftschool.com/sendmail";
    const form = $('.form');
    form.on('submit', e => {
        e.preventDefault();

        const name = form.find("[name='name']");
        const phone = form.find("[name='phone']");
        const street = form.find("[name='street']");
        const house = form.find("[name='house']");
        const building = form.find("[name='building']");
        const apartment = form.find("[name='apartment']");
        const floor = form.find("[name='floor']");
        const comment = form.find("[name='comment']");
        const to = form.find("[name='to']");

        const payment = form.find("[name='cash-or-card']");

        [name, phone, comment, to].forEach((field) => {
            field.removeClass('not-valid');
            if (field.val() == "") {
                field.addClass('not-valid');
            }
        });

        const notValidInput = form.find('.not-valid');

        if (notValidInput.length == 0) {

            const request = $.ajax({
                url: url,
                method: 'post',
                data: {
                    name: name.val(),
                    phone: phone.val(),
                    comment: comment.val(),
                    to: to.val(),

                    street: street.val(),
                    house: house.val(),
                    building: building.val(),
                    apartment: apartment.val(),
                    floor: floor.val(),
                },
            });

            request.done(data => {
                popupContent.removeClass('error');
                popupContent.text(data.message);
                popup.fadeIn();
            });
            request.fail((jqXHR, exception) => {
                popupContent.addClass('error');
                popupContent.text("Сообщение не дошло. Вам необходим почтовый голубь");
                popup.fadeIn();
            });
        }


    });

    $('.popup-fade__close').on('click', e => {
        e.preventDefault();
        popup.fadeOut();
    });

    popup.on('click', e => {

        if ($(e.target).closest('.popup').length == 0) {
            popup.fadeOut();
        }
    });

    $(document).on('keydown', e => {
        if (e.keyCode == 27) {
            popup.fadeOut();
        }
    });
})();