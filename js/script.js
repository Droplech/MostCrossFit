$(document).ready(function(){
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
            $('.select, .icon').removeClass('active-icon')
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
            $('.select, .icon').addClass('active-icon')
        }
    });
    
    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });
    
    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });


    $('.tabs_link').click(function(e){
        e.preventDefault()
        $('.tabs_link').removeClass('link-active')
        $(this).addClass('link-active')
    })


    new Swiper('.galery_slider_wrapper',{
        navigation: {
            nextEl: '#galery_next',
            prevEl: '#galery_prev',
        },
    })



    $('.tabs_content').fadeOut()

    $('.tabs_link').click(function(e){
        e.preventDefault()
        $('.tabs_link').removeClass('link-active')
        $(this).addClass('link-active')
        $('.tabs_content').removeClass('tabs_content-active')
        $( $(this).attr('data-tab') ).addClass('tabs_content-active')
        
    })

    new Swiper('.galery_slider_wrapper',{
        navigation: {
            nextEl: '#galery_next',
            prevEl: '#galery_prev',
        },
    })

    new Swiper('.galery_slider_wrapper_mob',{
        navigation: {
            nextEl: '#galery_next',
            prevEl: '#galery_prev',
        },
        slidesPerView: 1,
    })



    new Swiper('.treners_slider_wrapper',{
        navigation: {
            nextEl: "#treners_next",
            prevEl: "#treners_prev",
        },
        slidesPerView: 1.1,
        centeredSlides: true,
        spaceBetween: 150,
        breakpoints:{
            600:{
                slidesPerView: 1.5
            },
            1024:{
                spaceBetween: 150,
            },
            1280:{
                slidesPerView: 1.5,
                spaceBetween: 150,
            },
            1366:{
                slidesPerView: 1.5,
                spaceBetween: 200,
            },
            1440:{
                slidesPerView: 1.3,
                spaceBetween: 150,
            },
            1680:{
                slidesPerView: 1.3,
                spaceBetween: 30,
            },
            1800:{
                slidesPerView: 1.5,
            }
            
        }
        
    })

    
    new Swiper('.reviews_slider_wrapper',{
        navigation: {
            nextEl: "#reviews_next",
            prevEl: "#reviews_prev",
        },
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 10,
        breakpoints:{
            1024:{
                slidesPerView: 1.2,
            },
            1680:{
                slidesPerView: 1.6,
            }
        }
    })

    new Swiper('.reviews_slider_wrapper_mob',{
        navigation: {
            nextEl: "#reviews_next",
            prevEl: "#reviews_prev",
        },
        slidesPerView: 1.1,
        centeredSlides: true,
        spaceBetween: 20,
      
    })






    $('.burger_btn').click(function(){
        $('.burger_menu').fadeIn()
    })

    $('.btn_close_menu').click(function(){
        $('.burger_menu').fadeOut()
    })



    $('.btn_showForm').click(function(e){
        e.preventDefault()
        $('.form_request_mobile').fadeIn()
        $('.modal_window_bg').fadeIn()
        
    })
    $('.close_form').click(function(){
        $('.form_request_mobile').fadeOut()
        $('.modal_window_bg').fadeOut()
        $('.directions_modal').fadeOut()
    })
    $('.btn_closeForm').click(function(){
        $('.form_request_mobile').fadeOut()
        $('.modal_window_bg').fadeOut()
        $('.directions_modal').fadeOut()
    })
    $('.modal_window_bg').click(function(){
        $('.form_request_mobile').fadeOut()
        $('.directions_modal').fadeOut()
        $('.modal_window_bg').fadeOut()
        
    })

    $('.directions_item').click(function(){
        $('.modal_window_bg').fadeIn()
        $('.directions_modal').fadeIn()
        $('.directions_item').removeClass('directions_item-active')
        $(this).addClass('directions_item-active')
        $('.modal_content').removeClass('modal_content-active')
        $( $(this).attr('data-tab') ).addClass('modal_content-active')
    })


    $('.directions_modal .btn').click(function(){
        $('.directions_modal').fadeOut()
        $('.form_request_mobile').fadeOut()
        $('.modal_window_bg').fadeOut()
        
    })

    $('.directions_modal .btn_modal_mobil').click(function(){
        $('.directions_modal').fadeOut()
        $('.form_request_mobile').fadeIn()
        $('.modal_window_bg').fadeIn()
        
    })







    
  
    


    $('.burger_menu ul li a').click(function(){
        $('.burger_menu').fadeOut()
    })




   


    $('.check_perens').click(function(){
        $('.check_perens').removeClass('label-active')
        $(this).addClass('label-active')
    })

    $('.send_phone').click(function(){
        $('.select').fadeIn()
    })
    $('.send_whatsapp').click(function(){
        $('.select').fadeOut()
    })
 
})























// -----------------Для двух форм-------------------------------------





$('.treners_item .form_trener').click(function(e){
    e.preventDefault()
    $('.modal_appointment_coach').fadeIn()
    $('.modal_window_bg').fadeIn()
})
$('.modal_window_bg').click(function(){
    $('.modal_appointment_coach').fadeOut()
})
$('.modal_appointment_coach .close_form').click(function(){
    $('.modal_appointment_coach').fadeOut()
    $('.modal_window_bg').fadeOut()
})


$('.modal_appointment_coach button').click(function(e){
    e.preventDefault()
    $('.modal_appointment_coach').fadeOut()
    $('.modal_window_bg').fadeOut()
})




$('.price_item .modal_price').click(function(e){
    e.preventDefault()
    $('.modal_buy_price').fadeIn()
    $('.modal_window_bg').fadeIn()
})
$('.modal_window_bg').click(function(){
    $('.modal_buy_price').fadeOut()
})
$('.modal_buy_price .close_form').click(function(){
    $('.modal_buy_price').fadeOut()
    $('.modal_window_bg').fadeOut()
})

$('.modal_buy_price button').click(function(e){
    e.preventDefault()
    $('.modal_buy_price').fadeOut()
    $('.modal_window_bg').fadeOut()
})


// -----------------Для двух форм-------------------------------------