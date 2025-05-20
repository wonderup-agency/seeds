const press = document.querySelector('[data-component="press"]')

if (!!press) {
  console.log('COMPONENT: PRESS')

  const pressItems = press.querySelectorAll('[data-press="item"]')
  const seeAllWrapper = press.querySelector('[data-press="see-all-wrapper"]')
  const seeAllButton = seeAllWrapper.firstChild
  const itemsPerPage = 3

  pressItems.forEach((item, index) => {
    if (index >= itemsPerPage) {
      item.style.display = 'none'
      item.setAttribute('aria-hidden', 'true')
      item.setAttribute('tabindex', '-1')
    } else {
      item.style.display = ''
      item.setAttribute('aria-hidden', 'false')
      item.removeAttribute('tabindex')
    }
  })

  seeAllButton.addEventListener('click', () => {
    pressItems.forEach((item) => {
      item.style.display = ''
      item.setAttribute('aria-hidden', 'false')
      item.removeAttribute('tabindex')
    })
    seeAllWrapper.style.display = 'none'
  })
}
