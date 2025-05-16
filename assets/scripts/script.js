window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.remove('transparent');
    nav.classList.add('solid');
  } else {
    nav.classList.add('transparent');
    nav.classList.remove('solid');
  }

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

function toggleMenu() {
  const navList = document.querySelector('nav ul');
  navList.classList.toggle('show');
}
