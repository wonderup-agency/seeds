import { sumHeightsOfElements } from '../utils'

const tabsComponent = document.querySelector('[data-component="tabs"]')

if (!!tabsComponent) {
  console.log('COMPONENT: TABS')

  const tabsButtons = tabsComponent.querySelectorAll('[data-tabs="button"]')

  //initial state
  collapseAccordion(tabsButtons)
  expandAccordion(tabsButtons[0])

  //add event listeners
  tabsButtons.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      const target = e.currentTarget
      const isActive = target.classList.contains('is-active')
      if (!isActive) {
        collapseAccordion(tabsButtons)
        expandAccordion(target)
      }
    })
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
