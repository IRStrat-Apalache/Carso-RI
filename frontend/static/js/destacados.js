const destacados = [
    {
        titulo: "Comunicado de Prensa",
        imagen: "/static/frontend/images/destacado1.jpg",
        enlace: "https://ejemplo.com/comunicado",
        resumen: "Conoce el último comunicado de nuestra empresa."
    },
    {
        titulo: "Reporte Anual",
        imagen: "/static/frontend/images/destacado2.jpg",
        enlace: "https://ejemplo.com/reporte",
        resumen: "Consulta el reporte anual con todos los detalles."
    }
];

const container = document.getElementById("destacados-container");

if (container && destacados.length > 0) {
    destacados.forEach(item => {
        const col = document.createElement("div");
        col.className = "col-lg-3 col-md-6 col-sm-12 mb-3";
        col.innerHTML = `
            <article class="investor-card h-100 shadow-sm rounded overflow-hidden position-relative">
                <a target="_blank" href="${item.enlace}" class="text-decoration-none">
                    <figure class="mb-0">
                        <img src="${item.imagen}" alt="${item.titulo}" class="img-fluid w-100" style="object-fit:cover; height:180px;">
                        <figcaption class="overlay d-flex align-items-center justify-content-center">
                            <span class="text-white fw-bold">Ver más</span>
                        </figcaption>
                    </figure>
                    <div class="card-body p-2">
                        <h5 class="card-title mb-1">${item.titulo}</h5>
                        <p class="card-text small text-muted">${item.resumen || ""}</p>
                    </div>
                </a>
            </article>
        `;
        container.appendChild(col);
    });
}
