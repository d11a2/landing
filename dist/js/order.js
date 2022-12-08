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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJvcmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHBvcHVwID0gJCgnLnBvcHVwLWZhZGUnKTtcbiAgICBjb25zdCBwb3B1cENvbnRlbnQgPSAkKCcucG9wdXBfX2NvbnRlbnQnKTtcbiAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vd2ViZGV2LWFwaS5sb2Z0c2Nob29sLmNvbS9zZW5kbWFpbFwiO1xuICAgIGNvbnN0IGZvcm0gPSAkKCcuZm9ybScpO1xuICAgIGZvcm0ub24oJ3N1Ym1pdCcsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IGZvcm0uZmluZChcIltuYW1lPSduYW1lJ11cIik7XG4gICAgICAgIGNvbnN0IHBob25lID0gZm9ybS5maW5kKFwiW25hbWU9J3Bob25lJ11cIik7XG4gICAgICAgIGNvbnN0IHN0cmVldCA9IGZvcm0uZmluZChcIltuYW1lPSdzdHJlZXQnXVwiKTtcbiAgICAgICAgY29uc3QgaG91c2UgPSBmb3JtLmZpbmQoXCJbbmFtZT0naG91c2UnXVwiKTtcbiAgICAgICAgY29uc3QgYnVpbGRpbmcgPSBmb3JtLmZpbmQoXCJbbmFtZT0nYnVpbGRpbmcnXVwiKTtcbiAgICAgICAgY29uc3QgYXBhcnRtZW50ID0gZm9ybS5maW5kKFwiW25hbWU9J2FwYXJ0bWVudCddXCIpO1xuICAgICAgICBjb25zdCBmbG9vciA9IGZvcm0uZmluZChcIltuYW1lPSdmbG9vciddXCIpO1xuICAgICAgICBjb25zdCBjb21tZW50ID0gZm9ybS5maW5kKFwiW25hbWU9J2NvbW1lbnQnXVwiKTtcbiAgICAgICAgY29uc3QgdG8gPSBmb3JtLmZpbmQoXCJbbmFtZT0ndG8nXVwiKTtcblxuICAgICAgICBjb25zdCBwYXltZW50ID0gZm9ybS5maW5kKFwiW25hbWU9J2Nhc2gtb3ItY2FyZCddXCIpO1xuXG4gICAgICAgIFtuYW1lLCBwaG9uZSwgY29tbWVudCwgdG9dLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBmaWVsZC5yZW1vdmVDbGFzcygnbm90LXZhbGlkJyk7XG4gICAgICAgICAgICBpZiAoZmllbGQudmFsKCkgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGZpZWxkLmFkZENsYXNzKCdub3QtdmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgbm90VmFsaWRJbnB1dCA9IGZvcm0uZmluZCgnLm5vdC12YWxpZCcpO1xuXG4gICAgICAgIGlmIChub3RWYWxpZElucHV0Lmxlbmd0aCA9PSAwKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZS52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHBob25lLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICBjb21tZW50OiBjb21tZW50LnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICB0bzogdG8udmFsKCksXG5cbiAgICAgICAgICAgICAgICAgICAgc3RyZWV0OiBzdHJlZXQudmFsKCksXG4gICAgICAgICAgICAgICAgICAgIGhvdXNlOiBob3VzZS52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgYnVpbGRpbmc6IGJ1aWxkaW5nLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICBhcGFydG1lbnQ6IGFwYXJ0bWVudC52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgZmxvb3I6IGZsb29yLnZhbCgpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVxdWVzdC5kb25lKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwQ29udGVudC5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICAgICBwb3B1cENvbnRlbnQudGV4dChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHBvcHVwLmZhZGVJbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXF1ZXN0LmZhaWwoKGpxWEhSLCBleGNlcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cENvbnRlbnQuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgcG9wdXBDb250ZW50LnRleHQoXCLQodC+0L7QsdGJ0LXQvdC40LUg0L3QtSDQtNC+0YjQu9C+LiDQktCw0Lwg0L3QtdC+0LHRhdC+0LTQuNC8INC/0L7Rh9GC0L7QstGL0Lkg0LPQvtC70YPQsdGMXCIpO1xuICAgICAgICAgICAgICAgIHBvcHVwLmZhZGVJbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgfSk7XG5cbiAgICAkKCcucG9wdXAtZmFkZV9fY2xvc2UnKS5vbignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwb3B1cC5mYWRlT3V0KCk7XG4gICAgfSk7XG5cbiAgICBwb3B1cC5vbignY2xpY2snLCBlID0+IHtcblxuICAgICAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdCgnLnBvcHVwJykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHBvcHVwLmZhZGVPdXQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAyNykge1xuICAgICAgICAgICAgcG9wdXAuZmFkZU91dCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpOyJdLCJmaWxlIjoib3JkZXIuanMifQ==
