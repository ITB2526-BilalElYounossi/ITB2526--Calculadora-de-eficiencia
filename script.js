/**
 * Datos extraídos de dataclean.json
 */
const data = {
    facturas: [
        { desc: "Treballs ferro i fusta", total: 1012.98, cat: "mantenimiento" },
        { desc: "Reparació compressor", total: 348.48, cat: "mantenimiento" },
        { desc: "Circuits obsolets QGP", total: 2548.02, cat: "mantenimiento" },
        { desc: "Paper secamanos/bosses", total: 750.26, cat: "suministros" },
        { desc: "Neteja jardí/patis", total: 454.72, cat: "mantenimiento" },
        { desc: "DIGI Fibra", total: 30.00, cat: "conectividad" },
        { desc: "O2 Fibra/Mobil", total: 50.00, cat: "conectividad" },
        { desc: "Recanvi marcador", total: 34.36, cat: "suministros" },
        { desc: "Papel Navigator A4", total: 198.56, cat: "suministros" },
        { desc: "Material oficina 1", total: 277.13, cat: "suministros" },
        { desc: "Material oficina 2", total: 261.24, cat: "suministros" }
    ],
    solar: { kwh: 1006.81, tasa: 97.36 },
    mobiles: 32.89
};

function runAudit() {
    let totals = { mantenimiento: 0, suministros: 0, conectividad: 0 };
    
    // Procesar cada factura del JSON
    data.facturas.forEach(f => totals[f.cat] += f.total);

    // Renderizar categorías
    const breakdown = document.getElementById('category-breakdown');
    breakdown.innerHTML = `
        <div class="cat-item cat-mantenimiento">
            <h4>Infraestructura</h4>
            <p>${totals.mantenimiento.toLocaleString()} €</p>
        </div>
        <div class="cat-item cat-suministros">
            <h4>Papel y Oficina</h4>
            <p>${totals.suministros.toLocaleString()} €</p>
        </div>
        <div class="cat-item cat-conectividad">
            <h4>Conectividad</h4>
            <p>${totals.conectividad.toLocaleString()} €</p>
        </div>
    `;

    // Calcular ahorro energético
    const price = document.getElementById('energy-price').value;
    const kwhAhorrados = data.solar.kwh * (data.solar.tasa / 100);
    const eurosAhorrados = kwhAhorrados * price;

    const results = document.getElementById('audit-results');
    results.innerHTML = `
        <h3>Conclusiones de la Auditoría:</h3>
        <ul>
            <li><strong>Ahorro Solar:</strong> Has evitado un gasto de <strong>${eurosAhorrados.toFixed(2)} €</strong> gracias a las placas.</li>
            <li><strong>Coste de Material:</strong> El gasto en papel y fungibles representa el <strong>${((totals.suministros/5965.75)*100).toFixed(1)}%</strong> del total auditado.</li>
            <li><strong>Eficiencia Digital:</strong> Con un <strong>${data.mobiles}%</strong> de móviles en el aula, existe margen para reducir el gasto de ${totals.suministros.toFixed(2)} € en papel mediante digitalización.</li>
        </ul>
    `;
}

window.onload = runAudit;
