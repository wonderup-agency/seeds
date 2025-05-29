const skillsTabs = document.querySelector('[data-component="skills-tabs"]')

if (!!skillsTabs) {
  console.log('COMPONENT: SKILLS TABS')

  const tabsButtons = document.querySelectorAll('[data-tabs-button]')
  const skillsSource = skillsTabs.querySelector('[data-skills-source]')
  const skills = skillsTabs.querySelectorAll('[data-skill]')
  const skillsContainers = skillsTabs.querySelectorAll(
    '[data-skills-container]'
  )
  const skillsCategoriesElement = skillsTabs.querySelectorAll(
    '[data-skill-category-element]'
  )
  const categoriesName = skillsTabs.querySelectorAll('[data-category-name]')
  categoriesName.forEach((category) => {
    category.textContent = category.textContent + ':'
  })

  // hide all skills categories elements on load
  skillsCategoriesElement.forEach((category) => {
    category.classList.add('hide')
  })

  // add is-active class to the clicked tab
  tabsButtons.forEach((tab) => {
    tab.addEventListener('click', () => {
      deselectAllTabs()
      tab.classList.add('is-active')

      // Show/hide skill categories based on data-talent match
      const tabTalent = tab.dataset.talent
      skillsCategoriesElement.forEach((category) => {
        if (category.dataset.talent === tabTalent) {
          category.classList.remove('hide')
        } else {
          category.classList.add('hide')
        }
      })
    })
  })
  tabsButtons[0].click()

  // Append each skill to its corresponding container by matching data-skill-category
  skills.forEach((skill) => {
    const skillCategory = skill.dataset.skillCategory
    skillsContainers.forEach((container) => {
      if (container.dataset.skillCategory === skillCategory) {
        container.appendChild(skill)
      }
    })
  })
  skillsSource.remove()

  function deselectAllTabs() {
    tabsButtons.forEach((tab) => {
      tab.classList.remove('is-active')
    })
  }
}
