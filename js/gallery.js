$( function() {

    const next_pic=$(".next");
    const prev_pic=$(".prev");
    const slide_elements=$(".slide");
    let div_index=0;

    $(slide_elements[0]).addClass('visible');

    //pokazywanie następnego slajdu
    next_pic.on("click", function () {
        $(slide_elements[div_index]).removeClass('visible');
        //gdy chcemy się przesunąć na ujemny slajd
        if(div_index<0) div_index=slide_elements.length-1;
        //gdy jesteśmy na ostatnim slajdzie
        else if(div_index>=slide_elements.length-1) div_index=0;
        else div_index++;
        $(slide_elements[div_index]).addClass('visible');
        $(slide_elements[div_index]).addClass('animation');
    })

    //pokazywanie poprzedniego slajdu
    prev_pic.on("click", function () {
        $(slide_elements[div_index]).removeClass('visible');
        //gdy jesteśmy na pierwszym slajdzie
        if(div_index===0) div_index=slide_elements.length-1;
        else div_index--;
        $(slide_elements[div_index]).addClass('visible');
        $(slide_elements[div_index]).addClass('animation');
    })
});