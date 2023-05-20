// const header = document.querySelector('.navbar');
// console.log(header)
// window.onscroll = function() {
//     const top = window.scrollY;
//     if(top >=100) {
//         header.classList.add('navbarblur');
//     }
//     else {
//         header.classList.remove('navbarblur');
//     }
// }

// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarSupportedContent')
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
// })

// active links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar #button a');
 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
 
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar #button a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
//     //reset: true // animation repeat

// })
// sr.reveal('#intro')