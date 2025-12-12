// Datos del carrusel - puedes reemplazar estas URLs con tus propias imágenes
        const carouselImages = [
            {
                url: "https://d3puay5pkxu9s4.cloudfront.net/curso/4308/800_imagen.jpg",
                title: "Reparación integral",
                description: "Reparación integral y asesoramiento constante."
            },
            {
                url: "https://www.dritec.com.ar/images/01-Reparacion.jpg",
                title: "Soluciones inmediatas",
                description: "Te ofrecemos el mejor precio y el mejor servicio."
            },
            {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8C9dmireQvh0mHTXYkAMve5vfivfhQ3grQ&s",
                title: "Asistencia técnica",
                description: "Soluciones inmediatas y una excelente asistencia técnica."
            },
            {
                url: "https://media.kingston.com/kingston/opengraph/ktc-opengraph-solutions-gaming-how-to-clean-your-pc-system.png",
                title: "Limpieza y Optimización",
                description: "Optimizamos tu sistema operativo de forma integral."
            }
        ];

        // Variables del carrusel
        let currentSlide = 0;
        const carouselSlide = document.getElementById('carouselSlide');
        const carouselDots = document.getElementById('carouselDots');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        // Inicializar el carrusel
        function initCarousel() {
            // Crear elementos del carrusel
            carouselImages.forEach((image, index) => {
                // Crear elemento de slide
                const slideItem = document.createElement('div');
                slideItem.className = 'carousel-item';
                slideItem.innerHTML = `
                    <img src="${image.url}" alt="${image.title}">
                    <div class="carousel-caption">
                        <h2>${image.title}</h2>
                        <p>${image.description}</p>
                    </div>
                `;
                carouselSlide.appendChild(slideItem);
                
                // Crear punto indicador
                const dot = document.createElement('div');
                dot.className = `dot ${index === 0 ? 'active' : ''}`;
                dot.dataset.index = index;
                dot.addEventListener('click', () => goToSlide(index));
                carouselDots.appendChild(dot);
            });
            
            // Actualizar el carrusel
            updateCarousel();
        }

        // Actualizar posición del carrusel
        function updateCarousel() {
            carouselSlide.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Actualizar puntos activos
            document.querySelectorAll('.dot').forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Ir a slide específico
        function goToSlide(index) {
            currentSlide = index;
            if (currentSlide >= carouselImages.length) currentSlide = 0;
            if (currentSlide < 0) currentSlide = carouselImages.length - 1;
            updateCarousel();
        }

        // Slide siguiente
        function nextSlide() {
            currentSlide++;
            if (currentSlide >= carouselImages.length) currentSlide = 0;
            updateCarousel();
        }

        // Slide anterior
        function prevSlide() {
            currentSlide--;
            if (currentSlide < 0) currentSlide = carouselImages.length - 1;
            updateCarousel();
        }

        // Event listeners para navegación del carrusel
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        // Cambio automático de slides cada 5 segundos
        let slideInterval = setInterval(nextSlide, 5000);

        // Pausar el carrusel al pasar el mouse
        carouselSlide.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        // Reanudar el carrusel al quitar el mouse
        carouselSlide.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });

        // Navegación suave para enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Calcular posición considerando el header fijo
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Actualizar enlace activo en navegación
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });

        // Menú responsive
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Cerrar menú al hacer clic en un enlace en móvil
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });

        // Filtrado de portafolio
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Actualizar botón activo
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
                
                // Filtrar elementos
                const filterValue = this.dataset.filter;
                document.querySelectorAll('.portfolio-item').forEach(item => {
                    if (filterValue === 'all' || item.dataset.category === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Formulario de contacto
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí normalmente enviarías el formulario a un servidor
            // Por ahora, solo mostraremos una alerta
            alert('¡Gracias por tu mensaje! Te contactaré pronto.');
            contactForm.reset();
        });

        // Actualizar enlace activo al hacer scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const headerHeight = document.querySelector('header').offsetHeight;
                
                if (scrollY >= (sectionTop - headerHeight - 100)) {
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

        // Inicializar la página
        document.addEventListener('DOMContentLoaded', () => {
            initCarousel();
            
            // Para propósitos de demostración, establecer la primera sección como activa
            document.querySelector('.nav-link').classList.add('active');
        });


function modoOscuro(){
    document.body.classList.toggle("darkmode");
}

