gsap.to(".page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true
    }
})

// ----------------------loader --------------------
var t1 = gsap.timeline();


function time(){
    var a =0;
    setInterval(function(){
        a= a + Math.floor( Math.random()*15);
            if(a<100){
                document.querySelector(".loader h1").innerHTML=a+"%";
            }else{
                a=100;
                document.querySelector(".loader h1").innerHTML=a+"%";
            }
        console.log(a);
    },150)
}


t1.to(".loader h1",{
    delay:0.5,
    duration:1,
    onStart:time()
});
t1.to(".loader",{
    top:"-100vh",
    delay:0.5,
    duration:2,

});

// ----------------------------------------
Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{videos:["./0.mp4", "./1.mp4"]});

gsap.to(".f-card",{
    scrollTrigger:{
        trigger:".featuredimages",
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1,
        pin:true
    },
    y:"-300%",
    ease:Power1
});



let sections = document.querySelectorAll(".f-card");

Shery.imageEffect(".images", {
    style: 4,
    config:{onMouse :{value:1}},
    slideStyle: (setScroll) => {
        sections.forEach(function(section,index){
            ScrollTrigger.create({
                trigger:section,
                start:"top top",
                scrub:1,
                onUpdate:function(prog){
                    setScroll(prog.progress+index);
                },
            });
        });
    },
  });