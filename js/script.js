// Burger menu
const menuBurger = document.querySelector('.header__burger')
const menuIcon = document.querySelector('.icon-menu')
const burgerLine = document.querySelector('.rw-1')
const burgerLine2 = document.querySelector('.rw-2')
const burgerLine3 = document.querySelector('.rw-3')
const body = document.querySelector('body')

if (menuBurger) {
   menuBurger.addEventListener('click', function (e) {
      menuBurger.classList.toggle('active')
      menuIcon.classList.toggle('active')
      burgerLine.classList.toggle('_opened')
      burgerLine2.classList.toggle('_opened')
      burgerLine3.classList.toggle('_opened')
      body.classList.toggle('_lock')
   })
}

// Spoiler Page
const spoiler = document.querySelector('.open__link')
const spoilerLink = document.querySelector('.spoiler__content')

if (spoiler) {
   spoiler.addEventListener('click', () => {
      spoilerLink.classList.toggle('push')
   })
}

// Spoiler Blog
const spoiler2 = document.querySelector('.link-2')
const spoilerLink2 = document.querySelector('.spoiler__content-2')

if (spoiler2) {
   spoiler2.addEventListener('click', () => {
      spoilerLink2.classList.toggle('push')
   })
}

// Spoiler mobile Page
const mobileTabs = document.querySelector('.open__link-burger_spoiler-mob')
const mobileTabsLink = document.querySelector('.spoiler__content-mob')

if (mobileTabs) {
   mobileTabs.addEventListener('click', () => {
      mobileTabsLink.classList.toggle('push')
   })
}

// Spoiler mobile Blog
const mobileTabs2 = document.querySelector('.burger_mob-open')
const mobileTabsLink2 = document.querySelector('.spoiler__content-mob_2')

if (mobileTabs2) {
   mobileTabs2.addEventListener('click', () => {
      mobileTabsLink2.classList.toggle('push')
   })
}
