import gsap from "gsap";

const component = document.querySelector("[data-component='steps-rive']")

if (!!component) {
  console.log('COMPONENT: STEPS RIVE')
  
  const rows = component.querySelectorAll("[data-steps-rive='row']")
  const triggers = component.querySelectorAll("[data-steps-rive='trigger']")

  rows.forEach(row => {
    const index = row.dataset.index;
    gsap.timeline({
      scrollTrigger: {
        trigger: row,
        start: "top 75%",
        end: "top 75%",
        onEnter: () => {
          triggers[index].click()
        },
        onEnterBack: () => {
          triggers[index-1].click()
        }
      }
    })
  })
}
