// // Datos del carrusel - puedes reemplazar estas URLs con tus propias imágenes
//         const carouselImages = [
//             {
//                 url: "https://d3puay5pkxu9s4.cloudfront.net/curso/4308/800_imagen.jpg",
//                 title: "Reparación integral",
//                 description: "Reparación integral y asesoramiento constante."
//             },
//             {
//                 url: "https://www.dritec.com.ar/images/01-Reparacion.jpg",
//                 title: "Soluciones inmediatas",
//                 description: "Te ofrecemos el mejor precio y el mejor servicio."
//             },
//             {
//                 url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8C9dmireQvh0mHTXYkAMve5vfivfhQ3grQ&s",
//                 title: "Asistencia técnica",
//                 description: "Soluciones inmediatas y una excelente asistencia técnica."
//             },
//             {
//                 url: "https://media.kingston.com/kingston/opengraph/ktc-opengraph-solutions-gaming-how-to-clean-your-pc-system.png",
//                 title: "Limpieza y Optimización",
//                 description: "Optimizamos tu sistema operativo de forma integral."
//             }
//         ];

//         // Variables del carrusel
//         let currentSlide = 0;
//         const carouselSlide = document.getElementById('carouselSlide');
//         const carouselDots = document.getElementById('carouselDots');
//         const prevBtn = document.getElementById('prevBtn');
//         const nextBtn = document.getElementById('nextBtn');

//         // Inicializar el carrusel
//         function initCarousel() {
//             // Crear elementos del carrusel
//             carouselImages.forEach((image, index) => {
//                 // Crear elemento de slide
//                 const slideItem = document.createElement('div');
//                 slideItem.className = 'carousel-item';
//                 slideItem.innerHTML = `
//                     <img src="${image.url}" alt="${image.title}">
//                     <div class="carousel-caption">
//                         <h2>${image.title}</h2>
//                         <p>${image.description}</p>
//                     </div>
//                 `;
//                 carouselSlide.appendChild(slideItem);
                
//                 // Crear punto indicador
//                 const dot = document.createElement('div');
//                 dot.className = `dot ${index === 0 ? 'active' : ''}`;
//                 dot.dataset.index = index;
//                 dot.addEventListener('click', () => goToSlide(index));
//                 carouselDots.appendChild(dot);
//             });
            
//             // Actualizar el carrusel
//             updateCarousel();
//         }

//         // Actualizar posición del carrusel
//         function updateCarousel() {
//             carouselSlide.style.transform = `translateX(-${currentSlide * 100}%)`;
            
//             // Actualizar puntos activos
//             document.querySelectorAll('.dot').forEach((dot, index) => {
//                 if (index === currentSlide) {
//                     dot.classList.add('active');
//                 } else {
//                     dot.classList.remove('active');
//                 }
//             });
//         }

//         // Ir a slide específico
//         function goToSlide(index) {
//             currentSlide = index;
//             if (currentSlide >= carouselImages.length) currentSlide = 0;
//             if (currentSlide < 0) currentSlide = carouselImages.length - 1;
//             updateCarousel();
//         }

//         // Slide siguiente
//         function nextSlide() {
//             currentSlide++;
//             if (currentSlide >= carouselImages.length) currentSlide = 0;
//             updateCarousel();
//         }

//         // Slide anterior
//         function prevSlide() {
//             currentSlide--;
//             if (currentSlide < 0) currentSlide = carouselImages.length - 1;
//             updateCarousel();
//         }

//         // Event listeners para navegación del carrusel
//         prevBtn.addEventListener('click', prevSlide);
//         nextBtn.addEventListener('click', nextSlide);

//         // Cambio automático de slides cada 5 segundos
//         let slideInterval = setInterval(nextSlide, 5000);

//         // Pausar el carrusel al pasar el mouse
//         carouselSlide.addEventListener('mouseenter', () => {
//             clearInterval(slideInterval);
//         });

//         // Reanudar el carrusel al quitar el mouse
//         carouselSlide.addEventListener('mouseleave', () => {
//             slideInterval = setInterval(nextSlide, 5000);
//         });

//         // Navegación suave para enlaces internos
//         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//             anchor.addEventListener('click', function(e) {
//                 e.preventDefault();
                
//                 const targetId = this.getAttribute('href');
//                 if (targetId === '#') return;
                
//                 const targetElement = document.querySelector(targetId);
//                 if (targetElement) {
//                     // Calcular posición considerando el header fijo
//                     const headerHeight = document.querySelector('header').offsetHeight;
//                     const targetPosition = targetElement.offsetTop - headerHeight;
                    
//                     window.scrollTo({
//                         top: targetPosition,
//                         behavior: 'smooth'
//                     });
                    
//                     // Actualizar enlace activo en navegación
//                     document.querySelectorAll('.nav-link').forEach(link => {
//                         link.classList.remove('active');
//                     });
//                     this.classList.add('active');
//                 }
//             });
//         });

//         // Menú responsive
//         const menuToggle = document.getElementById('menuToggle');
//         const navLinks = document.getElementById('navLinks');
        
//         menuToggle.addEventListener('click', () => {
//             navLinks.classList.toggle('active');
//             menuToggle.innerHTML = navLinks.classList.contains('active') 
//                 ? '<i class="fas fa-times"></i>' 
//                 : '<i class="fas fa-bars"></i>';
//         });

//         // Cerrar menú al hacer clic en un enlace en móvil
//         document.querySelectorAll('.nav-link').forEach(link => {
//             link.addEventListener('click', () => {
//                 if (window.innerWidth <= 768) {
//                     navLinks.classList.remove('active');
//                     menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
//                 }
//             });
//         });

//         // Filtrado de portafolio
//         document.querySelectorAll('.filter-btn').forEach(button => {
//             button.addEventListener('click', function() {
//                 // Actualizar botón activo
//                 document.querySelectorAll('.filter-btn').forEach(btn => {
//                     btn.classList.remove('active');
//                 });
//                 this.classList.add('active');
                
//                 // Filtrar elementos
//                 const filterValue = this.dataset.filter;
//                 document.querySelectorAll('.portfolio-item').forEach(item => {
//                     if (filterValue === 'all' || item.dataset.category === filterValue) {
//                         item.style.display = 'block';
//                     } else {
//                         item.style.display = 'none';
//                     }
//                 });
//             });
//         });

//         // Formulario de contacto
//         const contactForm = document.getElementById('contactForm');
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Aquí normalmente enviarías el formulario a un servidor
//             // Por ahora, solo mostraremos una alerta
//             alert('¡Gracias por tu mensaje! Te contactaré pronto.');
//             contactForm.reset();
//         });

//         // Actualizar enlace activo al hacer scroll
//         window.addEventListener('scroll', () => {
//             const sections = document.querySelectorAll('section');
//             const navLinks = document.querySelectorAll('.nav-link');
            
//             let current = '';
//             sections.forEach(section => {
//                 const sectionTop = section.offsetTop;
//                 const sectionHeight = section.clientHeight;
//                 const headerHeight = document.querySelector('header').offsetHeight;
                
//                 if (scrollY >= (sectionTop - headerHeight - 100)) {
//                     current = section.getAttribute('id');
//                 }
//             });
            
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 if (link.getAttribute('href') === `#${current}`) {
//                     link.classList.add('active');
//                 }
//             });
//         });

//         // Inicializar la página
//         document.addEventListener('DOMContentLoaded', () => {
//             initCarousel();
            
//             // Para propósitos de demostración, establecer la primera sección como activa
//             document.querySelector('.nav-link').classList.add('active');
//         });



        // Datos del carrusel - puedes reemplazar estas URLs con tus propias imágenes
// Datos del carrusel - puedes reemplazar estas URLs con tus propias imágenes
        const carouselImages = [
            {
                url: "https://d3puay5pkxu9s4.cloudfront.net/curso/4308/800_imagen.jpg",
                title: "Reparación Integral y constante asesoramiento",
                description: "Reparacón profesional de todo dispositivo informático."
            },
            {
                url: "https://www.dritec.com.ar/images/01-Reparacion.jpg",
                title: "Soluciones inmediatas",
                description: "Te ofrecemos el mejor precio y un servicio de calidad garantizada."
            },
            {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8C9dmireQvh0mHTXYkAMve5vfivfhQ3grQ&s",
                title: "Soluciones a Medida",
                description: "Te ofrezco un servicio profesional."
            },
            {
                url: "https://media.kingston.com/kingston/opengraph/ktc-opengraph-solutions-gaming-how-to-clean-your-pc-system.png",
                title: "Limpieza y Optimización",
                description: "Libero tu dispositivo de todo tipo de malware."
            }
        ];

        // Datos de los artículos del blog
        const blogArticles = {
            1: {
                title: "¿Qué es el IoT Celular?",
                date: "15 Mar, 2025",
                comments: "12 Comentarios",
                readTime: "5 min lectura",
                image: "https://files.resources.altium.com/sites/default/files/styles/max_width_1300/public/blogs/Using%20Cellular%20Networks%20for%20Internet%20of%20Things-70772.jpg?VersionId=4tqSs5GkLMf_41V9dwpVkDxkSUBLAMEK&itok=jnS7YsUR",
                tags: ["chips", "módulos", "pantallas", "condensadores"],
                content: `
                    <img src="https://files.resources.altium.com/sites/default/files/inline-images/sim-image.png">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus delectus reiciendis, corrupti ducimus, eveniet distinctio possimus rem quo expedita earum nobis a mollitia? Officia iste deleniti consequatur sit, ducimus dolorum?.</p>
                    
                    <h3>Servicios de Internet de las Cosas Celulares</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, odit aliquid. Iure illo magnam saepe qui aperiam fugiat maxime eaque sit. Porro dolores consequuntur ullam quaerat aperiam modi molestiae dicta?.</p>
                    
                    <h3>Tarjetas SIM</h3>
                    <ul>
                        <li><strong>Noticia1:</strong> las tarjetas SIM de un proveedor regular no vienen con una hoja de datos técnicos; ni hablar de un rango de temperatura de servicio especificado o cualquier calificación industrial/automotriz. .</li>
                        <li><strong>Noticia2:</strong> Con las tarjetas SIM M2M, puedes obtener tarjetas con rango de temperatura extendido que ofrecen una vida útil calificada de 10 años. Estas calificaciones pueden ser críticas para el éxito de tu dispositivo.</li>

                        <li><strong>Noticia3:</strong>Si tu dispositivo está en un taladro petrolífero remoto o en una granja rural, el costo de tener que visitar el sitio un técnico o ingeniero podría ser increíblemente caro, solo para reemplazar una tarjeta SIM que cuesta unos pocos dólares..</li>
                        <li><strong>Noticia4:</strong>es posible que no se espere que las tarjetas SIM de grado consumidor tengan una vida útil más allá del contrato de 24 meses del teléfono.</li>
                    </ul>
                    
                    <h3>Tarjeta SIM integrada (eSIM)</h3>
                    <p>¿Qué es una tarjeta eSIM?:</p>
                    
                    <h3>Alternativamente, el uso de un módulo de módem celular integrado como una tarjeta SIM (eSIM) ahorra un espacio significativo en la placa</h3>
                     <p>Mientras que una tarjeta SIM solo se puede leer, una eSIM es regrabable y, lo que es mejor, se puede montar en superficie como cualquier otro componente en su placa. Vale la pena mencionar que el soporte para eSIM no está tan ampliamente disponible como para una tarjeta SIM regular. Sin embargo, la mayoría de las grandes redes en el mundo desarrollado las soportarán. Además de ahorrar espacio en la placa, también podría estar mirando un ahorro de costos significativo al adoptar una eSIM para productos de Internet de las cosas celulares. El costo de un chip eSIM es típicamente más bajo que una tarjeta SIM más el zócalo y ahorra considerablemente en la mano de obra de insertar manualmente una tarjeta SIM en un zócalo. La eSIM podría ser programada automáticamente durante el proceso de quemado y prueba del ensamblaje de su dispositivo.</p>
                    
                `
            },
            2: {
                title: "Optimización de rendimiento en JavaScript",
                date: "28 Feb, 2023",
                comments: "8 Comentarios",
                readTime: "7 min lectura",
                image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
                tags: ["Desktop", "Smartphone", "Optimización", "Sistemas Operativos"],
                content: `
                    <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" alt="JavaScript Performance" class="modal-image">
                    <p>Acá falta detalles.</p>
                    
                    <h3>1. Minimizar Reflows y Repaints</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus delectus reiciendis, corrupti ducimus, eveniet distinctio possimus rem quo expedita earum nobis a mollitia? Officia iste deleniti consequatur sit, ducimus dolorum?:</p>
                    <ul>
                        <li>Agrupa múltiples cambios de DOM en una sola operación</li>
                        <li>Usa documentFragment para hacer cambios fuera del DOM</li>
                        <li>Evita acceder a propiedades de estilo que causen reflow (offsetTop, offsetWidth, etc.) en bucles</li>
                    </ul>
                    
                    <h3>2. Debouncing y Throttling</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus delectus reiciendis, corrupti ducimus, eveniet distinctio possimus rem quo expedita earum nobis a mollitia? Officia iste deleniti consequatur sit, ducimus dolorum?:</p>
                    <ul>
                        <li><strong>Debouncing:</strong> Retrasa la ejecución de una función hasta que pase un cierto tiempo sin que se dispare el evento</li>
                        <li><strong>Throttling:</strong> Limita la ejecución de una función a un cierto intervalo de tiempo</li>
                    </ul>
                    
                    <h3>3. Lazy Loading de Imágenes</h3>
                    <p>Acá falta detalles</p>
                    
                    <h3>4. Web Workers para Operaciones Intensivas</h3>
                    <p>Acá falta detalles</p>
                    
                    <h3>5. Memoización</h3>
                    <p>Acá falta detalles</p>
                    
                    <p>Implementar estas técnicas puede mejorar significativamente el rendimiento de tus aplicaciones JavaScript, proporcionando una mejor experiencia de usuario.</p>
                `
            },
            3: {
                title: "Despliegue de aplicaciones en la nube",
                date: "10 Feb, 2023",
                comments: "15 Comentarios",
                readTime: "8 min lectura",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
                tags: ["Cloud", "DevOps", "AWS", "Deployment"],
                content: `
                    <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" alt="Cloud Deployment" class="modal-image">
                    <p>El despliegue de aplicaciones en la nube se ha convertido en una práctica estándar para desarrolladores modernos. En esta guía completa, exploraremos las mejores prácticas y plataformas para desplegar tus aplicaciones web.</p>
                    
                    <h3>Plataformas de Despliegue Popular</h3>
                    <ul>
                        <li><strong>AWS (Amazon Web Services):</strong> Ofrece una amplia gama de servicios incluyendo EC2, S3, Lambda y Elastic Beanstalk</li>
                        <li><strong>Azure:</strong> La plataforma cloud de Microsoft, ideal para aplicaciones .NET y empresas que ya usan productos Microsoft</li>
                        <li><strong>Google Cloud Platform:</strong> Excelente para aplicaciones que utilizan machine learning o big data</li>
                        <li><strong>Vercel:</strong> Especializada en aplicaciones frontend y estáticas, perfecta para React, Vue y Next.js</li>
                        <li><strong>Netlify:</strong> Similar a Vercel, con un enfoque en aplicaciones JAMstack</li>
                        <li><strong>Heroku:</strong> Plataforma como servicio (PaaS) que simplifica el despliegue para desarrolladores</li>
                    </ul>
                    
                    <h3>Estrategias de Despliegue</h3>
                    <p>Existen varias estrategias para desplegar aplicaciones sin tiempo de inactividad:</p>
                    <ul>
                        <li><strong>Blue-Green Deployment:</strong> Mantienes dos entornos idénticos (blue y green) y cambias el tráfico entre ellos</li>
                        <li><strong>Canary Releases:</strong> Despliegas la nueva versión a un pequeño porcentaje de usuarios antes de hacerlo para todos</li>
                        <li><strong>Rolling Updates:</strong> Actualizas instancias gradualmente, una por una</li>
                    </ul>
                    
                    <h3>Automatización con CI/CD</h3>
                    <p>La integración continua y despliegue continuo (CI/CD) es esencial para equipos modernos:</p>
                    <ul>
                        <li><strong>GitHub Actions:</strong> Integrado directamente con GitHub</li>
                        <li><strong>GitLab CI/CD:</strong> Parte integral de GitLab</li>
                        <li><strong>Jenkins:</strong> La solución de automatización más veterana y flexible</li>
                        <li><strong>CircleCI:</strong> Solución cloud-first con excelente soporte para contenedores</li>
                    </ul>
                    
                    <h3>Mejores Prácticas</h3>
                    <ul>
                        <li>Usa variables de entorno para configuración sensible</li>
                        <li>Implementa monitoreo y alertas desde el primer día</li>
                        <li>Configura backups automáticos para bases de datos</li>
                        <li>Utiliza un CDN para contenido estático</li>
                        <li>Implementa HTTPS y seguridad de capas múltiples</li>
                    </ul>
                    
                    <p>Elegir la plataforma y estrategia correctas depende de tu aplicación, presupuesto y equipo. Lo más importante es comenzar con algo simple y evolucionar según las necesidades.</p>
                `
            }
        };

        // Variables del carrusel
        let currentSlide = 0;
        const carouselSlide = document.getElementById('carouselSlide');
        const carouselDots = document.getElementById('carouselDots');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        // Modal
        const modalOverlay = document.getElementById('modalOverlay');
        const modal = document.getElementById('modal');
        const modalClose = document.getElementById('modalClose');
        const modalTitle = document.getElementById('modalTitle');
        const modalDate = document.getElementById('modalDate');
        const modalComments = document.getElementById('modalComments');
        const modalReadTime = document.getElementById('modalReadTime');
        const modalContent = document.getElementById('modalContent');
        const modalTags = document.getElementById('modalTags');
        const modalShare = document.getElementById('modalShare');
        const readMoreButtons = document.querySelectorAll('.read-more-btn');

        // Modo oscuro
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

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

        // Funciones del modal
        function openModal(articleId) {
            const article = blogArticles[articleId];
            
            if (!article) return;
            
            // Llenar el modal con la información del artículo
            modalTitle.textContent = article.title;
            modalDate.textContent = article.date;
            modalComments.textContent = article.comments;
            modalReadTime.textContent = article.readTime;
            modalContent.innerHTML = article.content;
            
            // Limpiar etiquetas previas
            modalTags.innerHTML = '';
            
            // Agregar etiquetas
            article.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = 'modal-tag';
                tagElement.textContent = tag;
                modalTags.appendChild(tagElement);
            });
            
            // Mostrar el modal
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevenir scroll
        }

        function closeModal() {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restaurar scroll
        }

        // Función para alternar modo oscuro
        function toggleDarkMode() {
            body.classList.toggle('dark-mode');
            
            // Guardar preferencia en localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        }

        // Verificar preferencia guardada al cargar la página
        function checkDarkModePreference() {
            const darkModePreference = localStorage.getItem('darkMode');
            
            if (darkModePreference === 'enabled') {
                body.classList.add('dark-mode');
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                // Si el usuario tiene preferencia de sistema en oscuro
                body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
            }
        }

        // Event listeners para navegación del carrusel
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        // Event listeners para el modal
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });

        // Cerrar modal con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeModal();
            }
        });

        // Configurar botones "Leer más"
        readMoreButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const articleId = button.getAttribute('data-article');
                openModal(articleId);
            });
        });

        // Botón compartir en modal
        modalShare.addEventListener('click', () => {
            const articleTitle = modalTitle.textContent;
            const url = window.location.href;
            
            if (navigator.share) {
                navigator.share({
                    title: articleTitle,
                    url: url
                });
            } else {
                // Fallback para navegadores que no soportan Web Share API
                navigator.clipboard.writeText(url).then(() => {
                    alert('¡Enlace copiado al portapapeles!');
                });
            }
        });

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
            checkDarkModePreference();
            
            // Configurar evento para el botón de modo oscuro
            themeToggle.addEventListener('click', toggleDarkMode);
            
            // Para propósitos de demostración, establecer la primera sección como activa
            document.querySelector('.nav-link').classList.add('active');
        });      
   

function modoOscuro(){
    document.body.classList.toggle("darkmode");
}

