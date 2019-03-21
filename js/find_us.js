$(function() {

    //obsługa telefonu
    const phone=$(".phone");
    const phone_icon=$(".fa-phone");
    const phone_number=$("#phone_number");

    phone.on("mouseover",function () {
        phone_icon.css('display', 'none');
        phone_number.css('display', 'block');
    })

    phone.on("mouseleave",function () {
        phone_icon.css('display', 'block');
        phone_number.css('display', 'none');
    })

    //obsługa maila
    const mail=$(".e-mail");
    const mail_icon=$(".fa-envelope");
    const mail_address=$("#e-mail_address");

    mail.on("mouseover",function () {
        mail_icon.css('display', 'none');
        mail_address.css('display', 'block');
    })

    mail.on("mouseleave",function () {
        mail_icon.css('display', 'block');
        mail_address.css('display', 'none');
    })

});