(function () {
    const teamLinks = $('.team__link')

    teamLinks.on('click', (e) => {
        const target = $(e.currentTarget);
        const targetHeight =
            parseFloat(target.find('.team__role-name').css('height'))
            + parseFloat(target.find('.team__role-desc').css('height')) + 'px';

        if (target.hasClass('team__link--active')) {
            target.find('.team__role').css('height', 0);
            target.removeClass('team__link--active');
        } else {
            teamLinks.removeClass('team__link--active').find('.team__role').css('height', 0);
            target.addClass('team__link--active').find('.team__role').height(targetHeight);
        }
    })
})();