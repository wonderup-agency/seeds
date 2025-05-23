const relatedPosts = document.querySelector('[data-component="related-posts"]')

if (!!relatedPosts) {
  console.log('COMPONENT: RELATED POSTS')

  const relatedDefault = relatedPosts.querySelector(
    '[data-related-posts="default"]'
  )
  const relatedFallback = relatedPosts.querySelector(
    '[data-related-posts="fallback"]'
  )

  if (relatedDefault.firstElementChild.classList.contains('w-dyn-empty')) {
    relatedDefault.remove()
    const relatedBlogs = relatedFallback.querySelectorAll('[role="listitem"]')
    const currentCategory = relatedFallback.getAttribute(
      'data-current-category'
    )

    // Remove blog items that do not match the current category
    relatedBlogs.forEach((blog) => {
      const blogCategory = blog.getAttribute('data-category')
      if (blogCategory != currentCategory) {
        blog.remove()
      }
    })
    // After filtering, only keep the first three blog items
    const remainingBlogs = relatedFallback.querySelectorAll('[role="listitem"]')
    remainingBlogs.forEach((blog, index) => {
      if (index > 2) {
        blog.remove()
      }
    })
  } else {
    // If the default related posts list is not empty, remove the fallback container
    relatedFallback.remove()
  }
}
