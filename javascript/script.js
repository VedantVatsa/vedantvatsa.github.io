let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const toggleIcon = document.querySelector('.toggle-icon');
toggleIcon.addEventListener('click',()=>{
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('light-mode');
})

window.onscroll=()=> {
    let sections = document.querySelectorAll('section') ;
    let navLinks = document.querySelectorAll('header nav a');
    sections.forEach((sec)=>{
        let top = window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute( 'id' ) ;
        if(top>=offset && top < offset + height) {
            navLinks.forEach((links)=>{
              links.classList.remove('active');
              document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        }
      });
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >100) ;

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text',{
    strings: ['Web Developer', 'Data Analyst', 'Android Developer', 'Cloud Practitioner'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
function showNotification(message, isError = false) {
    const notificationElement = document.getElementById("notification");
    notificationElement.textContent = message;
    notificationElement.classList.add(isError ? "error" : "success");

    setTimeout(() => {
        notificationElement.textContent = "";
        notificationElement.classList.remove("error", "success");
    }, 3000);
}

function sendEmail() {
    // ... existing code ...

    fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(emailData)
    })
    .then(response => {
        if (response.ok) {
            showNotification("Message sent successfully");
            resetForm();
        } else {
            showNotification("Message sending failed. Please try again later.", true);
        }
    })
    .catch(error => {
        console.error("Error sending email:", error);
        showNotification("Message sending failed. Please try again later.", true);
    });
}
