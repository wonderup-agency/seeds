import gsap from 'gsap'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Flip)

const navbar = document.querySelector("[data-component='navbar']")

if (!!navbar) {
  console.log('COMPONENT: NAVBAR')

  const navbarWrapper = navbar.querySelector('[data-navbar="wrapper"]')
  const logo = navbar.querySelector('[data-navbar="logo"]')
  const menu = navbar.querySelector('[data-navbar="menu"]')

  if (window.scrollY > 24 && window.innerWidth > 992) {
    shrinkNavbar()
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 24 && window.innerWidth > 992) {
      shrinkNavbar()
    }
    if (window.scrollY < 24 && window.innerWidth > 992) {
      expandNavbar()
    }
  })

  function shrinkNavbar() {
    const state = Flip.getState([navbarWrapper, logo, menu], {
      props: 'boxShadow',
    })
    navbar.classList.add('is-shrinked')
    execFlip(state)
  }

  function expandNavbar() {
    const state = Flip.getState([navbarWrapper, logo, menu], {
      props: 'boxShadow',
    })
    navbar.classList.remove('is-shrinked')
    execFlip(state)
  }

  function execFlip(state) {
    Flip.from(state, {
      duration: 1,
      ease: 'power2.inOut',
      absolute: true,
      nested: true,
    })
  }
}
