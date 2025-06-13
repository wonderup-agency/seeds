import Swiper from 'swiper/bundle'

const reviewsSlider = document.querySelector(
  '[data-component="reviews-slider"]'
)

if (!!reviewsSlider) {
  console.log('COMPONENT: REVIEWS SLIDER')

  const slider = reviewsSlider.querySelector('[data-reviews-slider="slider"]')
  const nextButton = reviewsSlider.querySelector('[data-reviews-slider="next"]')
  const prevButton = reviewsSlider.querySelector('[data-reviews-slider="prev"]')

  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  })
}
