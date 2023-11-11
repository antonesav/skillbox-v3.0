document.addEventListener('DOMContentLoaded', () => {
  const DESKTOP_BREAKPOINT = 1024
  const MODIFICATOR_CLASS_NAME = 'product--row'
  const modifiedCards = [...document.querySelectorAll('.products-list--row .product')]

  const configureCards = () => {
    const screenWidth = window.innerWidth
    const isDesktop = screenWidth >= DESKTOP_BREAKPOINT

    modifiedCards.forEach((card) => {
      card.classList[isDesktop ? 'add' : 'remove'](MODIFICATOR_CLASS_NAME)
    })
  }

  configureCards()

  window.addEventListener('resize', configureCards)
})
