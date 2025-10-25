// Carrusel automático + botones
let slideIndex = 0;
const slides = document.querySelectorAll(".carrusel .slide");
const prev = document.querySelector(".carrusel .prev");
const next = document.querySelector(".carrusel .next");

function mostrarSlide(n) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[n].classList.add("active");
}

function siguienteSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  mostrarSlide(slideIndex);
}

function anteriorSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  mostrarSlide(slideIndex);
}

// Botones
next.addEventListener("click", siguienteSlide);
prev.addEventListener("click", anteriorSlide);

// Auto-play cada 5s
setInterval(siguienteSlide, 5000);

// Inicia mostrando el primer slide
mostrarSlide(slideIndex);
// --- Botón de eliminar individual ---
const delBtn = document.createElement('div');
delBtn.innerHTML = '✖';
delBtn.classList.add('delete-btn');
delBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  el.remove();
  selected = null;
  document.getElementById('props').style.display='none';
  document.getElementById('props-none').style.display='block';
  refreshLayers();
});
el.appendChild(delBtn);