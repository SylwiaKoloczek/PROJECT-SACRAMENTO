$(function() {

    const today=$(".today");
    const todays_flavours=$("#todays_flavours");
    const todays_flavours_elements=$(".todays_flavours_elements");
    const everyday=$(".everyday");
    const everyday_flavours=$("#everyday_flavours");
    const everyday_flavours_elements=$(".everyday_flavours_elements");

    //pokazywanie smaków lodów
    today.on("mouseover",function () {
        todays_flavours.css('display', 'none');
        todays_flavours_elements.css('display', 'block');
    })
    everyday.on("mouseover",function () {
        everyday_flavours.css('display', 'none');
        everyday_flavours_elements.css('display', 'block');
    })

    //ukrywanie smaków lodów
    today.on("mouseleave",function () {
        todays_flavours.css('display', 'block');
        todays_flavours_elements.css('display', 'none');
    })
    everyday.on("mouseleave",function () {
        everyday_flavours.css('display', 'block');
        everyday_flavours_elements.css('display', 'none');
    })

});