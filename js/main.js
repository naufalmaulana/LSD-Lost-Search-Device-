/*================================================
[  Table of contents  ]
================================================
	01. jQuery MeanMenu Active
	02. Welcome Slide
	03. About Carousel
	04. Isotope Filter
	05. Logo Carousel
	06. Testimonial Carousel
	07. Related Project
	08. Other Team Member
	9.  CounterUp
	10. Venobox Active
	11. ScrollUp
	12. Accordion active class
	13. Sticky Header
	14. Preloader

======================================
[ End table content ]
======================================*/

(function ($) {
 "use strict";
  // Instantiate EasyZoom instances
    var $easyzoom = $('.easyzoom').easyZoom();
    jQuery(document).ready(function($){

		/* ==== 01. jQuery MeanMenu Active ==== */
		if ($('.proone-nav').length) {
			jQuery('.proone-nav').meanmenu();	
		}

		/* ==== CounterUp ==== */  
      if ($('.counter').length) {
        $('.counter').counterUp({
          delay: 10,
          time: 2000
        });
      }
		
		/* ==== 10. Venobox Active ==== */	
		if ($('.venobox').length) {
			$('.venobox').venobox(); 
		}
			
		/* ==== 12. ScrollUp ==== */
		$.scrollUp({
			scrollText: '<i class="icofont-swoosh-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		}); 
	
    });

 /*----------------------------
      Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });
  
// === 13. Accordion active class ===
	$('.card').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

// ==== 14. Sticky Header ====
    $(function() {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 200;
        $(window).on( 'scroll', function() {
            yOffset = $(window).scrollTop();
            if (yOffset >= triggerPoint) {
            	header.removeClass("animated cssanimation");
                header.addClass("navbar-fixed-top sticky  cssanimation animated fadeInTop");
            } else {
                header.removeClass("navbar-fixed-top sticky cssanimation  animated fadeInTop");
                header.addClass("animated cssanimation");
            }

        });
    });
    // === Hero content ===
     $('.hero-content-wrap-slide').slick({
        dots: false,
        autoplay: false,
        arrows:false,
        speed: 1500, 
        slidesToShow: 1,
    }); 
    // === Testimonial ===
     $('.testimonial-wrap').slick({
        dots: false,
        autoplay: false,
        centerMode: false,
        swipe: true,
        arrows:false,
        speed: 1500, 
        slidesToShow: 3,
        slidesToScroll: 1,     
        responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }); 
    // === Product Slider ===
     $('.product-slider-wrap').slick({
        dots: false,
        autoplay: false,
        arrows:false,
        speed: 1500, 
        slidesToShow: 3,
        slidesToScroll: 1,     
        responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }); 
     // Related product
     $('.product-related-slide').slick({
        dots: false,
        autoplay: false,
        arrows:false,
        speed: 1500, 
        slidesToShow: 3,
        slidesToScroll: 1,     
        responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }); 
         /* Product Details 2 Images Slider */
    $('.product-details-images-2').each(function(){
        var $this = $(this);
        var $thumb = $this.siblings('.product-details-thumbs-2');
        $this.slick({
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            dots: false,
            infinite: true,
            centerMode: false,
            centerPadding: 0,
            asNavFor: $thumb,
        });
    });
    $('.product-details-thumbs-2').each(function(){
        var $this = $(this);
        var $details = $this.siblings('.product-details-images-2');
        $this.slick({
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            vertical:true,
            verticalSwiping:true,
            dots: false,
            infinite: true,
            focusOnSelect: true,
            centerMode: false,
            centerPadding: 0,
            prevArrow: false,
            nextArrow: false,
            asNavFor: $details,
            responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 4,
                vertical: false
              }
            },
            {
              breakpoint: 479,
              settings: {
                slidesToShow: 3,
                vertical: false
              }
            }
        ]
        });
    });
    // === Video ===
     $('.video-slider-wrap').slick({
        dots: false,
        autoplay: false,
        arrows:false,
        speed: 1500, 
        slidesToShow: 5,
        slidesToScroll: 1,     
        responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }); 
     // ===
     $('.watch-model-slide').slick({
        dots: false,
        autoplay: false,
        arrows:false,
        speed: 1500, 
        slidesToShow: 3,
        slidesToScroll: 1,     
        responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }); 
    //Aos Active js
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });

       $('.proone-nav > ul > li > a').click(function() {
            //Toggle Class
            $(".active").removeClass("active");
            $(this).closest('li').addClass("active");
            var theClass = $(this).attr("class");
            $('.' + theClass).parent('li').addClass('active');
            //Animate
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 100
            }, 1000);
            return false;
        });



	/* ==== 15. Preloader ==== */
	$(window).on('load',function(){
		jQuery(".preloader-wrap").fadeOut(500);
	});
	
})(jQuery); 
