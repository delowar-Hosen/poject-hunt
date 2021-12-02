$(function(){
    //banner slider

    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        fade:true,
        speed:2000,
        arrows:true,
        nextArrow:'<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
        prevArrow:'<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    })

    //service-slider
    $('.service-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        vertical:true,
        verticalSwiping:true,
        arrows:true,
        nextArrow:'<i class="fa fa-chevron-down down" aria-hidden="true"></i>',
        prevArrow:'<i class="fa fa-chevron-up up" aria-hidden="true"></i>',
        centerMode:true,
        centerPadding:0,
    })

    //feedback slider
    $('.feed-img-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow:'<i class="fa fa-chevron-down bottom" aria-hidden="true"></i>',
        prevArrow:'<i class="fa fa-chevron-up up top" aria-hidden="true"></i>',
        vertical:true,
        verticalSwiping:true,
        asNavFor: '.feed-content-slider',
        centerMode:true,
        centerPadding:0,
      });
      $('.feed-content-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        speed:1000,
        arrows:false,
        asNavFor: '.feed-img-slider',
        centerMode:true,
        centerPadding:0,
        
      });

      //.counter slider
      $('.counter').counterUp({
        delay: 10,
        time: 4000
    });

    //sponsor-slider
    $('.sponsor-main').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      centerMode:true,
      centerPadding:0,
  })
       
});