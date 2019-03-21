//zmiana koloru guzika dźwięku
function change_sound_color() {
    const main_btn=$('.main_btn');
    const main_menu=$('.main_menu');
    const about=$('.about');
    const extras=$('.extras');
    const find_us=$('.find_us');
    const flavours=$('.flavours');
    const gallery=$('.gallery');
    const game_part=$('.game_part');
    const loose=$('.loose');
    const prices_hours=$('.prices_opening_hours');
    const win=$('.win');
    const audio_btn=$('#audioControl');

    if(main_btn.css("display")==="flex") audio_btn.css("color","#F24443");
    else if(main_menu.css("display")==="block") audio_btn.css("color", "#E4B5C7");
    else if(about.css("display")==="flex") audio_btn.css("color", "#535D8F");
    else if(extras.css("display")==="block") audio_btn.css("color", "#9DBCDB");
    else if(find_us.css("display")==="block") audio_btn.css("color", "#EABF92");
    else if(flavours.css("display")==="block") audio_btn.css("color", "#E27491");
    else if(gallery.css("display")==="flex") audio_btn.css("color", " #456280");
    else if(game_part.css("display")==="block") audio_btn.css("color", " #9DBCDB");
    else if(prices_hours.css("display")==="flex") audio_btn.css("color", "#A1AF73");
    else if (win.css("display")==="flex") audio_btn.css("color", " #A89247");
    else if (loose.css("display")==="flex") audio_btn.css("color", " #A89247");
}
$(function() {

    //dlaczego to nie działa na jquery?
    const yourAudio = $('#yourAudio')[0],
        ctrl = $('#audioControl');

    ctrl.on('click', function () {

        // Update the Button
        const pause = ctrl.innerHTML === 'Pause music...';
        ctrl.innerHTML = pause ? 'Play music...' : 'Pause music...';

        // Update the Audio
        const method = pause ? 'pause' : 'play';
        yourAudio[method]();

        // Prevent Default Action
        return false;
    });

    $('h1').on("click",function () {
        $("#audioControl").addClass('animation');
    })
    $('div').on("click",function () {
        $("#audioControl").addClass('animation');
    })

});