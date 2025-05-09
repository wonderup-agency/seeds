import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText) 
gsap.registerPlugin(ScrollTrigger)

const stickyText = document.querySelector("[data-component='sticky-text']");

if (!!stickyText) {
  console.log("COMPONENT: STICKY-TEXT");
  const track = stickyText.querySelector("[data-sticky-text='track']");
  const text = stickyText.querySelector("[data-sticky-text='text']");

  let split = SplitText.create(text, {
    type: "chars",
    tag: "span",
    smartWrap: true
  });

  split.chars.forEach((char) => {
    char.style.webkitTextFillColor = 'var(--base-color--mint)';
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: track,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    }
  });
  tl.to(split.chars, {
    duration: 2,
    ease: "power1.out",
    stagger: {
      each: 0.1,
      onStart: function() {
        this.targets()[0].style.webkitTextFillColor = 'transparent';
      },
      onReverseComplete: function() {
        this.targets()[0].style.webkitTextFillColor = 'var(--base-color--mint)';
      }
    },
  });
}
