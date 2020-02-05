var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    navigation: {
        nextEl: '.slider_button'
    },
    breakpoints: {
        500: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 20
          }
    }
})



function menu(){
    var btn = document.getElementById("menu");
    var burger = document.getElementById("burger");
    btn.onclick = function(){
        btn.classList.toggle('nav_burger_span_active');
        if( btn.classList.contains('nav_burger_span_active')){
          burger.style.display = "block";  
        }
        else
        {
            burger.style.display = "none";  
        }
        
    }
}