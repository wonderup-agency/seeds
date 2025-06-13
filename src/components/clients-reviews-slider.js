import Swiper from 'swiper/bundle'

const reviewsSlider = document.querySelector(
  '[data-component="client-reviews-slider"]'
)

if (!!reviewsSlider) {
  console.log('COMPONENT: REVIEWS SLIDER')

  const slider = reviewsSlider.querySelector(
    '[data-client-reviews-slider="slider"]'
  )
  const nextButton = reviewsSlider.querySelector(
    '[data-client-reviews-slider="next"]'
  )
  const prevButton = reviewsSlider.querySelector(
    '[data-client-reviews-slider="prev"]'
  )

  const swiper = new Swiper(slider, {
    breakpoints: {
      991: {
        slidesPerView: 3,
      },
    },
    slidesPerView: 1,
    spaceBetween: 32,
    loop: false,
    autoHeight: false,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  })
}
