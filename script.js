document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Lógica del Modo Oscuro
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const moonIcon = 'fas fa-moon';
    const sunIcon = 'fas fa-sun';

    // Función para aplicar la configuración de modo
    function setDarkMode(isDark) {
        if (isDark) {
            body.classList.add('dark');
            darkModeToggle.querySelector('i').className = sunIcon;
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark');
            darkModeToggle.querySelector('i').className = moonIcon;
            localStorage.setItem('theme', 'light');
        }
    }

    // Inicialización del Modo Oscuro (Persistencia + Auto-detect)
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark') {
        setDarkMode(true);
    } else if (storedTheme === 'light') {
        setDarkMode(false);
    } else if (prefersDark) {
        setDarkMode(true); // Auto-detect si no hay preferencia guardada
    } else {
        setDarkMode(false); // Default a Light si no hay preferencia y el sistema es claro
    }

    // Toggle Listener
    darkModeToggle.addEventListener('click', function() {
        const isCurrentlyDark = body.classList.contains('dark');
        setDarkMode(!isCurrentlyDark);
    });

    // 2. Smooth Scroll para Enlaces de Navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Permitir que el botón de Dark Mode funcione normalmente
            if (this.id === 'darkModeToggle' || this.classList.contains('btn')) {
                return;
            }
            
            e.preventDefault();
            
            // Obtener el ID de la sección (e.g., '#about')
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Scroll suave a la sección
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Formulario de Contacto (Simulación de Envío)
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevenir el envío real del formulario

        // Simular validación simple (Bootstrap ya maneja el 'required')
        const name = document.getElementById('nameInput').value.trim();
        const email = document.getElementById('emailInput').value.trim();
        const message = document.getElementById('messageInput').value.trim();

        if (name && email && message) {
            // Simulación de éxito
            alert('¡Mensaje enviado! 📧 Gracias por contactarme, Juan Pérez te responderá pronto.');
            
            // Opcional: Resetear el formulario después de enviar
            contactForm.reset();
        } else {
            alert('Por favor, rellena todos los campos obligatorios.');
        }
    });

});