const caseStudiesComponent = document.querySelector(
  '[data-component="case-studies-list"]'
)

if (!!caseStudiesComponent) {
  console.log('COMPONENT: CASE STUDIES LIST')

  const caseStudies = Array.from(
    caseStudiesComponent.querySelectorAll('[data-case-study="item"]')
  )
  const loadMoreButtonWrapper = caseStudiesComponent.querySelector(
    '[data-case-studies="button-wrapper"]'
  )
  const loadMoreButton = loadMoreButtonWrapper.firstChild
  const VISIBLE_COUNT = 5
  let visibleCount = VISIBLE_COUNT

  caseStudies.forEach((caseStudy, idx) => {
    if (idx >= VISIBLE_COUNT) {
      caseStudy.classList.add('hide')
      caseStudy.setAttribute('aria-hidden', 'true')
    }
  })

  loadMoreButton.addEventListener('click', () => {
    const nextVisible = visibleCount + VISIBLE_COUNT
    caseStudies.slice(visibleCount, nextVisible).forEach((caseStudy) => {
      caseStudy.classList.remove('hide')
      caseStudy.removeAttribute('aria-hidden')
    })
    visibleCount = nextVisible
    if (visibleCount >= caseStudies.length) {
      loadMoreButtonWrapper.remove()
    }
  })

  caseStudies.forEach((caseStudy) => {
    const link = caseStudy.querySelector('a')
    const prefix = 'casos-de-estudio/'
    if (link.hasAttribute('href')) {
      const href = link.getAttribute('href')
      link.setAttribute('href', `${prefix}${href}`)
    }
  })
}
