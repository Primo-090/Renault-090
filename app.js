const seed = [
  {section:'LCIF', category:'Mangueras y conducción', name:'Mangueras 25 mm', location:'LCIF', requiredQty:25, currentQty:25, status:'Operativo', notes:'Incluye 1 tramo corto'},
  {section:'LCIF', category:'Mangueras y conducción', name:'Mangueras 45 mm', location:'Arriba 4 / Abajo 4', requiredQty:8, currentQty:8, status:'Operativo', notes:''},
  {section:'LCIF', category:'Mangueras y conducción', name:'Mangueras 70 mm', location:'Arriba 2 / Abajo 1', requiredQty:3, currentQty:3, status:'Operativo', notes:''},
  {section:'LCIF', category:'Racores y reducciones', name:'Reducciones 45/25', location:'LCIF', requiredQty:2, currentQty:2, status:'Operativo', notes:''},
  {section:'LCIF', category:'Racores y reducciones', name:'Reducción 70/45', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Equipos intervención', name:'Antorcha', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Equipos intervención', name:'Lanza espumógeno', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Equipos intervención', name:'Motosierra', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:'Zahones, orejeras, gafas, guantes y botas'},
  {section:'LCIF', category:'Kit motosierra', name:'Cadenas de repuesto', location:'Kit motosierra', requiredQty:2, currentQty:2, status:'Operativo', notes:''},
  {section:'LCIF', category:'Kit motosierra', name:'Llaves bujías', location:'Kit motosierra', requiredQty:2, currentQty:2, status:'Operativo', notes:''},
  {section:'LCIF', category:'Kit motosierra', name:'Cepillos', location:'Kit motosierra', requiredQty:2, currentQty:2, status:'Operativo', notes:''},
  {section:'LCIF', category:'Kit motosierra', name:'Lima', location:'Kit motosierra', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Kit motosierra', name:'Correctores de afilar', location:'Kit motosierra', requiredQty:2, currentQty:2, status:'Operativo', notes:''},
  {section:'LCIF', category:'Kit motosierra', name:'Boca de motobomba', location:'Kit motosierra', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Logística', name:'Garrafa 5L + embudo', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Equipos intervención', name:'Mochila extintora', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Logística', name:'Eslinga fina', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Racores y reducciones', name:'Trituración 70×2-45', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Racores y reducciones', name:'Trituración 45×2-25', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Racores y reducciones', name:'Reducción mangote 110/70', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Equipos intervención', name:'Manguera espumógeno', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Logística', name:'Pasacables', location:'LCIF', requiredQty:2, currentQty:2, status:'Operativo', notes:''},
  {section:'LCIF', category:'Herramientas forestales', name:'McLeod', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Herramientas forestales', name:'Maza', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Herramientas forestales', name:'Pata de cabra', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Herramientas forestales', name:'Cizalla', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Herramientas forestales', name:'Palas', location:'LCIF', requiredQty:4, currentQty:4, status:'Operativo', notes:''},
  {section:'LCIF', category:'Herramientas forestales', name:'Palín forestal', location:'LCIF', requiredQty:2, currentQty:2, status:'Operativo', notes:''},
  {section:'LCIF', category:'Herramientas forestales', name:'Azadas', location:'LCIF', requiredQty:2, currentQty:2, status:'Operativo', notes:''},
  {section:'LCIF', category:'Herramientas forestales', name:'Batefuegos', location:'LCIF', requiredQty:2, currentQty:2, status:'Operativo', notes:''},
  {section:'LCIF', category:'Herramientas forestales', name:'Podón', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Herramientas forestales', name:'Hacha dos manos', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Herramientas forestales', name:'Pulaski', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Herramientas forestales', name:'Tijeras poda', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Herramientas forestales', name:'Sierra de arco', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Mangueras y conducción', name:'Mangotes 110', location:'LCIF', requiredQty:4, currentQty:4, status:'Operativo', notes:''},
  {section:'LCIF', category:'Logística', name:'Mochilas portamangueras', location:'LCIF', requiredQty:4, currentQty:4, status:'Operativo', notes:''},
  {section:'LCIF', category:'Mangueras y conducción', name:'Filtro aspiración 110', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Logística', name:'Trípode foco', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Equipos intervención', name:'Garrafa espumógeno', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Racores y reducciones', name:'Acortinador 25', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'LCIF', category:'Racores y reducciones', name:'Acortinador 45', location:'LCIF', requiredQty:1, currentQty:1, status:'Operativo', notes:''},
  {section:'Inundaciones', category:'Pendiente de rellenar', name:'Mangotes 110', location:'Inundaciones', requiredQty:0, currentQty:0, status:'Pendiente revisión', notes:'Pendiente concretar cantidad'},
  {section:'Inundaciones', category:'Pendiente de rellenar', name:'Mangotes 70', location:'Inundaciones', requiredQty:0, currentQty:0, status:'Pendiente revisión', notes:'Pendiente concretar cantidad'},
  {section:'Inundaciones', category:'Pendiente de rellenar', name:'Motobomba', location:'Inundaciones', requiredQty:0, currentQty:0, status:'Pendiente revisión', notes:'Pendiente concretar modelo/cantidad'},
  {section:'Taquilla de parque', category:'Material intercambiable', name:'Salero', location:'Taquilla de parque', requiredQty:1, currentQty:1, status:'Operativo', notes:'Material para sustituir mochila de la autobomba cuando proceda'},
  {section:'Taquilla de parque', category:'Material intercambiable', name:'Mochila de la autobomba', location:'Taquilla de parque / Autobomba', requiredQty:1, currentQty:1, status:'Pendiente revisión', notes:'Registrar si se cambia por salero'},
  {section:'Taquilla de parque', category:'Pendiente de rellenar', name:'Material pendiente de añadir', location:'Taquilla de parque', requiredQty:0, currentQty:0, status:'Pendiente revisión', notes:'Apartado preparado para completar'}
];
let data = JSON.parse(localStorage.getItem('autobombaData') || 'null') || seed;
let currentSection = 'LCIF';
const save = () => localStorage.setItem('autobombaData', JSON.stringify(data));
function render(){
  const q = document.getElementById('search').value.toLowerCase();
  const filtered = data.filter(x => x.section === currentSection && (x.name+x.location+x.category+x.notes).toLowerCase().includes(q));
  const faltas = filtered.filter(x => Number(x.currentQty) < Number(x.requiredQty) || ['Falta','Dañado','Caducado'].includes(x.status)).length;
  document.getElementById('summary').innerHTML = `<strong>${currentSection}</strong> <span class="pill">${filtered.length} elementos</span> <span class="pill">${faltas} incidencias</span>`;
  document.getElementById('items').innerHTML = filtered.map((x,i)=>{
    const idx = data.indexOf(x);
    const cls = Number(x.currentQty)<Number(x.requiredQty) || x.status==='Falta' ? 'bad' : (x.status==='Pendiente revisión'||x.status==='Dañado'||x.status==='Caducado' ? 'warn' : '');
    return `<article class="item ${cls}"><h3>${x.name}</h3><div class="meta"><div><b>Categoría:</b> ${x.category||'-'}</div><div><b>Ubicación:</b> ${x.location||'-'}</div><div><b>Obligatorio:</b> ${x.requiredQty}</div><div><b>Actual:</b> ${x.currentQty}</div><div><b>Estado:</b> ${x.status}</div><div><b>Obs.:</b> ${x.notes||'-'}</div></div><div class="actions"><button class="ok" onclick="markOk(${idx})">OK</button><button class="muted" onclick="editItem(${idx})">Editar</button><button class="danger" onclick="deleteItem(${idx})">Borrar</button></div></article>`
  }).join('') || '<p>No hay material en este apartado todavía.</p>';
}
  const save = () => {
  localStorage.setItem('autobomba', JSON.stringify(data));
};

function addItem(){
  const name = document.getElementById('name').value;
  const location = document.getElementById('location').value;
  const requiredQty = document.getElementById('requiredQty').value;
  const currentQty = document.getElementById('currentQty').value;
  const status = document.getElementById('status').value;

  data.push({
    section: currentSection,
    category: 'Añadido',
    name,
    location,
    requiredQty,
    currentQty,
    status
  });

  save();
  render();
}
function markOk(i){data[i].currentQty=data[i].requiredQty;data[i].status='Operativo';save();render();}
function deleteItem(i){if(confirm('¿Borrar este material?')){data.splice(i,1);save();render();}}
function editItem(i){const x=data[i]; const v=prompt('Cantidad actual:', x.currentQty); if(v!==null){x.currentQty=Number(v); x.status = x.currentQty < x.requiredQty ? 'Falta' : 'Operativo'; save(); render();}}
function csv(){
  const rows=[['Apartado','Categoria','Material','Ubicacion','Cantidad obligatoria','Cantidad actual','Estado','Observaciones'], ...data.map(x=>[x.section,x.category,x.name,x.location,x.requiredQty,x.currentQty,x.status,x.notes])];
  const content=rows.map(r=>r.map(c=>'"'+String(c).replaceAll('"','""')+'"').join(';')).join('\n');
  const blob=new Blob([content],{type:'text/csv;charset=utf-8'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='inventario-autobomba.csv'; a.click();
}
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));b.classList.add('active');currentSection=b.dataset.section;render();});
document.getElementById('addItem').onclick=addItem; document.getElementById('search').oninput=render; document.getElementById('exportCsv').onclick=csv; document.getElementById('resetData').onclick=()=>{if(confirm('Restaurar datos iniciales?')){data=seed;save();render();}};
if('serviceWorker' in navigator){navigator.serviceWorker.register('./sw.js').catch(()=>{});} render();
let relevos = [];

function mostrarRelevo() {
  document.getElementById("relevo").style.display = "block";
}

function guardarRelevo() {
  const fecha = new Date().toLocaleString();
  const entrega = document.getElementById("entrega").value;
  const recibe = document.getElementById("recibe").value;
  const obs = document.getElementById("obs").value;

  relevos.push({ fecha, entrega, recibe, obs });

  alert("Relevo guardado");
}

function exportarCSV() {
  let csv = "Fecha,Entrega,Recibe,Observaciones\n";

  relevos.forEach(r => {
    csv += `${r.fecha},${r.entrega},${r.recibe},${r.obs}\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "relevos.csv";
  a.click();
}
