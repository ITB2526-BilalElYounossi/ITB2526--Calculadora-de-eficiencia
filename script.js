/* ═══════════════════════════════════════════════
   ITB · Calculadora d'Estalvi Energètic
   main.js · Fase 3 · Curs 25/26
═══════════════════════════════════════════════ */

/* ══════════════════════════════
   DATA (extreta de dataclean.json)
══════════════════════════════ */
const DATA = {
  energia: [
    { data: "2025-01-01", pv: 42.56, sc: 93.84, co2: 0.02 },
    { data: "2025-01-02", pv: 48.86, sc: 92.98, co2: 0.02 },
    { data: "2025-01-03", pv: 36.48, sc: 99.40, co2: 0.02 },
    { data: "2025-01-04", pv: 44.18, sc: 99.03, co2: 0.02 },
    { data: "2025-01-05", pv: 41.99, sc: 99.67, co2: 0.02 },
    { data: "2025-01-06", pv: 40.55, sc: 93.51, co2: 0.02 },
    { data: "2025-01-07", pv: 53.26, sc: 96.43, co2: 0.03 },
    { data: "2025-01-08", pv: 47.81, sc: 100.00, co2: 0.02 },
    { data: "2025-01-09", pv: 52.03, sc: 100.00, co2: 0.03 },
    { data: "2025-01-10", pv: 49.33, sc: 100.00, co2: 0.02 },
    { data: "2025-01-11", pv: 40.03, sc: 96.28, co2: 0.02 },
    { data: "2025-01-12", pv: 57.00, sc: 96.72, co2: 0.03 },
    { data: "2025-01-13", pv: 55.89, sc: 100.00, co2: 0.03 },
    { data: "2025-01-14", pv: 57.49, sc: 100.00, co2: 0.03 },
    { data: "2025-01-15", pv: 55.58, sc: 100.00, co2: 0.03 },
    { data: "2025-01-16", pv: 40.94, sc: 100.00, co2: 0.02 },
    { data: "2025-01-17", pv: 52.90, sc: 100.00, co2: 0.03 },
    { data: "2025-01-18", pv: 56.17, sc: 94.36, co2: 0.03 },
    { data: "2025-01-19", pv: 35.53, sc: 99.44, co2: 0.02 },
    { data: "2025-01-20", pv: 32.00, sc: 100.00, co2: 0.02 },
    { data: "2025-01-21", pv: 30.24, sc: 100.00, co2: 0.01 },
    { data: "2025-01-22", pv: 5.87,  sc: 100.00, co2: 0.00 }
  ],

  factures: [
    { data: "2024-09-13", producte: "SERVEIS EXTRAORDINARIS - Treballs en ferro i fusta",   categoria: "Manteniment",       preu: 575.00,  total: 1012.98, iva: 21 },
    { data: "2024-07-05", producte: "SERVEI D'URGÈNCIA - Reparació compressor",              categoria: "Manteniment",       preu: 288.00,  total: 348.48,  iva: 21 },
    { data: "2024-05-23", producte: "SERVEIS EXTRAORDINARIS - Eliminar circuits obsolets",   categoria: "Manteniment",       preu: 2105.80, total: 2548.02, iva: 21 },
    { data: "2024-06-20", producte: "Paper secamanos, sacs industrials, bosses escombraries",categoria: "Neteja",            preu: 620.05,  total: 750.26,  iva: 21 },
    { data: "2024-05-27", producte: "Neteja jardí, patis, transport deixalleria",            categoria: "Neteja",            preu: 375.80,  total: 454.72,  iva: 21 },
    { data: null,         producte: "Fibra 1Gb - DIGI",                                      categoria: "Telecomunicacions", preu: 24.79,   total: 30.00,   iva: 21 },
    { data: "2024-03-04", producte: "Fibra 1Gb i Mòbil 200GB - O2",                         categoria: "Telecomunicacions", preu: 41.32,   total: 50.00,   iva: 21 },
    { data: "2024-06-30", producte: "RECAMBIO MARCADOR PIZARRA BLANCA NEGRO (×40)",          categoria: "Material Oficina",  preu: 0.71,    total: 34.36,   iva: 21 },
    { data: "2024-10-31", producte: "PAPEL NAVIGATOR UNIVERSAL A4 80G (×30)",                categoria: "Material Oficina",  preu: 5.47,    total: 198.56,  iva: 21 },
    { data: "2024-04-30", producte: "Material oficina - marcadors, paper, borrador",         categoria: "Material Oficina",  preu: 229.03,  total: 277.13,  iva: 21 },
    { data: "2024-05-31", producte: "Material oficina - marcadors i paper",                  categoria: "Material Oficina",  preu: 215.90,  total: 261.24,  iva: 21 }
  ],

  mobils: [
    { data: "2024-11-15", grup: "ASIXc1A", mobils: 3,    alumnat: 20, pct: 15.00 },
    { data: "2024-11-21", grup: "ASIXc1A", mobils: 7,    alumnat: 19, pct: 36.84 },
    { data: "2024-11-22", grup: "ASIXc1A", mobils: 5,    alumnat: 21, pct: 23.81 },
    { data: "2024-11-28", grup: "ASIXc1A", mobils: 6,    alumnat: 19, pct: 31.58 },
    { data: "2024-11-29", grup: "ASIXc1A", mobils: 5,    alumnat: 22, pct: 22.73 },
    { data: "2024-12-12", grup: "ASIXc1A", mobils: 3.5,  alumnat: 19, pct: 18.42 },
    { data: "2024-12-13", grup: "ASIXc1A", mobils: 11,   alumnat: 19, pct: 57.89 },
    { data: "2024-12-19", grup: "ASIXc1A", mobils: 9.5,  alumnat: 18, pct: 52.78 },
    { data: "2025-01-09", grup: "ASIXc1A", mobils: 9,    alumnat: 20, pct: 45.00 },
    { data: "2025-01-16", grup: "ASIXc1A", mobils: 8,    alumnat: 18, pct: 44.44 },
    { data: "2025-01-17", grup: "ASIXc1A", mobils: 7,    alumnat: 19, pct: 36.84 },
    { data: "2024-11-16", grup: "ASIXc1B", mobils: 6,    alumnat: 21, pct: 28.57 },
    { data: "2024-11-22", grup: "ASIXc1B", mobils: 3,    alumnat: 20, pct: 15.00 },
    { data: "2024-11-26", grup: "ASIXc1B", mobils: 2.5,  alumnat: 20, pct: 12.50 },
    { data: "2024-11-29", grup: "ASIXc1B", mobils: 4,    alumnat: 21, pct: 19.05 },
    { data: "2024-12-03", grup: "ASIXc1B", mobils: 1,    alumnat: 21, pct: 4.76  },
    { data: "2024-12-10", grup: "ASIXc1B", mobils: 3,    alumnat: 17, pct: 17.65 },
    { data: "2024-12-13", grup: "ASIXc1B", mobils: 6.5,  alumnat: 19, pct: 34.21 },
    { data: "2024-12-17", grup: "ASIXc1B", mobils: 4,    alumnat: 17, pct: 23.53 },
    { data: "2025-01-14", grup: "ASIXc1B", mobils: 3,    alumnat: 18, pct: 16.67 },
    { data: "2025-01-17", grup: "ASIXc1B", mobils: 4,    alumnat: 17, pct: 23.53 },
    { data: "2024-11-18", grup: "ASIXc1C", mobils: 11,   alumnat: 18, pct: 61.11 },
    { data: "2024-11-19", grup: "ASIXc1C", mobils: 6,    alumnat: 19, pct: 31.58 },
    { data: "2024-11-25", grup: "ASIXc1C", mobils: 3.5,  alumnat: 18, pct: 19.44 },
    { data: "2024-11-26", grup: "ASIXc1C", mobils: 14.5, alumnat: 18, pct: 80.56 },
    { data: "2024-12-02", grup: "ASIXc1C", mobils: 8,    alumnat: 18, pct: 44.44 },
    { data: "2024-12-03", grup: "ASIXc1C", mobils: 6,    alumnat: 16, pct: 37.50 },
    { data: "2024-12-09", grup: "ASIXc1C", mobils: 3.5,  alumnat: 15, pct: 23.33 },
    { data: "2024-12-10", grup: "ASIXc1C", mobils: 6,    alumnat: 17, pct: 35.29 },
    { data: "2024-12-16", grup: "ASIXc1C", mobils: 2,    alumnat: 17, pct: 11.76 },
    { data: "2024-12-17", grup: "ASIXc1C", mobils: 5,    alumnat: 15, pct: 33.33 },
    { data: "2025-01-13", grup: "ASIXc1C", mobils: 5,    alumnat: 13, pct: 38.46 },
    { data: "2025-01-14", grup: "ASIXc1C", mobils: 11,   alumnat: 18, pct: 61.11 },
    { data: "2025-01-20", grup: "ASIXc1C", mobils: 11,   alumnat: 16, pct: 68.75 }
  ]
};

/* ══════════════════════════════
   CHART.JS GLOBAL DEFAULTS
══════════════════════════════ */
Chart.defaults.color       = '#5a7a64';
Chart.defaults.borderColor = '#1e3028';
Chart.defaults.font.family = "'Space Mono', monospace";
Chart.defaults.font.size   = 11;

/* ── Registry per destruir instàncies ── */
const chartInstances = {};

function destroyChart(id) {
  if (chartInstances[id]) {
    chartInstances[id].destroy();
    delete chartInstances[id];
  }
}

/* ══════════════════════════════
   NAVEGACIÓ PER PESTANYES
══════════════════════════════ */
function showTab(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('nav button').forEach(b => {
    if (b.getAttribute('onclick').includes(id)) b.classList.add('active');
  });
  renderCharts(id);
}

function renderCharts(tab) {
  if (tab === 'dashboard')   renderDashboard();
  if (tab === 'energia')     renderEnergia();
  if (tab === 'mobils')      renderMobils();
  if (tab === 'pla')         renderPla();
  if (tab === 'calculadora') renderProjections();
}

/* ══════════════════════════════
   DASHBOARD
══════════════════════════════ */
function renderDashboard() {
  /* Barres producció solar */
  destroyChart('chartEnergia');
  chartInstances['chartEnergia'] = new Chart(document.getElementById('chartEnergia'), {
    type: 'bar',
    data: {
      labels: DATA.energia.map(d => d.data.slice(5)),
      datasets: [{
        label: 'kWh',
        data: DATA.energia.map(d => d.pv),
        backgroundColor: 'rgba(45,255,122,.5)',
        borderColor: '#2dff7a', borderWidth: 1, borderRadius: 4
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: 'rgba(30,48,40,.4)' } },
        y: { grid: { color: 'rgba(30,48,40,.4)' } }
      }
    }
  });

  /* Línia autoconsum */
  destroyChart('chartAutoconsum');
  chartInstances['chartAutoconsum'] = new Chart(document.getElementById('chartAutoconsum'), {
    type: 'line',
    data: {
      labels: DATA.energia.map(d => d.data.slice(5)),
      datasets: [{
        label: '%',
        data: DATA.energia.map(d => d.sc),
        borderColor: '#4dc9ff', backgroundColor: 'rgba(77,201,255,.1)',
        fill: true, tension: 0.4, pointRadius: 3
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: 'rgba(30,48,40,.4)' } },
        y: { min: 88, grid: { color: 'rgba(30,48,40,.4)' } }
      }
    }
  });

  /* Donut despeses */
  destroyChart('chartDespeses');
  chartInstances['chartDespeses'] = new Chart(document.getElementById('chartDespeses'), {
    type: 'doughnut',
    data: {
      labels: ['Manteniment', 'Neteja', 'Material Oficina', 'Telecomunicacions'],
      datasets: [{
        data: [3909.48, 1204.98, 771.29, 80.00],
        backgroundColor: [
          'rgba(255,77,109,.7)', 'rgba(245,200,66,.7)',
          'rgba(45,255,122,.7)', 'rgba(77,201,255,.7)'
        ],
        borderColor: '#0e1612', borderWidth: 2
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'right', labels: { color: '#d4eed9' } } }
    }
  });
}

/* ══════════════════════════════
   ENERGIA (secció detall)
══════════════════════════════ */
function renderEnergia() {
  /* Taula */
  const tbody = document.querySelector('#tablaEnergia tbody');
  tbody.innerHTML = '';
  DATA.energia.forEach(d => {
    const cls = d.sc === 100 ? 'tag-green' : d.sc >= 95 ? 'tag-amber' : 'tag-red';
    const lbl = d.sc === 100 ? '100% Autoconsum' : d.sc >= 95 ? 'Molt alt' : 'Alt';
    tbody.innerHTML += `
      <tr>
        <td>${d.data}</td>
        <td style="color:#2dff7a;font-weight:700">${d.pv.toFixed(2)}</td>
        <td>${d.sc.toFixed(2)}%</td>
        <td>${d.co2.toFixed(2)}</td>
        <td><span class="tag ${cls}">${lbl}</span></td>
      </tr>`;
  });

  /* Gràfic combinat barres + línia */
  destroyChart('chartEnergiaDetall');
  chartInstances['chartEnergiaDetall'] = new Chart(document.getElementById('chartEnergiaDetall'), {
    type: 'bar',
    data: {
      labels: DATA.energia.map(d => d.data.slice(5)),
      datasets: [
        {
          label: 'PV Yield (kWh)',
          data: DATA.energia.map(d => d.pv),
          backgroundColor: 'rgba(45,255,122,.5)',
          borderColor: '#2dff7a', borderWidth: 1, borderRadius: 4,
          yAxisID: 'y'
        },
        {
          label: 'Autoconsum (%)',
          data: DATA.energia.map(d => d.sc),
          type: 'line',
          borderColor: '#f5c842', backgroundColor: 'transparent',
          tension: .4, pointRadius: 3, yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: {
        x:  { grid: { color: 'rgba(30,48,40,.4)' } },
        y:  { grid: { color: 'rgba(30,48,40,.4)' }, title: { display: true, text: 'kWh', color: '#5a7a64' } },
        y1: { position: 'right', min: 85, max: 102, grid: { display: false }, title: { display: true, text: '%', color: '#5a7a64' } }
      }
    }
  });
}

/* ══════════════════════════════
   CONSUMIBLES — taula factures
══════════════════════════════ */
function renderFactures() {
  const tbody = document.querySelector('#tablaFactures tbody');
  tbody.innerHTML = '';
  const catCls = {
    'Manteniment':       'tag-red',
    'Neteja':            'tag-amber',
    'Material Oficina':  'tag-green',
    'Telecomunicacions': 'tag-green'
  };
  DATA.factures.forEach(f => {
    tbody.innerHTML += `
      <tr>
        <td>${f.data || '—'}</td>
        <td>${f.producte}</td>
        <td><span class="tag ${catCls[f.categoria] || 'tag-green'}">${f.categoria}</span></td>
        <td>${f.preu.toFixed(2)} €</td>
        <td style="font-weight:700;color:#f5c842">${f.total.toFixed(2)} €</td>
        <td>${f.iva}%</td>
      </tr>`;
  });
}

/* ══════════════════════════════
   MÒBILS A L'AULA
══════════════════════════════ */
function renderMobils() {
  /* Taula */
  const tbody = document.querySelector('#tablaMobils tbody');
  tbody.innerHTML = '';
  DATA.mobils.forEach(d => {
    const cls = d.pct <= 20 ? 'tag-green' : d.pct <= 40 ? 'tag-amber' : 'tag-red';
    const lbl = d.pct <= 20 ? 'Acceptable' : d.pct <= 40 ? 'Elevat' : 'Crític';
    tbody.innerHTML += `
      <tr>
        <td>${d.data}</td>
        <td style="color:#4dc9ff">${d.grup}</td>
        <td>${d.mobils}</td>
        <td>${d.alumnat}</td>
        <td style="font-weight:700">${d.pct.toFixed(2)}%</td>
        <td><span class="tag ${cls}">${lbl}</span></td>
      </tr>`;
  });

  /* Mitjana per grup */
  const grups = ['ASIXc1A', 'ASIXc1B', 'ASIXc1C'];
  const mitjanes = grups.map(g => {
    const vals = DATA.mobils.filter(m => m.grup === g).map(m => m.pct);
    return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2);
  });

  destroyChart('chartMobilsGrup');
  chartInstances['chartMobilsGrup'] = new Chart(document.getElementById('chartMobilsGrup'), {
    type: 'bar',
    data: {
      labels: grups,
      datasets: [
        {
          label: 'Mitjana %',
          data: mitjanes,
          backgroundColor: ['rgba(255,77,109,.6)', 'rgba(45,255,122,.6)', 'rgba(245,200,66,.6)'],
          borderColor:     ['#ff4d6d', '#2dff7a', '#f5c842'],
          borderWidth: 2, borderRadius: 8
        },
        {
          label: 'Objectiu 20%',
          data: [20, 20, 20],
          type: 'line',
          borderColor: 'rgba(255,255,255,.3)', borderDash: [5, 5],
          pointRadius: 0, backgroundColor: 'transparent'
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: {
        x: { grid: { color: 'rgba(30,48,40,.4)' } },
        y: { max: 50, grid: { color: 'rgba(30,48,40,.4)' } }
      }
    }
  });

  /* Evolució temporal */
  const sorted = [...DATA.mobils].sort((a, b) => a.data.localeCompare(b.data));
  const colors = { 'ASIXc1A': '#ff4d6d', 'ASIXc1B': '#2dff7a', 'ASIXc1C': '#f5c842' };
  const datasets = grups.map(g => ({
    label: g,
    data: sorted.filter(m => m.grup === g).map(m => ({ x: m.data, y: m.pct })),
    borderColor: colors[g], backgroundColor: 'transparent',
    tension: .3, pointRadius: 4
  }));

  destroyChart('chartMobilsTemporal');
  chartInstances['chartMobilsTemporal'] = new Chart(document.getElementById('chartMobilsTemporal'), {
    type: 'line',
    data: { datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: {
        x: { type: 'category', grid: { color: 'rgba(30,48,40,.4)' } },
        y: { grid: { color: 'rgba(30,48,40,.4)' } }
      },
      plugins: { legend: { labels: { color: '#d4eed9' } } }
    }
  });
}

/* ══════════════════════════════
   PLA DE REDUCCIÓ 30%
══════════════════════════════ */
function renderPla() {
  destroyChart('chartPla');
  chartInstances['chartPla'] = new Chart(document.getElementById('chartPla'), {
    type: 'line',
    data: {
      labels: ['Inici', 'Any 1 (2026)', 'Any 2 (2027)', 'Any 3 (2028)'],
      datasets: [
        {
          label: 'Consum Energia (kWh/mes)',
          data: [1007, 906, 806, 705],
          borderColor: '#ff4d6d', backgroundColor: 'rgba(255,77,109,.1)',
          fill: true, tension: .4
        },
        {
          label: 'Despesa Total (€/mes)',
          data: [497, 450, 400, 348],
          borderColor: '#f5c842', backgroundColor: 'rgba(245,200,66,.1)',
          fill: true, tension: .4
        },
        {
          label: 'CO₂ Evitat (kg/mes)',
          data: [22, 30, 40, 50],
          borderColor: '#2dff7a', backgroundColor: 'rgba(45,255,122,.1)',
          fill: true, tension: .4
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#d4eed9' } } },
      scales: {
        x: { grid: { color: 'rgba(30,48,40,.4)' } },
        y: { grid: { color: 'rgba(30,48,40,.4)' } }
      }
    }
  });
}

/* ══════════════════════════════
   CALCULADORA · Projecció anual
══════════════════════════════ */
function renderProjections() {
  destroyChart('chartProjections');
  const months   = ['Gen','Feb','Mar','Abr','Mai','Jun','Jul','Ago','Set','Oct','Nov','Des'];
  const seasonal = [1.2, 1.1, 1.0, 0.9, 0.85, 0.8, 0.75, 0.8, 1.0, 1.1, 1.15, 1.25];
  const baseElec = 1007;

  chartInstances['chartProjections'] = new Chart(document.getElementById('chartProjections'), {
    type: 'bar',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Consum Elèctric estimat (kWh)',
          data: seasonal.map(s => Math.round(baseElec * s)),
          backgroundColor: 'rgba(45,255,122,.4)', borderColor: '#2dff7a',
          borderRadius: 6, borderWidth: 1
        },
        {
          label: 'Objectiu -30% (kWh)',
          data: seasonal.map(s => Math.round(baseElec * s * 0.7)),
          backgroundColor: 'rgba(77,201,255,.3)', borderColor: '#4dc9ff',
          borderRadius: 6, borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#d4eed9' } } },
      scales: {
        x: { grid: { color: 'rgba(30,48,40,.4)' } },
        y: { grid: { color: 'rgba(30,48,40,.4)' } }
      }
    }
  });
}

/* ══════════════════════════════
   CALCULADORA · Funcions de càlcul
══════════════════════════════ */
const SEASONAL_ELEC  = [1.20, 1.10, 1.00, 0.90, 0.85, 0.80, 0.75, 0.80, 1.00, 1.10, 1.15, 1.25];
const SEASONAL_AGUA  = [0.80, 0.80, 0.90, 1.00, 1.10, 1.20, 1.30, 1.25, 1.05, 0.95, 0.85, 0.80];
const SCHOOL_MONTHS  = [0, 1, 2, 3, 4, 8, 9, 10, 11]; // set-jun (índex 0-based)

/**
 * Retorna els mesos a calcular segons el selector de tipus.
 * @param {string} prefix - prefix de l'element (elec, agua, cons, net)
 */
function getMesos(prefix) {
  const t    = document.getElementById(`${prefix}-tipus`).value;
  const wrap = document.getElementById(`${prefix}-mesos-wrap`);

  if (t === 'anual') {
    wrap.style.display = 'none';
    return { count: 12, months: [0,1,2,3,4,5,6,7,8,9,10,11] };
  }
  if (t === 'curs') {
    wrap.style.display = 'none';
    return { count: 10, months: SCHOOL_MONTHS };
  }
  // periode personalitzat
  wrap.style.display = 'block';
  const n = parseInt(document.getElementById(`${prefix}-mesos`).value) || 1;
  return { count: n, months: Array.from({ length: n }, (_, i) => i) };
}

/** Mostra el resultat dins el panell corresponent */
function showResult(id, val, unit, sub) {
  const el = document.getElementById('res-' + id);
  el.classList.add('show');
  document.getElementById('res-' + id + '-val').textContent = val + ' ' + unit;
  document.getElementById('res-' + id + '-sub').textContent = sub;
}

/* ── Consum Elèctric ── */
function calcElectric() {
  const base = parseFloat(document.getElementById('elec-base').value) || 1007;
  const hiv  = parseFloat(document.getElementById('elec-hiv').value)  || 20;
  const { months } = getMesos('elec');
  let total = 0;
  months.forEach(m => {
    total += base * SEASONAL_ELEC[m] * (1 + (m >= 9 || m <= 1 ? hiv / 100 : 0));
  });
  showResult('elec',
    Math.round(total).toLocaleString('ca'), 'kWh',
    `Amb estacionalitat hivern +${hiv}%. Equivalent a ~${(total * 0.15).toFixed(0)} € (tarifa 0,15 €/kWh)`
  );
}

/* ── Consum d'Aigua ── */
function calcAigua() {
  const base = parseFloat(document.getElementById('agua-base').value) || 45;
  const est  = parseFloat(document.getElementById('agua-estiu').value) || 15;
  const { months } = getMesos('agua');
  let total = 0;
  months.forEach(m => {
    total += base * SEASONAL_AGUA[m] * (1 + (m >= 5 && m <= 7 ? est / 100 : 0));
  });
  showResult('agua',
    total.toFixed(1), 'm³',
    `Amb cicle estacional. Equivalent a ~${(total * 1.8).toFixed(0)} € (tarifa est. 1,80 €/m³)`
  );
}

/* ── Consumibles d'Oficina ── */
function calcConsumibles() {
  const base = parseFloat(document.getElementById('cons-base').value) || 269;
  const act  = parseFloat(document.getElementById('cons-act').value)  || 25;
  const { months } = getMesos('cons');
  const highActivity = [1, 2, 3, 9, 10]; // febr, març, abr, oct, nov
  let total = 0;
  months.forEach(m => {
    total += base * (1 + (highActivity.includes(m) ? act / 100 : 0));
  });
  showResult('cons',
    total.toFixed(2), '€',
    `Mesos d'alta activitat escolar amb +${act}% de consum`
  );
}

/* ── Productes de Neteja ── */
function calcNeteja() {
  const base = parseFloat(document.getElementById('net-base').value) || 100;
  const est  = parseFloat(document.getElementById('net-est').value)  || 10;
  const { months } = getMesos('net');
  let total = 0;
  months.forEach(m => {
    total += base * (1 + (est / 100) * Math.sin((m + 1) * Math.PI / 12));
  });
  showResult('net',
    total.toFixed(2), '€',
    `Amb variabilitat estacional suau (±${est}%)`
  );
}

/* ── Listener canvi selector tipus ── */
document.querySelectorAll('select[id$="-tipus"]').forEach(sel => {
  sel.addEventListener('change', () => {
    const prefix = sel.id.replace('-tipus', '');
    const wrap   = document.getElementById(`${prefix}-mesos-wrap`);
    wrap.style.display = sel.value === 'periode' ? 'block' : 'none';
  });
});

/* ══════════════════════════════
   INICIALITZACIÓ
══════════════════════════════ */
window.addEventListener('load', () => {
  renderDashboard();
  renderFactures();
});
