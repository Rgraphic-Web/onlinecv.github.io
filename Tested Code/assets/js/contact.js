/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail =(e) =>{
    e.preventDefault()
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_u03yiez','template_g5ztker','#contact-form','Edfl-zmd-tLo7UPJl')
    .then(() =>{
        contactMessage.textContent = 'Message Sent Successfully'
        setTimeout(() => {
            contactMessage.textContent = ''
        },5000)
        //rest
        contactForm.reset()
    },() => {
        //Erro
        contactMessage.textContent='Message not sent (service error)'
    })
}

contactForm.addEventListener('submit',sendEmail)