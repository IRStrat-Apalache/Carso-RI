/* ========================================
   JAVASCRIPT PARA LA SECCIÓN COMITES
   COMPLETO - LISTO PARA USAR
   ======================================== */

// Función para mostrar/ocultar contenido de comités
function mostrarContenido(id) {
    // Ocultar todos los contenidos
    document.querySelectorAll('#contenidos > div').forEach(div => {
        div.classList.remove('contenido-activo');
        div.classList.add('contenido-oculto');
    });
    
    // Mostrar el contenido seleccionado
    const contenido = document.getElementById('contenido-' + id);
    if (contenido) {
        contenido.classList.remove('contenido-oculto');
        contenido.classList.add('contenido-activo');
    }
}

// Función para manejar los modales dinámicos
function setupModals() {
    // Buscar todos los botones que abren modales
    const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');
    
    modalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const title = this.getAttribute('data-bs-title');
            const info = this.getAttribute('data-bs-info');
            
            // Actualizar el título del modal
            const modalTitle = document.getElementById('dynamicModalLabel');
            if (modalTitle) {
                modalTitle.textContent = title;
            }
            
            // Actualizar el contenido del modal
            const modalBody = document.querySelector('#dynamicModal .modal-body');
            if (modalBody) {
                modalBody.innerHTML = info;
            }
            
            // Mostrar el modal
            const modal = new bootstrap.Modal(document.getElementById('dynamicModal'));
            modal.show();
        });
    });
}

// Función para inicializar todo
function initComites() {
    // Configurar modales
    setupModals();
    
    // Asegurar que el contenido técnico esté visible por defecto
    mostrarContenido('tecnico');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initComites();
});

// También inicializar si el script se carga después del DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComites);
} else {
    initComites();
}
