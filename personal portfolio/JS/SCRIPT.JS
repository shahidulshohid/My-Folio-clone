var typed = new Typed('.type_text', {
    strings: ["Shahidul Islam", "Shahid"],
    typeSpeed: 40,
    backSpeed:50,
    loop:true,
  });



    // type js effect
  



    $(function(){
      let menuTop=$('.just_background').offset().top;
      //scroll effect
      $(window).on('scroll',function(){
          let scrollToTop=$(window).scrollTop();
          
          //menu js
          if(scrollToTop > menuTop){
              $('.just_background').addClass('menu_fix');
          }else{
              $('.just_background').removeClass('menu_fix');
          }
  
          //back to top effect
         if(scrollToTop > 500){
          $('.back_top').fadeIn(1000);
         }else{
          $('.back_top').fadeOut(1000);
         }
  
      })
      // back top effect
    //  $('.back_top').on('click',function(){
    //   $('html,body').animate({
    //       scrollTop:0
    //   },800);
    //  })
  
  
  
  
  })

$(function(){
    let menuTop=$('.customNav').offset().top;
    //scroll effect
    $(window).on('scroll',function(){
        let scrollToTop=$(window).scrollTop();
        
        //menu js
        if(scrollToTop > menuTop){
            $('.customNav').addClass('menu_fix');
        }else{
            $('.customNav').removeClass('menu_fix');
        }

        //back to top effect
       if(scrollToTop > 500){
        $('.back_top').fadeIn(1000);
       }else{
        $('.back_top').fadeOut(1000);
       }

    })




})