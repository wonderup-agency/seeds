import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reviews = document.querySelector('[data-component="reviews"]')

if (!!reviews) {
  console.log('COMPONENT: REVIEWS')

  const track = reviews.querySelector('[data-reviews="track"]')
  const overlay = reviews.querySelector('[data-reviews="overlay"]')

  let progressThreshold = window.innerWidth <= 767 ? 0.2 : 0.4
  window.addEventListener('resize', updateProgressThreshold)
  function updateProgressThreshold() {
    progressThreshold = window.innerWidth <= 767 ? 0.2 : 0.4
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: track,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
    },
    onUpdate: () => {
      const progress = tl.progress()
      if (progress >= 0 && progress <= progressThreshold) {
        gsap.to(overlay, { opacity: 0, duration: 2 })
      }
      if (progress > progressThreshold) {
        gsap.to(overlay, { opacity: 1, duration: 2 })
      }
      if (progress == 1) {
        gsap.to(overlay, { opacity: 0, duration: 2 })
      }
    },
  })
  tl.to({}, { duration: 2 })
}
