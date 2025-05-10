import Lenis from 'lenis'

console.log('COMPONENT: LENIS')

const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

lenis.stop()
$(document).ready(function () {
  lenis.start()
})
