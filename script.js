// Datos extraídos directamente de tu dataclean.json
const schoolData = {
    produccionTotalKwh: 1006.81, //
    taxaAutoconsum: 97.36,       //
    co2EvitadoTotal: 0.49,       // Sumatorio aproximado
    mobilesMedia: 32.89          //
};

function calculateSavings() {
    const price = document.getElementById('price').value;
    const resultsDiv = document.getElementById('results');
    
    // Cálculo: Energía que no hemos pagado gracias a las placas
    const kwhAutoconsumidos = schoolData.produccionTotalKwh * (schoolData.taxaAutoconsum / 100);
    const ahorroEuros = kwhAutoconsumidos * price;
    
    resultsDiv.innerHTML = `
        <p>✅ <strong>Ahorro Directo:</strong> ${ahorroEuros.toFixed(2)} €</p>
        <p>🌍 <strong>CO2 Evitado:</strong> ${schoolData.co2EvitadoTotal} Toneladas</p>
        <p><small>Basado en un autoconsumo del ${schoolData.taxaAutoconsum}%</small></p>
    `;

    renderTips();
}

function renderTips() {
    const tipsList = document.getElementById('tips-list');
    const tips = [
        `Optimizar el uso de cargadores: Con una media de <strong>${schoolData.mobilesMedia}%</strong> de móviles en el aula, fomentar la carga solo en horas de sol.`,
        "Mantenimiento de inversores: Revisar los días de baja producción (como el 22 de enero con solo 5.87 kWh).",
        "Aprovechar excedentes: Al tener un autoconsumo tan alto (97.36%), el margen de mejora es reducir el consumo nocturno."
    ];

    tipsList.innerHTML = tips.map(tip => `<li>${tip}</li>`).join('');
}

// Inicializar consejos al cargar
window.onload = renderTips;
