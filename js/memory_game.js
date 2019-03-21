$(function() {
    const start_btn=$(".start");
    const board=$('.board');

    //zaczynamy grę klikając na guzik
    start_btn.on("click", function () {
        start_state(); //ustawiamy warunki początkowe
        //startujemy interwał odmierzajacy czas rozgrywki
        interval = setInterval(function() {
            timer--;
            $('.game_part').css("display","block");
            $('.extras').css("display","none");
            if (timer < 0) {
                lost_game(); //przegrana
            }else{
                $('.timer p').text(`Time left: ${timer} seconds`);
            }
        }, 1000);

        click_card();
    })
    create_card(board);
});

///////////////OBSŁUGA///////////////

//używane zmienne
let cards_bg=['pic1.png','pic1.png','pic2.png','pic2.png','pic3.png','pic3.png','pic4.png','pic4.png','pic5.png','pic5.png','pic6.png','pic6.png','pic7.png','pic7.png','pic8.png','pic8.png','pic9.png','pic9.png','pic10.png','pic10.png'];
let one_shown=false; //żadna karta nie jest widoczna
let block=false; //blokowanie odsłonięcia kart
let counter=0; //sprawdza, czy wszystkie karty są odkryte
let time=91;
let timer=time; //liczy czas rozgrywki
let interval;
let timer_id;
let shown_number;//numer pierwszej pokazanej karty

//funkcja tworząca karty
function create_card(board) {
    for(let i=0; i<cards_bg.length; i++){
        const card=$('<div>');
        card.attr("id", i);
        card.addClass("card_style card");
        board.append(card);
    }
}

//funkcja obsługująca kliknięcie na daną kartę
function click_card() {
    //dodaje event klik dla kazdej karty
    const this_card=$('.card');
    this_card.off();
    this_card.on("click", function () {
        //numer karty
        const id = Number($(this).attr("id"));
        showCard(id, $(this));
    })
}

//funkcja mieszajaca tablice
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

//funkcja ustawiająca warunki początkowe
function start_state() {
    $('.game_part').children().addClass('animation');
    shuffle(cards_bg);
    $('.timer').css('display','flex');
    $('.board').children().removeClass('clicked_card');
    $('.board').children().addClass('card_style');
    $('.board').children().css("background-image", "url(../PROJECT-SACRAMENTO/images2/bg.png)");
    $('.board').children().css("filter", "brightness(100%)");
    one_shown=false;
    counter=0;
    timer=time;
    block=false;
    shown_number=-1;
}

//funkcja kończąca wygraną grę
function won_game() {
    $('.win').addClass('animation');
    clearInterval(interval);
    $('.good_data').css("display",'none');
    $('.wrong_data').css("display",'none');
    $('.info').css('display','flex');
    $('.game_part').css("display", "none");
    $('.win').css("display", "flex");
    $('.loose').css("display", "none");
    $(".timer").css("display","none");
    change_sound_color();
}

//funkcja kończąca przegraną grę
function lost_game() {
    $('.loose').children().addClass('animation');
    clearInterval(interval);
    timer_id=setTimeout(function () {
        display_main_menu($('.loose'));
    },5000);
    $('.game_part').css("display", "none");
    $('.loose').css("display", "flex");
    $('.win').css("display", "none");
    $(".timer").css("display","none");
    change_sound_color();
}

//funkcja stylująca klikniętą kartę
function style_card(number, obj) {
    block = true;
    let image = "url(../PROJECT-SACRAMENTO/images2/" + cards_bg[number] + ")";
    obj.css("background-image", image);
    obj.addClass("clicked_card");
    obj.removeClass("card_style");
}

//funckcja pokazująca pierwszą kartę
function show_first(number) {
    one_shown = true;
    shown_number = number; //zapamietuje nr pierwszej karty
    block = false;
}

//funkcja ustawiająca warunki dla znalezionej pary
function match(number) {
    $('#' + shown_number).css('filter', "brightness(50%)");
    $('#' + number).css('filter', "brightness(50%)");
    block = false;
    counter = counter + 2;
}

//funkcja ukrywająca dwie różne karty
function hide_cards(number) {
    $('#' + shown_number).css('background-image', "url(../PROJECT-SACRAMENTO/images2/bg.png)");
    $('#' + number).css('background-image', "url(../PROJECT-SACRAMENTO/images2/bg.png)");

    $('#' + shown_number).addClass("card_style");
    $('#' + shown_number).removeClass("clicked_card");

    $('#' + number).addClass("card_style");
    $('#' + number).removeClass("clicked_card");
    block = false;
}

//funkcja pokazująca kartę
function showCard(number, obj) {

    if (block === false)
    {
        style_card(number, obj); //stylowanie odkrytej karty
        //sprawdzam, ile już mam odkrytych kart
        if (one_shown === false) //żadna nie odkryta
        {
            show_first(number); //odkrywam pierwszą kartę
        }
        else //jedna już odryta i odkrywam drugą
        {
            if (cards_bg[shown_number] === cards_bg[number] && shown_number!== number)
            {
                setTimeout(function () {
                    match(number); //dwie takie same karty
                    if (counter === cards_bg.length)
                    {
                        won_game(); //wygrana gry
                    }
                }, 1000)
            }
            else
            {
                setTimeout(function () {
                    hide_cards(number); //dwie różne karty
                }, 1500)
            }
            one_shown = false;
        }
    }
}