const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');
const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');
const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');

navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active');

        // Rotate cube
        cube.style.transform = `rotateY(${idx * -90}deg)`;

        // Change active section
        document.querySelector('.section.active').classList.remove('active');
        sections[idx].classList.add('active');

        // Handle section 4 (contact section) activation
        const array = Array.from(sections);
        const arrsecs = array.slice(1, -1);
        arrsecs.forEach(arrsec => {
            if (arrsec.classList.contains('active')) {
                sections[4].classList.add('action-contact');
            }
        });

        if (sections[0].classList.contains('active')) {
            sections[4].classList.add('action-contact');
        }
    });
});


function toggleReadMore() {
    const moreText = document.getElementById("moreText");
    const btn = document.getElementById("readMoreBtn");
  
    if (moreText.classList.contains("hidden")) {
      moreText.classList.remove("hidden");
      moreText.classList.add("show");
      btn.textContent = "Read Less";
    } else {
      moreText.classList.add("hidden");
      moreText.classList.remove("show");
      btn.textContent = "Read More";
    }
  }
  
  
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[idx].classList.add('active');
    });
});

portfolioLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.portfolio-box.active').classList.remove('active');
        portfolioBoxs[idx].classList.add('active');
    });
});

// Delay for contact section deactivation
setTimeout(() => {
    sections[4].classList.remove('active');
}, 1500);
