const customStyling = document.querySelectorAll('[data-custom-styling]')

if (!!customStyling) {
  console.log('COMPONENT: CUSTOM TEXT STYLING')

  customStyling.forEach((element) => {
    const classes = element.getAttribute('data-custom-styling').split(' ')
    const originalText = element.textContent
    const replacedText = originalText.replace(/\*([^*]+)\*/g, '<span>$1</span>')
    element.innerHTML = replacedText
    element.querySelectorAll('span').forEach((span) => {
      span.classList.add(...classes)
    })
  })
}
