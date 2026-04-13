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

        cube.style.transform = `rotateY(${idx * -90}deg)`;

        document.querySelector('.section.active').classList.remove('active');
        sections[idx].classList.add('active');

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

setTimeout(() => {
    sections[4].classList.remove('active');
}, 1500);

// ─── EMAILJS SETUP ─────────────────────────────────────────────
emailjs.init("X_qa6oPd6wvpph3-B"); // 🔑 Replace with your EmailJS Public Key

const contactForm = document.getElementById('contact-form');
const sendBtn = document.getElementById('send-btn');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Button loading state
    sendBtn.textContent = 'Sending...';
    sendBtn.disabled = true;
    formStatus.style.color = '';
    formStatus.textContent = '';

    const templateParams = {
        from_name:  document.getElementById('from_name').value,
        from_email: document.getElementById('from_email').value,
        phone:      document.getElementById('phone').value,
        subject:    document.getElementById('subject').value,
        message:    document.getElementById('message').value,
    };

    emailjs.send("service_tu1u6id", "template_i9u0479", templateParams)
        .then(() => {
            formStatus.style.color = '#4CAF50';
            formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
            contactForm.reset();
            sendBtn.textContent = 'Send Message';
            sendBtn.disabled = false;
        })
        .catch((error) => {
            formStatus.style.color = '#f44336';
            formStatus.textContent = 'Something went wrong. Please try again.';
            sendBtn.textContent = 'Send Message';
            sendBtn.disabled = false;
            console.error('EmailJS Error:', error);
        });
});