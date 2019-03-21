$(function() {

    const main_btn=$(".main_btn");
    const main_menu_btn=$(".main_menu h1");
    const about_us_btn=$(".about_us_circle");
    const about=$(".about");
    const about_btn=$(".about h1");
    const prices_btn=$(".main_menu .prices_circle");
    const opening_hours_btn=$(".main_menu .hours_circle");
    const prices_hours=$(".prices_opening_hours");
    const prices_hours_btn=$(".prices_opening_hours h1");
    const find_btn=$(".main_menu  .find_circle");
    const find_us=$(".find_us");
    const find_us_btn=$(".find_us h1");
    const gallery_btn=$(".main_menu .gallery_circle");
    const gallery=$(".gallery");
    const gallery_main_btn=$(".gallery h1");
    const flavours_btn=$(".main_menu .flavours_circle");
    const flavours=$(".flavours");
    const flavours_back_btn=$(".flavours h1");
    const extras_btn=$(".extras_circle");
    const extras=$(".extras");
    const extras_main_btn=$(".extras h1");
    const game_part=$('.game_part');
    const back_main_btn=$('.game_part h1');
    const win=$('.win');
    const win_btn=$('.win h1');
    const loose=$('.loose');
    const loose_btn=$('.loose h1');

    //zamykanie strony tytułowej
    main_btn.on("click", function () {
        display_main_menu(main_btn);
    })

    //wyświetlanie strony tytułowej
    main_menu_btn.on("click", function () {
        display_clicked_part(main_btn, 'flex');
    })

    //wyświetlanie bloku o nas
    about_us_btn.on("click", function () {
        display_clicked_part(about, 'flex');
    })

    //zamykanie bloku o nas
    about_btn.on("click", function () {
        display_main_menu(about);
    })

    //wyświetlanie bloku o cenach i godz otwarcia
    prices_btn.on("click", function () {
        display_clicked_part(prices_hours, 'flex');
    })

    //wyświetlanie bloku o cenach i godz otwarcia
    opening_hours_btn.on("click", function () {
        display_clicked_part(prices_hours, 'flex');
    })

   // zamykanie bloku o cenach i godz otwarcia
    prices_hours_btn.on("click", function () {
        display_main_menu(prices_hours);
    })

    //wyświetlanie bloku o kontakcie
    find_btn.on("click", function () {
        display_clicked_part(find_us, 'block');
    })

    //zamykanie bloku o kontakcie
    find_us_btn.on("click", function () {
        display_main_menu(find_us);
    })

    //wyświetlanie galerii
    gallery_btn.on("click", function () {
        display_clicked_part(gallery, 'flex');
    })

    //zamykanie galerii
    gallery_main_btn.on("click", function () {
        display_main_menu(gallery);
    })

    //wyswietlanie bloku o smakach
    flavours_btn.on("click", function () {
        display_clicked_part(flavours, 'block');
    })

    //zamykanie bloku o smakach
    flavours_back_btn.on("click", function () {
        display_main_menu(flavours);
    })

    //zamykanie bloku o wygranej
    win_btn.on("click", function () {
        clearTimeout(timeout_id);
        display_main_menu(win);
    })

    //zamykanie bloku z grą
    back_main_btn.on("click", function () {
        clearInterval(interval);
        display_main_menu(game_part);
    })

    //zamykanie bloku o przegranej
    loose_btn.on("click", function () {
        clearTimeout(timer_id);
        display_main_menu(loose);
    })

    //wyświetalnie bloku extra
    extras_btn.on("click", function () {
      display_clicked_part(extras, 'block');
    })

    //zamykanie bloku extra
    extras_main_btn.on("click", function () {
        display_main_menu(extras);
    })

});


//funckja wyświetlająca daną podstronę
function display_clicked_part(a, b) {
    a.addClass('animation');
    $('.main_menu').css('display','none');
    a.css('display', b);
    change_sound_color();
}

//funkcja zamykająca daną podstronę
function display_main_menu(a) {
    $('.main_menu').addClass('animation');
    $('.main_menu').css('display','block');
    a.css('display', 'none');
    change_sound_color();
}