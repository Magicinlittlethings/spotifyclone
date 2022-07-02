

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.to('.availablepositions',  {
    y:-2400,
    duration:30,
    repeat:-1,
    
    
   
})

const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".second",
        scrub:true,
        pin: '.first', 
        pinSpacing: false,
        
      }
      
    }
)
tl2.from('.whoweare',{
    height:80,
    scrollTrigger:{
        trigger: ".whoweare",
        scrub:true,
        start: "top 70%", 
        
        pin: '.wherewebelong', 
        pinSpacing: false,
        
      },
    
}
) 
tl2.from('.whoweare',{
    height:80,
    scrollTrigger:{
        trigger: ".whoweare",
        scrub:true,
        start: "top", 
        
        pin:'whoweare',
        pinSpacing: false,
        
      },
    
}
)


/*
tl.addEventListener('mouseover', () =>{
    tl.paused = "true"
    
})*/


  
  
  
  
