let crsr = document.querySelector(".cursor");
let crsr1 = document.querySelector(".cursor-blur");
document.addEventListener('mousemove',function(dets){
    crsr.style.left = dets.x + 'px';
    crsr.style.top = dets.y + 'px';
    crsr.style.transition = 'all linear 0.1s';
    crsr1.style.left = dets.x -100 + 'px';
    crsr1.style.top = dets.y - 100 + 'px'
    crsr1.style.transition = 'all linear 0.3s'
})

let navall = document.querySelectorAll(".nav h4");
navall.forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
        crsr.style.scale = 3.1;
        crsr.style.backgroundColor= 'transparent';
        crsr.style.border= '1px solid #fff'
    })
    elem.addEventListener('mouseleave',function(){
        crsr.style.scale = 1;
        crsr.style.backgroundColor= '0px solid #A7DE24';
        crsr.style.border = '#A7DE24'
    })
})













gsap.to(".nav",{
    backgroundColor:"#000",
    duration:1,
    height:"120px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start:"top -5%",
        end:"top -0%",
        scrub:1

    }
})

gsap.to(".main",{
    backgroundColor:"#000",
    duration:2,
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:3
    }
})


gsap.from(".about-us img, .about-us-in",{
    y:90,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        start:"top 55%",
        end:"top 50%",
        scrub:4
    }
})

gsap.from('.card',{
    scale:0.9,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:1

    }
})


gsap.from('#colon1',{
    x:-70,
    y:-70,
    opacity:0,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }

})
gsap.from('#colon2',{
    x:70,
    y:70,
    opacity:0,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }

})

gsap.from(' .page4 h1',{
    y:30,
    scrollTrigger:{
        trigger:'.page4 h1',
        scroller:'body',
        start:'top 75%',
        end:'top 70%',
        scrub:3

    }
})