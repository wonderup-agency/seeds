import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = document.querySelector("[data-component='stats']")

if (!!stats) {
  console.log('COMPONENT: STATS')

  const items = stats.querySelectorAll('[data-stats="item"]')

  items.forEach((item, index) => {
    const value = item.querySelector('[data-stats="value"]')
    const duration = 1 + index * 1.25
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top bottom-=50',
      },
    })
    tl.from(value, {
      textContent: 1,
      snap: { textContent: 1 },
      duration: duration,
      ease: 'power2.out',
    })
  })
}
