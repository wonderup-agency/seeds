import Rive from '@rive-app/canvas'
import { sumHeightsOfElements } from '../utils'

const tabsComponent = document.querySelector('[data-component="tabs"]')

if (!!tabsComponent) {
  console.log('COMPONENT: TABS')

  const tabsButtons = tabsComponent.querySelectorAll('[data-tabs="button"]')
  const mainCanvas = tabsComponent.querySelector('[data-tabs="main-canvas"]')

  //initial state
  collapseAccordion(tabsButtons)
  expandAccordion(tabsButtons[0])
  let mainRiv
  if (window.innerWidth > 991) {
    mainRiv = new Rive.Rive({
      src: tabsButtons[0].dataset.riv,
      canvas: mainCanvas,
      autoplay: true,
      artboard: 'Main',
      StateMachine: 'State Machine 1',
      onload: () => {
        mainRiv.resizeDrawingSurfaceToCanvas()
      },
      onStop: (e) => {
        mainRiv.play('State Machine 1')
      },
    })
  }

  //add event listeners
  tabsButtons.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      const target = e.currentTarget
      const isActive = target.classList.contains('is-active')
      if (!isActive) {
        collapseAccordion(tabsButtons)
        expandAccordion(target)
        if (window.innerWidth > 991) {
          mainRiv.load({
            src: target.dataset.riv,
            artboard: 'Main',
            StateMachine: 'State Machine',
            autoplay: true,
          })
        }
      }
    })
    if (window.innerWidth <= 991) {
      let riv = new Rive.Rive({
        src: tab.dataset.riv,
        canvas: tab.querySelector('canvas'),
        autoplay: true,
        artboard: 'Main',
        StateMachine: 'State Machine 1',
        onload: () => {
          riv.resizeDrawingSurfaceToCanvas()
        },
        onStop: (e) => {
          riv.play('State Machine')
          riv.play('State Machine 1')
        },
      })
    }
  })
}

function expandAccordion(tab) {
  tab.classList.add('is-active')
  const accordion = tab.querySelector('[data-tabs="accordion"]')
  accordion.style.height = sumHeightsOfElements(accordion.childNodes) + 'px'

  const parent = tab.parentElement
  const tabs = parent.childNodes
  tabs.forEach((tab) => {
    tab.style.borderBottomRightRadius = '0rem'
    tab.style.borderTopRightRadius = '0rem'
  })
  const previousSibling = tab.previousElementSibling
  const nextSibling = tab.nextElementSibling
  if (previousSibling) {
    previousSibling.style.borderBottomRightRadius = '1rem'
  }
  if (nextSibling) {
    nextSibling.style.borderTopRightRadius = '1rem'
  }
}

function collapseAccordion(tabs) {
  tabs.forEach((tab) => {
    tab.classList.remove('is-active')
    const accordion = tab.querySelector('[data-tabs="accordion"]')
    accordion.style.height = '0rem'
  })
}
