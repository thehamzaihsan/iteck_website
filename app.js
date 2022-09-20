$('.owl-one').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    dots: true,
    center:false,
    stagePadding: 10,
    responsiveBaseElement: 'body',
    animateOut: 'fadeOut',
    nav:true,
    responsive: {
        0: {
            items: 1,
            center:true,
            margin:30,
            
        },
        770: {
            items: 2,
            
        },
        1000: {
            items: 3,

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
    margin: 10,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    dots: false,
    center:false,
    stagePadding: 10,
    responsiveBaseElement: 'body',
    animateOut: 'fadeOut',
    nav:true,
    responsive: {
        0: {
            items: 1,
            center:true,
            margin:20,
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




function Openpopup(){
    document.getElementById("popup").style.display = "block";
    document.getElementById("loading-bg").style.display = "block";
    document.getElementsByTagName('body')[0].style.overflowY = "hidden";
}

function Closepopup(){
    document.getElementById("popup").style.display = "none";
    document.getElementById("loading-bg").style.display = "none";
    document.getElementsByTagName('body')[0].style.overflowY = "visible";
}