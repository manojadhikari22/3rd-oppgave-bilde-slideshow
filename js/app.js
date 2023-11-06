const slides = document.querySelectorAll('.slide');
const ovals = document.querySelectorAll('.oval');
const prevButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  
    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = 0; i < ovals.length; i++) {
        ovals[i].className = ovals[i].className.replace(' active', '');
    }

    slides[slideIndex].style.display = 'block';
    ovals[slideIndex].className += ' active';
};

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

prevButton.addEventListener('click', () => {
    plusSlides(-1);
});

nextButton.addEventListener('click', () => {
    plusSlides(1);
});

ovals.forEach((oval, index) => {
    oval.addEventListener('click', () => {
        currentSlide(index);
    });
});

// Auto-advance the slides every 2 seconds
setInterval(() => {
    plusSlides(1);
}, 4000);
