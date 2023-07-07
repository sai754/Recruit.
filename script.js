const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

const num = slides.length;
let slideno = 0;

next.onclick = () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slideno++;
  if (slideno > num - 1) {
    slideno = 0;
  }
  slides[slideno].classList.add('active');
};

prev.onclick = () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slideno--;
  if (slideno < 0) {
    slideno = num - 1;
  }
  slides[slideno].classList.add('active');
};
