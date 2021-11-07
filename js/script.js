function initSuaveScroll() {
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"')

  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  internalLinks.forEach(item => {
    item.addEventListener('click', scrollToSection)
  })
}

initSuaveScroll()
