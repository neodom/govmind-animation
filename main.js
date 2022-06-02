import './style.css'

import lottie from "lottie-web";
import animationData from "./logo-animation.json";
  

$(document).ready(function() {
  const windowHeight = window.innerHeight;
  

  let scrollPos;
  
  const anim = lottie.loadAnimation({
    container: document.getElementById('ani'),
    renderer: 'canvas', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "Hello World", // Name for future reference. Optional.
    animationData
  })

  const maxFrames = anim.totalFrames;
  console.log(maxFrames);
  
  anim.playSegments([1,15], true);
  // setTimeout(()=>{
  // },1000)
  
  


  $(window).scroll(function(){
    scrollPos = $(document).scrollTop() / (windowHeight / maxFrames);
    console.log(scrollPos)
    
    if(scrollPos > 15 && scrollPos < maxFrames) {
      anim.goToAndStop(scrollPos, true);
    }
    
  });

  // function animatebodymovin(duration) {
  //   const scrollPosition = window.scrollY;
  //   const maxFrames = anim.totalFrames;
  
  //   const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
  //   cos
  //   anim.goToAndStop(frame, true);
  // }
 
});

