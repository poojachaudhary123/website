AOS.init();







$('.attorneys-slider').owlCarousel({
    loop:true,
    margin:15,
    
    nav:false,
   dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.latest-news-slider').owlCarousel({
    loop:true,
    margin:15,
    autoplay:true,
    nav:true,
   dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})


