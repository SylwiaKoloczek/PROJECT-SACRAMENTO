$( function() {

    let input_value; //wprowadzane dane
    num_array = (num_array) ? JSON.parse(num_array) : [];

    //obsługa wysłania nr telefonu
    $('.info').on("submit", function (e) {
        e.preventDefault();
        input_value=$('input').val();

        if(num_array.indexOf(input_value) >= 0)
        {
            num_array.push(input_value);
            alert_display($('.cheater'));  //nagroda już odebrana
        }
        else if ($.isNumeric(input_value) && input_value.length===9)
        {
            validation_correct(); //poprawne dane
        }
        else
        {
            alert_display($('.wrong_data')); //nieprawidłowy format danych
        }
    })
});

///////////////OBSŁUGA///////////////

let timeout_id; //timer odmierzający czas do zniknięcia wyswietlanego bloku
let num_array = localStorage.getItem("num_array");

//funkcja potwierdzająca poprawne przesłanie formularza
function validation_correct() {
    $('input').val("");
    $('.good_data').addClass('animation');
    $('.good_data').css('display','flex');
    $('.info').css('display','none');
    localStorage.setItem("num_array", JSON.stringify(num_array));

    timeout_id=setTimeout(function () {
        display_main_menu($('.win'));
    },3000)
}

//funkcja pokazująca ostrzeżenie przy wpisaniu złych danych
function alert_display(a) {
    a.removeClass('animation_fade');
    a.addClass('animation');
    a.css("display","block");
    timeout_id=setTimeout(function () {
        a.addClass('animation_fade');
    },5000);
    $('input').val("");
}