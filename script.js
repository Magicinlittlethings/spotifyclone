

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.to('.availablepositions',  {
    y:-2400,
    duration:30,
    repeat:-1,
    
    
   
})

const tl2 = gsap.timeline({
    scrollTrigger:{
        scrub:true,
        
      }
      
    }
)/*
tl2.to('.whoweare',{
    y:-1100,
    
        scrollTrigger:{
            trigger: ".whoweare",
            start:"top 60%",
            pin: '.second',
            scrub:true,
            pinSpacing: false,
            
            
          }
    }


) 

tl2.to('.wherewebelong',{
    y:-1400,
    
        scrollTrigger:{
            
            trigger: ".whoweare",
            start:"top -2%",
            pin: true,
            
            scrub:true,
            pinSpacing: false,
            
          }
    }
)

tl2.to('.howweact',{

    
    y:-2000,
    
        scrollTrigger:{
            
            trigger: ".howweact",
            start:"top -6%",
            scrub:true,
            pinSpacing: false,
            
          }
}
)

*/
tl2.to('.whoweare',{
   
    
        
    }


) 

tl2.to('.wherewebelong',{
   
    
        scrollTrigger:{
            
            trigger: ".wherewebelong",
            start:"top 100%",
            end:"bottom 24%",
            pin: ".whoweare",
            scrub:true,
            pinSpacing: false,
            
          }
    }
)


tl2.to('.howweact',{

    
    
    
        scrollTrigger:{
            
            trigger: ".howweact",
            start:"top 112%",
            end:"top 24%",
            
            pin:".wherewebelong",
            scrub:true,
            pinSpacing: false,
            
          }
}
)
const tl3 = gsap.timeline();

tl3.to('.bodyy',  {
  backgroundColor:'#2158a0',
  duration:1,
  scrollTrigger:{
     trigger:".third",   
     scrub:true,
     start:"top 35%"   ,
     end:"top -60%",
     toggleActions:"  play none reverse reset",
    
  }
  
    
    
   
})

tl3.to('.bodyy',  {
  backgroundColor:'#ffff',
  duration:1,
  scrollTrigger:{
     trigger:".here",   
     scrub:true,
     start:"top 35%"   ,
     end:"top ",
     toggleActions:"  play reset restart reset",
    
  }
  
    
  
  
   
})
tl3.to('.bodyy',  {
  backgroundColor:'#ffccd5',
  duration:1,
  scrollTrigger:{
     trigger:".fifth",   
     scrub:true,
     start:"top 35%"   ,
     end:"top -60%",
     toggleActions:"  play none reverse reset",
    
  }
 
    
    
   
})

tl3.to('.bodyy',  {
  backgroundColor:'#ffff',
  duration:1,
  scrollTrigger:{
     trigger:".sixth",   
     scrub:true,
     start:"top 35%"   ,
     end:"top ",
     toggleActions:"  play reset restart reset",
    
  }
  
    
  
  
   
})

tl3.to('.opp',  {
  backgroundColor:'#caf0f8',
  scrollTrigger:{
     trigger:".third",
     scrub:true,  
     start:"top 35%%"   ,
     end:"top -60%",
     toggleActions:"  play reset play reset",
    
  }

    
    
   
})
tl3.to('.opp',  {
  backgroundColor:'#caf0f8',
  scrollTrigger:{
     trigger:".here",
     scrub:true,  
     start:"top 35%"   ,
     end:"top",
     toggleActions:"  play reset play reset",
    
  }

    
    
   
})
tl3.to('.feat',  {
  color:'#ffff',
  scrollTrigger:{
     trigger:".third",   
     start:"top 35%"   ,
     end:"top -50%",
    
  }

    
    
   
})
tl3.to('.feat',  {
  color:'#000000',
  scrollTrigger:{
     trigger:".here",
     scrub:true,  
     start:"top 35%"   ,
     end:"top",
     toggleActions:"  play reset play reset",
    
  }

    
    
   
})




/*
tl.addEventListener('mouseover', () =>{
    tl.paused = "true"
    
})*/


   var swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        centeredSlides: false,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      var swiper = new Swiper(".swiperr", {
        slidesPerView: "auto",
        centeredSlides: false,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  
  
  
