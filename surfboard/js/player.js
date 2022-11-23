
    let player;
    const playBtn = $('.player__start-btn');
    const playerContent = $('.player__content');

    const playback = $('.player__playback');
    const playbackBtn = $('.player__playback-btn');
    const progress = $('.player__playback__progress');

    const volume = $('.player__volume');
    const volumeBtn = $('.player__volume__btn');
    const level = $('.player__volume__level');

    const play = function () {
        player.playVideo();
        playBtn.addClass('active');
    }
    const pause = function () {
        player.pauseVideo();
        playBtn.removeClass('active');
    }

    let eventsInit = () => {
            $('.player__start-btn').click(e => {
                e.preventDefault();

                if (playerContent.hasClass('paused')) {
                    pause();
                } else {
                    play()
                }
            });


            function getProgressPercent(documentEvent, scale) {
                return (documentEvent.pageX - scale.offset().left) / scale.width() * 100;
            }

            /////// playback
            playbackInit = function () {

                function onMouseMove(e) {

                    const progressPercent = getProgressPercent(arguments[2], this);
                    if (0 <= progressPercent && progressPercent <= 100) {
                        arguments[0].css({
                            left: `${progressPercent}%`
                        });
                        arguments[1].css({
                            width: `${progressPercent}%`
                        });

                        const progressSec = (player.getDuration() / 100) * progressPercent;
                        player.seekTo(progressSec);

                    }
                }

                function onMouseUp() {
                    console.log('onMouseUp');

                    const scale = this;
                    $(document).off('mousemove', boundOnMouseMove);
                    play();

                    function moveToClickedPositionOn() {
                        scale.on('click', boundOnMouseMove);
                    }

                    setTimeout(moveToClickedPositionOn, 1000);
                }

                function onMouseDown() {
                    console.log('mousedown');

                    const scale = this;
                    scale.off('click', boundOnMouseMove)
                    player.pauseVideo();
                    $(document).on('mousemove', boundOnMouseMove);
                    scale.on('mouseup', boundOnMouseUp);
                }


                const boundOnMouseMove = onMouseMove.bind(playback, playbackBtn, progress);
                const boundOnMouseDown = onMouseDown.bind(playback);
                const boundOnMouseUp = onMouseUp.bind(playback);

                playbackBtn.on('mousedown', boundOnMouseDown);
                playback.on('click', boundOnMouseMove);
            };

            playbackInit();

            /////// volume
            volumeInit = function () {

                //player.setVolume(100);
                volumeBtn.css({
                    left: `${100}%`
                });
                level.css({
                    width: `${100}%`
                });

                function onMouseMove(e) {

                    const progressPercent = getProgressPercent(arguments[2], this);

                    if (0 <= progressPercent && progressPercent <= 100) {

                        arguments[0].css({
                            left: `${progressPercent}%`
                        });
                        arguments[1].css({
                            width: `${progressPercent}%`
                        });

                        player.setVolume(progressPercent);
                    }
                }

                function onMouseUp() {
                    console.log('onMouseUp');

                    const scale = this;
                    $(document).off('mousemove', boundOnMouseMove);

                    function moveToClickedPositionOn() {
                        scale.on('click', boundOnMouseMove);
                    }

                    setTimeout(moveToClickedPositionOn, 1000);
                }

                function onMouseDown() {
                    console.log('mousedown');

                    const scale = this;
                    scale.off('click', boundOnMouseMove)
                    $(document).on('mousemove', boundOnMouseMove);
                    scale.on('mouseup', boundOnMouseUp);
                }

                const boundOnMouseMove = onMouseMove.bind(volume, volumeBtn, level);
                const boundOnMouseDown = onMouseDown.bind(volume);
                const boundOnMouseUp = onMouseUp.bind(volume);

                volumeBtn.on('mousedown', boundOnMouseDown);
                volume.on('click', boundOnMouseMove);
            };

            volumeInit();

            $('.player__splash').on('click', e => {
                play();
            })
        }
    ;

    const formatTime = timeSec => {
        const roundTime = Math.round(timeSec);

        const minutes = addZero(Math.floor(roundTime / 60));
        const seconds = addZero(roundTime - minutes * 60);

        function addZero(num) {
            return num < 10 ? `0${num}` : `${num}`;
        }

        return `${minutes} : ${seconds}`;
    }

    const onPlayerReady = () => {

        let interval;
        const durationSec = player.getDuration();

        $('.player__duration-estimate').text(formatTime(durationSec));

        if (typeof interval !== 'undefined') {
            clearInterval(interval);
        }

        interval = setInterval(() => {
            const completedSec = player.getCurrentTime();
            const completedPercent = (completedSec / durationSec) * 100;

            playbackBtn.css({
                left: `${completedPercent}%`
            });
            progress.css({
                width: `${completedPercent}%`
            });

            $('.player__duration-completed').text(formatTime(completedSec));
        }, 1000)
    }
    const onPlayerStateChange = (event) => {
        switch (event.data) {
            case 1:
                playerContent.addClass('active');
                playerContent.addClass('paused');

                break;
            case 2:
                playerContent.removeClass('active');
                playerContent.removeClass('paused');

                break;
        }


        /*
         -1 (воспроизведение видео не начато)
        0 (воспроизведение видео завершено)
        1 (воспроизведение)
        2 (пауза)
        3 (буферизация)
        5 (видео подают реплики).
        */
    }

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtube-player', {
            height: '390',
            width: '640',
            videoId: 'LFDaKUHgK7E',
            playerVars: {
                'playsinline': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            },
            playerVars: {
                controls: 0,
                disablekb: 0,
                showinfo: 0,
                rel: 0,
                autoplay: 0,
                modestbranding: 0
            }
        });
    }

    eventsInit();