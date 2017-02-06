jQuery( document ).ready(function( $ ) {
"use strict"

    // ---------- Preloader ---------- //
    jQuery(window).load(function() {
        // will first fade out the loading animation
        jQuery("#status").delay(2000).fadeOut();
           // will fade out the whole DIV that covers the website.
        jQuery("#preloader").delay(2000).fadeOut("slow");
    })
    // ---------- Preloader ---------- //

    // ------- Scroll to Top ------- //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').on( "click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
    // ------- Scroll to Top ------- //

    // ---------- Banner Slider ---------- //  
    $('#animated-sldier').carousel({
        interval:5000,
        pause: "false"
    });
    // ---------- Banner Slider ---------- //

    // ------- Date Picker ------- //
    $('#calendar').datepicker({
        inline: true
    });
    // ------- Date Picker ------- //

    // ---------- practice slider ---------- //
    $('#courses-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: true,
        smartSpeed:600,
        responsiveClass:true,
        responsive:{
            0:{ items:1},
            320:{ items:1},
            480:{ items:1},
            640:{ items:2},
            768:{ items:2},
            800:{ items:2},
            960:{ items:3},
            991:{ items:3},
            1024:{ items:3},
            1199:{ items:4},
            1200:{ items:4}
        }
    })
    // ---------- practice slider ---------- //

    // ---------- practice slider ---------- //
    $('.testimonial-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        center: true,
        dots: true,
        smartSpeed:600,
        responsiveClass:true,
        responsive:{
            0:{ items:1},
            320:{ items:1},
            480:{ items:1},
            640:{ items:2},
            768:{ items:2},
            800:{ items:2},
            960:{ items:3},
            991:{ items:2},
            1024:{ items:3},
            1199:{ items:3},
            1200:{ items:3}
        }
    })
    // ---------- practice slider ---------- //

    // ---------- practice slider ---------- //
    $('.gallery-slider').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        smartSpeed:200,
        responsiveClass:true,
        responsive:{
            0:{ items:2},
            320:{ items:2},
            480:{ items:3},
            640:{ items:4},
            768:{ items:4},
            800:{ items:5},
            960:{ items:6},
            991:{ items:7},
            1024:{ items:8},
            1199:{ items:10},
            1200:{ items:10}
        }
    })
    // ---------- practice slider ---------- //

    // ---------- practice slider ---------- //
    $('.most-course-slider').owlCarousel({
        loop:true,
        nav:true,
        dots: true,
        margin: 30,
        smartSpeed:200,
        responsiveClass:true,
        responsive:{
            0:{ items:1},
            320:{ items:1},
            480:{ items:1},
            640:{ items:2},
            768:{ items:2},
            800:{ items:2},
            960:{ items:2},
            991:{ items:2},
            1024:{ items:3},
            1199:{ items:3},
            1200:{ items:3}
        }
    })
    // ---------- practice slider ---------- //

    // ---------- practice slider ---------- //
    $('.testimonial-2-slider').owlCarousel({
        loop:true,
        nav:true,
        dots: true,
        margin: 30,
        smartSpeed:400,
        responsiveClass:true,
        responsive:{
            0:{ items:1}
        }
    })
    // ---------- practice slider ---------- //

    // ---------- Event Slider ---------- //
    $('.event-slider').owlCarousel({
        loop:true,
        nav:true,
        dots: false,
        margin: 30,
        smartSpeed:400,
        responsiveClass:true,
        responsive:{
            0:{ items:1}
        }
    })
    // ---------- Event Slider ---------- //

    // ---------- Lecturers Team Slider ---------- //
    $('.lecturers-team-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: true,
        smartSpeed:600,
        responsiveClass:true,
        responsive:{
            0:{ items:1},
            320:{ items:1},
            480:{ items:1},
            640:{ items:2},
            768:{ items:2},
            800:{ items:2},
            960:{ items:3},
            991:{ items:3},
            1024:{ items:3},
            1199:{ items:4},
            1200:{ items:4}
        }
    })
    // ---------- Lecturers Team Slider ---------- //

    // ---------- Lastest News Slider ---------- //
    $('.news-slider').owlCarousel({
        loop:false,
        margin:30,
        nav:false,
        dots: false,
        smartSpeed:600,
        responsiveClass:true,
        responsive:{
            0:{ items:1},
            320:{ items:1},
            480:{ items:1},
            640:{ items:2},
            768:{ items:2},
            800:{ items:2},
            960:{ items:3},
            991:{ items:2},
            1024:{ items:3},
            1199:{ items:3},
            1200:{ items:3}
        }
    })
    // ---------- Lastest News Slider ---------- //

    // ------- Mesonary ------- //
    var $container = $('.gallery-masonry');
    var $optionSets = $('.option-set');
    var $optionLinks = $optionSets.find('a');

    function doIsotopeFilter() {
        if ($().isotope) {
            var isotopeFilter = '';
            $optionLinks.each(function() {
                var selector = $(this).attr('data-filter');
                var link = window.location.href;
                var firstIndex = link.indexOf('filter=');
                if (firstIndex > 0) {
                    var id = link.substring(firstIndex + 7, link.length);
                    if ('.' + id == selector) {
                        isotopeFilter = '.' + id;
                    }
                }
            });
            $container.isotope({
                itemSelector: '.masonry-grid',
                filter: isotopeFilter,
                layoutMode: 'fitRows'
            });
            $optionLinks.each(function() {
                var $this = $(this);
                var selector = $this.attr('data-filter');
                if (selector == isotopeFilter) {
                    if (!$this.hasClass('selected')) {
                        var $optionSet = $this.parents('.option-set');
                        $optionSet.find('.selected').removeClass('selected');
                        $this.addClass('selected');
                    }
                }
            });
            $optionLinks.on( "click", function() {
                var $this = $(this);
                var selector = $this.attr('data-filter');
                $container.isotope({
                    itemSelector: '.masonry-grid',
                    filter: selector
                });
                if (!$this.hasClass('selected')) {
                    var $optionSet = $this.parents('.option-set');
                    $optionSet.find('.selected').removeClass('selected');
                    $this.addClass('selected');
                }
                return false;
            });
        }
    }
    var isotopeTimer = window.setTimeout(function() {
        window.clearTimeout(isotopeTimer);
        doIsotopeFilter();
    }, 1000);
    $('.simple-masonry').isotope({
      itemSelector: '.simple-masonry-grid'
    });
    // ------- Mesonary ------- // 


    // ------- Event Google Map ------- // 
    $("#event-map").gmap3({
        marker: {
            address: "Haltern am See, Weseler Str. 151"
        },
        map: {
            options: {
                zoom: 10,
                scrollwheel: false,
            }
        },
    });
    // ------- Event Map ------- //

    // ------- Contact Google Map ------- // 
    $("#contact-map").gmap3({
        marker: {
            address: "Haltern am See, Weseler Str. 151"
        },
        map: {
            options: {
                zoom: 16,
                scrollwheel: false,
            }
        },

    });
    // ------- Contact Map ------- //

    // ---------- Banner Slider Fix ---------- //
    $(".header").sticky({topSpacing: 0});
    // ---------- Banner Slider Fix ---------- //

    // ---------- Toggle Search Bar ---------- //
    $("#search-toggle").on( "click", function(e){
        e.preventDefault();
        $(".search-box").toggleClass("on-click");
    });
    // ---------- Toggle Search Bar ---------- //

    // ------- Counter ------- //
    try {
        $('#tc-counters').appear(function () {
            $('.tc-timer').countTo()
        });
    } catch (err) {}    
    // ------- Counter ------- //

    // ------- Animated Progress Bar ------- //
    try {
        $('#tc-skillgroup-1, #tc-skillgroup-2').appear(function () {
            jQuery('.tc-skillholder').each(function () {
                jQuery(this).find('.tc-skillbar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 2500);
            });
        });
    } catch (err) {}
    // ------- Animated Progress Bar ------- //

    // ---------- practice slider ---------- //
    $('#slider-post').owlCarousel({
        loop:true,
        nav:true,
        items: 1,
        dots: false,
        smartSpeed:500
    })
    // ---------- practice slider ---------- //

    // ---------- Wow Animation ---------- //
    var wow = new WOW({
        boxClass:     'animate',  
        animateClass: 'animated', 
        offset:       100,          
        mobile:       false        
        });
    wow.init();
    // ---------- Wow Animation ---------- //

    // ------- Auto height function ------- //
    var setElementHeight = function () {
        var width = $(window).width();
        /*if ($('.tc-hero-slider li img') >= height) {*/
        var height = $(window).height();
        $('.fullscreen').css('height', (height));
        }
    //       else {
    //            $('.autoheight').css('min-height', (800));
    //        }
    //};
    $(window).on("resize", function () {
        setElementHeight();
    }).resize();
    // ------- Auto height function ------- //

    // ------- Prety Photo ------- //
    $("a[data-rel]").each(function () {
		$(this).attr("rel", $(this).data("rel"));
	});
	$("a[data-rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'normal',
		theme: 'dark_square',
		slideshow: 3000,
		autoplay_slideshow: false,
		social_tools: false
	});
	// ------- Prety Photo ------- //

	// ------- PrettyPhoto Video Popup ------- //
    $("a[rel^='prettyPhoto']").prettyPhoto();
    // ------- PrettyPhoto Video Popup ------- //

});