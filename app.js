let btn = document.querySelector('.btn')
let navbar = document.querySelector('.nav-bar')
let header = document.querySelector('.header')
let autherLinks =  document.querySelectorAll('.auther-links')
let link =  document.querySelectorAll('.link')
let linkImage =document.querySelectorAll('.link-image')
let menuOpen=false;


btn.addEventListener('click',function(){

    if(!menuOpen){
        this.classList.add('open')
        navbar.classList.add('display')
        menuOpen=true;

    }else{
        this.classList.remove('open')
        navbar.classList.remove('display')

        menuOpen=false;
    }
    
    
})


        
    // $('.link-image').click(function(){

    //     $('.link-image').removeClass('active')
    //     $(this).addClass('active')
    // })


    let image = document.querySelectorAll('.link-image')

        image.forEach(element => {

            element.addEventListener('click', function(){
                let imageactive= document.querySelector('.first-section .active')
                imageactive.classList.remove('active')
                this.classList.add('active')

            
                });
             })

             var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
              });
    
    // for (let i = 0; i < image.length; i++) {
    //     const element = image[i];

    

     
        
    