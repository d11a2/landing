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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0ZWFtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGVhbUxpbmtzID0gJCgnLnRlYW1fX2xpbmsnKVxuXG4gICAgdGVhbUxpbmtzLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID1cbiAgICAgICAgICAgIHBhcnNlRmxvYXQodGFyZ2V0LmZpbmQoJy50ZWFtX19yb2xlLW5hbWUnKS5jc3MoJ2hlaWdodCcpKVxuICAgICAgICAgICAgKyBwYXJzZUZsb2F0KHRhcmdldC5maW5kKCcudGVhbV9fcm9sZS1kZXNjJykuY3NzKCdoZWlnaHQnKSkgKyAncHgnO1xuXG4gICAgICAgIGlmICh0YXJnZXQuaGFzQ2xhc3MoJ3RlYW1fX2xpbmstLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICB0YXJnZXQuZmluZCgnLnRlYW1fX3JvbGUnKS5jc3MoJ2hlaWdodCcsIDApO1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKCd0ZWFtX19saW5rLS1hY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRlYW1MaW5rcy5yZW1vdmVDbGFzcygndGVhbV9fbGluay0tYWN0aXZlJykuZmluZCgnLnRlYW1fX3JvbGUnKS5jc3MoJ2hlaWdodCcsIDApO1xuICAgICAgICAgICAgdGFyZ2V0LmFkZENsYXNzKCd0ZWFtX19saW5rLS1hY3RpdmUnKS5maW5kKCcudGVhbV9fcm9sZScpLmhlaWdodCh0YXJnZXRIZWlnaHQpO1xuICAgICAgICB9XG4gICAgfSlcbn0pKCk7Il0sImZpbGUiOiJ0ZWFtLmpzIn0=
