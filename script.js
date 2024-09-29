$(document).ready(function(){

    //onClick Mini Projs
    $('#mini-projs-title').click(function(){
        $('#mini-projs').toggleClass('mini-projs-diplay-toggle');
    });
    $('#certificates').click(function(){
        $('#certi').toggleClass('mini-projs-diplay-toggle');
    });
    
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass('sticky')
        }else{
            $('.navbar').removeClass('sticky')
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('act');
        $('.menu-btn i').toggleClass('act');
    });
    // owl carousel script 
    $('.carousel').owlCarousel({
        margin:40,
        loop:true,
        autoplayTimeout:2000,
        autoplayHoverpause:true,
        responsive:{
            0:{items:1,nav:false},
            600:{items:2,nav:false},
            1000:{items:3,nav:false}  
        }
    });

    // scroll up btn
    // $('.scrollupbtn').click(function(){
    //     $('html').animate({scrollTop:0});
    // });
    $(".menu li a").click(function() {
        // Check if the parent <li> has neither the ID "mini-projs-title" nor "certificates"
        if ($(this).parent().attr('id') !== 'mini-projs-title' && $(this).parent().attr('id') !== 'certificates') {
            $('.navbar .menu').removeClass('act');
            $('.menu-btn i').removeClass('act');
        }
    });
    
    


});
