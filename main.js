// =========================== SHOW MENU ==============================
const 
navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
// =========================== REMOVE MENU ==============================

const navLink = document.querySelectorAll('.nav-link')

const LinkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', LinkAction))

// =========================== ADD BLUR ==============================
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)

// =========================== SEND EMAIL ==============================

const contactForm = document.getElementById('form_contact'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_1rvw49d', 'template_qcdnrb5','#form_contact', '4oSf-IWVWcEC1bnWC')
     .then(() => {
        contactMessage.textContent = 'Message Sent successfully'
     }, () => {
        contactMessage.textContent = ' Message not sent (service error)'

     })

}
contactForm.addEventListener('submit', sendEmail)

// =========================== SCROLL UP ==============================
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll'):
                        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// =========================== SCROLL ACTIVE LINK ==============================
const sections =  document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// =========================== SCROLL REVEAL ANIMATION ==============================
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home-data, .home-social,contact-container,footer-container`)
sr.reveal(`.home-image`, {origin: 'bottom'})
sr.reveal(`.about-data, .skills-data`, {origin: 'left'})
sr.reveal(`.about-image, .skills-content` ,{origin: 'right'})
sr.reveal(`.service-card, .project-card `,{interval:100})