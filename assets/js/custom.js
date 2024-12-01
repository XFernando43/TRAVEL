$(document).ready(function(){

	"use strict";

    

        /*==================================

* Template Name : Travel HTML Template

* Version       : 1.0

==================================== */


        /*=========== TABLE OF CONTENTS ===========

1. Scroll To Top
2. Range js
3. Countdown timer
4. owl carousel
5. datepicker
6. Smooth Scroll spy
7. Animation support
======================================*/
    

    // 1. Scroll To Top 

		$(window).on('scroll',function () {

			if ($(this).scrollTop() > 600) {

				$('.return-to-top').fadeIn();

			} else {

				$('.return-to-top').fadeOut();

			}

		});

		$('.return-to-top').on('click',function(){

				$('html, body').animate({

				scrollTop: 0

			}, 1500);

			return false;

		});

    // 2. range js
        
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 12000,
            values: [ 2677, 9241 ],
            slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
        
        
        // Quantity Buttons Shop
    
        $(".qtyplus").on("click", function(){
        var b = $(this).parents(".quantity-form").find("input.qty"),
                c = parseInt(b.val(), 10) + 1,
                d = parseInt(b.attr("max"), 10);
            d || (d = 9999999999), c <= d && (b.val(c), b.change())
        });
        $(".qtyminus").on("click", function(){
            var b = $(this).parents(".quantity-form").find("input.qty"),
                c = parseInt(b.val(), 10) - 1,
                d = parseInt(b.attr("min"), 10);
            d || (d = 1), c >= d && (b.val(c), b.change())
        });


    // 3.Countdown timer 
        
        function makeTimer() {

                var endTime = new Date("January 21, 2025 12:00:00 PDT");            
                var endTime = (Date.parse(endTime)) / 1000;

                var now = new Date();
                var now = (Date.parse(now) / 1000);

                var timeLeft = endTime - now;

                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }

                $("#days").html(days + '<span class="camp">Dias</span>');
                $("#hours").html(hours + '<span class="camp">Horas</span>');
                $("#minutes").html(minutes + '<span class="camp">Minutos</span>');
                $("#seconds").html(seconds + '<span class="camp">Segundos</span>');       

        }
        
        setInterval(function() { makeTimer(); }, 1000);

    // 4. owl carousel
    
        // i. #testimonial-carousel
    
        
        var owl=$('#testemonial-carousel');
        owl.owlCarousel({
            items:3,
            margin:0,
            
            loop:true,
            autoplay:true,
            smartSpeed:1000,
            
            //nav:false,
            //navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            
            dots:true,
            autoplayHoverPause:true,
        
            responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    640:{
                        items:1
                    },
                    767:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                }
            
            
        });

    // 5. datepicker
            $('[data-toggle="datepicker"]').datepicker();

    // 6. Smooth Scroll spy
        
        $('.header-area').sticky({
           topSpacing:0
        });
        
        //=============

        $('li.smooth-menu a').bind("click", function(event) {
            event.preventDefault();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - -1
            }, 1200,'easeInOutExpo');
        });
        
        $('body').scrollspy({
            target:'.navbar-collapse',
            offset:0
        });

    // 7.animation support

        $(window).load(function(){

            $(".about-us-txt h2").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".about-us-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){

            $(".about-us-txt h2").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".about-us-txt button").addClass("animated fadeInDown").css({'opacity':'0'});

        });
        

});	

document.addEventListener("DOMContentLoaded", function () {
    // Referencias a los enlaces de los servicios
    const selectTours = document.getElementById("select-tours-tab");
    const selectHotels = document.getElementById("select-hotels-tab");
    const selectFlights = document.getElementById("select-flights-tab");

    // Referencias a los links de los tabs
    const toursTab = document.querySelector('a[href="#tours"]');
    const hotelsTab = document.querySelector('a[href="#hotels"]');
    const flightsTab = document.querySelector('a[href="#flights"]');

    // Función para simular un clic en el tab
    const activateTab = (tab) => {
        $(tab).tab('show'); // Usamos jQuery para activar el tab
    };

    // Event listeners para los botones
    selectTours.addEventListener("click", (e) => {
        e.preventDefault();
        activateTab(toursTab);
    });

    selectHotels.addEventListener("click", (e) => {
        e.preventDefault();
        activateTab(hotelsTab);
    });

    selectFlights.addEventListener("click", (e) => {
        e.preventDefault();
        activateTab(flightsTab);
    });
});

const homeBtn = document.getElementById("home-btn");
const quienesSomosBtn = document.getElementById("quienes-somos-btn");
const homeSection = document.getElementById("todo");
const quienesSomosSection = document.getElementById("quienes-somos");

function showHome() {
    homeSection.style.display = "block";
    quienesSomosSection.style.display = "none";
}

function showQuienesSomos() {
    quienesSomosSection.style.display = "block";
    homeSection.style.display = "none";
}


homeBtn.addEventListener("click", showHome);
quienesSomosBtn.addEventListener("click", showQuienesSomos);