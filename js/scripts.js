/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

        // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    $(".parent-circle-service").hover(function (){
        $(this).parent().find(".circle-service").addClass("circle-service-hover")
    });
    $(".btn-primary").hover(
        function (){
            $(this).animate({
            width:300,
        });
    },
        function (){
            $(this).animate({
                width:250,
            });
    });
    $(".masthead-subheading , .masthead-heading").hover(function (){
        $(this).css({
            transition: "all 0.5s ease",
            color:"#fed136",
            webkitTextStroke: "0.5px black",


        }).animate({
            fontSize:"30pt",
        });
    },function (){
        $(this).css({
            color:"white",
            webkitTextStroke: "0",
        }).animate({
            fontSize:"35pt",
        });
    });
    $(".navbar-brand").hover(function () {
            $(this).find("img").animate({
                width: 250,
                borderRight:"1px solid white",
                borderLeft:"1px solid white",
            });

    },function (){
        $(this).find("img").animate({
            width: 200,
        });
    });
    $(".timeline-image").click(function (){
        $(this).css({
            borderColor: "#1DB700",
        });
        let rightR = Math.floor(Math.random()*30);
        let leftR = Math.floor(Math.random()*30);
        $(this).parent().animate({
            marginRight: rightR + "%",
            marginLeft: leftR + "%",
        });
    });
    $(".btn-social").attr({
        title:'CONTACT US',
    }).tooltip({
        show: { effect: "blind", duration: 800 },
        close:"destroy",
    });
    $("#sendMessageButton").click(function (){
        let name_input = $("#name").val();
        let email_input = $("#email").val();
        let phone_input = $("#phone").val();
        let message_input = $("#message").val();
        if(name_input && email_input && phone_input && message_input){
            alert("Name:"+name_input+"\n"+"Email:"+email_input+"\n"+"Phone:"+phone_input+"\n"+"Message:"+message_input);
        }
    });
    $(".modal-body").append("<a class='btn btn-primary bold-text'>Bold Text</a>");
    var bold_text = false;
    $(".bold-text").click(function (){
        if(!bold_text){
            $("body").css({fontWeight: "bold"});
            bold_text = true;
            $(this).text("Normal Text");
        }else {
            $("body").css({fontWeight: "normal"});
            $(this).text("Bold Text");
            bold_text = false;
        }
    });
    $(".portfolio-item").hover(
        function (){
            $(this).toggleClass("scale");
        },
        function (){
            $(this).toggleClass("scale");
        });
    $("#hideShow").click(function (){
        if($(this).text() === "Hide" ){
            $(this).text("Show").attr("href","#porfolio");
            $("#about").hide(2000);

        }else {
            $(this).text("Hide").attr("href","#about");
            $("#about").show(2000);
        }
    });
    $("#bold-menu").click(function (){
        if(!bold_text){
            $("body").css({fontWeight: "bold"});
            bold_text = true;
            $(this).css({
                color:"black",
                background:"#b3b7bb",
            });
        }else {
            $("body").css({fontWeight: "normal"});
            bold_text = false;
            $(this).css({
                color:"white",
                backgroundColor:"#8a8e92",
            });
        }
    })
})(jQuery); // End of use strict
