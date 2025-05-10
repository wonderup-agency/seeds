const faqs = document.querySelector("[data-component='faqs']")

if (!!faqs) {
  console.log('COMPONENT: FAQS')

  const list = faqs.querySelector("[data-faqs='list']")
  let items = list.querySelectorAll("[data-faqs='item']")

  items.forEach((item) => {
    item.classList.remove('is-active')
    item.setAttribute('tabindex', '1')
  })

  let isDesktop = window.innerWidth >= 991

  // Initialize the correct layout based on the device
  if (isDesktop) {
    switchToDesktop()
  } else {
    switchToMobile()
  }
  // Listen for window resize events to switch layouts dynamically
  window.addEventListener('resize', () => {
    const shouldSwitchToDesktop = window.innerWidth >= 991
    if (shouldSwitchToDesktop !== isDesktop) {
      isDesktop = shouldSwitchToDesktop
      if (isDesktop) {
        switchToDesktop()
      } else {
        switchToMobile()
      }
    }
  })

  // Add click event listeners to each FAQ item
  items.forEach((item) => {
    item.addEventListener('click', clickHandler)
  })

  // Handles click events on FAQ items (accordion behavior)
  function clickHandler(e) {
    const item = e.currentTarget
    const accordion = item.querySelector("[data-faqs='accordion']")
    if (item.classList.contains('is-active')) {
      // Collapse the item if it's already open
      item.classList.remove('is-active')
      accordion.style.height = '0rem'
    } else {
      // Expand the item and set its height
      item.classList.add('is-active')
      accordion.style.height = `${sumHeightsOfElements(accordion.childNodes) + 1}px`
    }
  }

  // Switches the FAQ layout to desktop mode (splits into two columns)
  function switchToDesktop() {
    list.style.display = 'flex'
    list.style.flexDirection = 'column'
    // Clone the list to create a second column
    const dupedList = list.cloneNode(true)
    dupedList.setAttribute('data-faqs', 'duped-list')
    faqs.appendChild(dupedList)
    // Move half of the items to the cloned list
    const half = Math.ceil(items.length / 2)
    for (let i = half; i < items.length; i++) {
      items[i].remove()
    }
    for (let i = 0; i < half; i++) {
      dupedList.children[0].remove()
    }
    // Update the items NodeList and re-attach event listeners
    items = faqs.querySelectorAll("[data-faqs='item']")
    items.forEach((item) => {
      item.removeEventListener('click', clickHandler)
      item.addEventListener('click', clickHandler)
    })
  }

  // Switches the FAQ layout to mobile mode (single column)
  function switchToMobile() {
    list.style.display = 'grid'
    list.style.flexDirection = 'row'
    // Move all items from the duplicated list back to the main list
    const dupedList = faqs.querySelector("[data-faqs='duped-list']")
    if (!!dupedList) {
      const childrenCount = dupedList.children.length
      for (let i = 0; i < childrenCount; i++) {
        list.appendChild(dupedList.children[0])
      }
      dupedList.remove()
    }

    // Update the items NodeList and re-attach event listeners
    items = faqs.querySelectorAll("[data-faqs='item']")
    items.forEach((item) => {
      item.removeEventListener('click', clickHandler)
      item.addEventListener('click', clickHandler)
    })
  }

  function sumHeightsOfElements(elements) {
    const heights = []
    elements.forEach((element) => {
      heights.push(element.offsetHeight)
    })
    return heights.reduce((a, b) => a + b, 0)
  }
}
