document.addEventListener('DOMContentLoaded', () => {
    const categoriaSelect = document.getElementById('categoria');
    const parametroSelect = document.getElementById('parametro');
    const diagnosticoDiv = document.getElementById('diagnostico');

    // Opciones de parámetros para cada tipo de animal
    const parametrosPorCategoria = {
        bovinos: ['Alimentación', 'Sanidad', 'Manejo de Residuos'],
        porcinos: ['Alimentación', 'Control Sanitario', 'Manejo Ambiental'],
        aves: ['Nutrición', 'Salud', 'Condiciones del Hábitat'],
        caprinos: ['Dieta', 'Control de Enfermedades', 'Higiene'],
        ovinos: ['Nutrición', 'Control de Parásitos', 'Cuidado General']
    };

    // Diagnósticos e imágenes
    const diagnosticos = {
        bovinos: {
            Alimentación: { text: "Proporciona forraje de alta calidad.", image: "bovinos.jpg" },
            Sanidad: { text: "Vacunación contra fiebre aftosa.", image: "bovinos.jpg" },
            'Manejo de Residuos': { text: "Usa biodigestores para residuos.", image: "bovinos.jpg" }
        },
        porcinos: {
            Alimentación: { text: "Alimento balanceado rico en proteínas.", image: "porcinos.jpg" },
            'Control Sanitario': { text: "Prevención de peste porcina.", image: "porcinos.jpg" },
            'Manejo Ambiental': { text: "Compostaje para controlar olores.", image: "porcinos.jpg" }
        },
        aves: {
            Nutrición: { text: "Dieta balanceada con calcio y proteínas.", image: "aves.jpg" },
            Salud: { text: "Desparasitación periódica.", image: "aves.jpg" },
            'Condiciones del Hábitat': { text: "Ventilación adecuada y temperatura.", image: "aves.jpg" }
        },
        caprinos: {
            Dieta: { text: "Pasto fresco y suplementos en temporada seca.", image: "caprinos.jpg" },
            'Control de Enfermedades': { text: "Vacunación contra fiebre Q.", image: "caprinos.jpg" },
            Higiene: { text: "Limpieza de áreas de ordeño.", image: "caprinos.jpg" }
        },
        ovinos: {
            Nutrición: { text: "Forraje y concentrados en gestación.", image: "oveja.jpg" },
            'Control de Parásitos': { text: "Desparasitación y rotación de pastizales.", image: "oveja.jpg" },
            'Cuidado General': { text: "Sombra y revisión de pezuñas.", image: "oveja.jpg" }
        }
    };

    // Actualiza las opciones de parámetros
    categoriaSelect.addEventListener('change', (e) => {
        const categoria = e.target.value;
        const parametros = parametrosPorCategoria[categoria] || [];

        parametroSelect.disabled = parametros.length === 0;
        parametroSelect.innerHTML = '<option value="">Selecciona un tratamiento</option>';

        parametros.forEach(parametro => {
            const option = document.createElement('option');
            option.value = parametro;
            option.textContent = parametro;
            parametroSelect.appendChild(option);
        });
    });

    // Muestra el diagnóstico con la imagen
    document.getElementById('diagnostic-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const categoria = categoriaSelect.value;
        const parametro = parametroSelect.value;

        if (categoria && parametro) {
            const diagnostico = diagnosticos[categoria][parametro];
            diagnosticoDiv.innerHTML = `
                <h2>Diagnóstico para ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>
                <h3>Parámetro: ${parametro}</h3>
                <p>${diagnostico.text}</p>
                <img src="static/images/${diagnostico.image}" alt="${categoria}" style="max-width: 100%; border-radius: 10px; margin-top: 15px;">
            `;
            diagnosticoDiv.style.display = 'block';
        } else {
            diagnosticoDiv.innerHTML = "<p>Por favor selecciona un tipo de animal y un tratamiento válido.</p>";
            diagnosticoDiv.style.display = 'block';
        }
    });
});
