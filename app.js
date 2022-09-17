$('.owl-one').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    dots: true,
    stagePadding: 10,
    responsiveBaseElement: 'body',
    animateOut: 'fadeOut',
    nav:true,
    responsive: {
        0: {
            items: 1,
           
            
        },
        770: {
            items: 2,
            
        },
        1000: {
            items: 3,
            center:false
        }
    }
})
$(document).keydown( function(eventObject) {
if(eventObject.which==37) {//left arrow
         $('.owl-prev').click();//emulates click on prev button
} 
else if(eventObject.which==39) {//right arrow
         $('.owl-next').click();//emulates click on next button
     }
} );



$('.owl-two').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    dots: false,
    center:true,
    stagePadding: 10,
    responsiveBaseElement: 'body',
    animateOut: 'fadeOut',
    nav:true,
    responsive: {
        0: {
            items: 1,
            
        },
        770: {
            items: 2,
            
        },
        1200: {
            items: 3
        }
    }
})
$(document).keydown( function(eventObject) {
if(eventObject.which==37) {//left arrow
         $('.owl-prev').click();//emulates click on prev button
} 
else if(eventObject.which==39) {//right arrow
         $('.owl-next').click();//emulates click on next button
     }
} );

$('.owl-carousel').find('.owl-nav').removeClass('disabled');
$('.owl-carousel').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-nav').removeClass('disabled');
});

$('.owl-carousel').find('.owl-dots').removeClass('disabled');
$('.owl-carousel').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-dots').removeClass('disabled');
});