/*------toggle icon navbar------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*------Scrolling and Activating Links------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*------Sticky navbar------*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', windowscrollY > 100);

/*------remove toggle icon and navbar when click navbar link (scroll)------*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


};


/*------Scroll reveal------*/
ScrollReveal({ 
    reset : true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*------Typed js------*/

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer!', 'Web Developer!', 'Software Developer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


/*****download resume****/
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'hmiri2/hadimiri/images/MiriHadi.pdf';
    link.download = 'MiriHadi.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


/**open facebook link* */
function openFacebookPage() {
    const facebookPageUrl = 'https://www.facebook.com/hadi.miri.735/';
    window.open(facebookPageUrl, '_blank');
}

function openInstaPage() {
    const instaPageUrl = 'https://www.instagram.com/hadi_miri2/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR0aLzxHhCncZl3TxEEH-oaj7pexXHZRAtf-7owJ4NukVfmMsZt0JwPasJo';
    window.open(instaPageUrl, '_blank');
}

function openLinkedInPage() {
    const linkedinPageUrl = 'https://www.linkedin.com/in/hadi-m-6ab89513b/';
    window.open(linkedinPageUrl, '_blank');
}

