import gsap from "gsap"

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    }
  })
}


export const animateWithGsapTimeline=(timeline,rotationRef,rotateState,firstTarget,secoundTarget,animationProps)=>{
    timeline.to(rotationRef.current.rotation,{
        y:rotateState,
        duration:1,
        ease:'power2.inOut'
    })
    timeline.to(firstTarget,{
        ...animationProps,
        ease:'power2.inOut'
    },
    '<')
    timeline.to(secoundTarget,{
        ...animationProps,
        ease:'power2.inOut'
    },
    '<')
}