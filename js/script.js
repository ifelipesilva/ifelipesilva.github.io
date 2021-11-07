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

function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll')

  if (sections.length) {
    const windowMe = window.innerHeight * 0.6

    function animateScroll() {
      sections.forEach(sections => {
        const sectionTop = sections.getBoundingClientRect().top
        const isSectionVisible = sectionTop - windowMe < 0
        if (isSectionVisible) {
          sections.classList.add('ativo')
        } else sections.classList.remove('ativo')
      })
    }

    animateScroll()
    window.addEventListener('scroll', animateScroll)
  }
}

initAnimationScroll()
