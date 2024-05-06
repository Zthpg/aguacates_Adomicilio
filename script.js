// Función para avanzar al siguiente slide automáticamente
function siguienteSlide() {
    var slides = document.querySelectorAll('.carousel-item');
    var activeIndex = 0;
    slides.forEach(function(slide, index) {
        if (slide.classList.contains('active')) {
            activeIndex = index;
        }
    });
    slides[activeIndex].classList.remove('active');
    if (activeIndex === slides.length - 1) {
        slides[0].classList.add('active');
    } else {
        slides[activeIndex + 1].classList.add('active');
    }
}

// Llamar a siguienteSlide cada 5 segundos
setInterval(siguienteSlide, 5000);

// Función para scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
