export function sumHeightsOfElements(elements) {
  const heights = []
  elements.forEach((element) => {
    heights.push(element.offsetHeight)
  })
  return heights.reduce((a, b) => a + b, 0)
}
