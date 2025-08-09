// Menú móvil
const navToggle = document.getElementById('navToggle');
const menu = document.getElementById('menu');
navToggle?.addEventListener('click', () => menu.classList.toggle('open'));

// Año en footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contacto (demo)
function handleContact(e){
  e.preventDefault();
  alert('¡Gracias! Te responderé a la brevedad.');
  e.target.reset();
  return false;
}

// LIGHTBOX simple
const lightbox   = document.getElementById('lightbox');
const lbImg      = document.getElementById('lightboxImg');
const lbCap      = document.getElementById('lightboxCap');
const lbClose    = document.getElementById('lightboxClose');

document.querySelectorAll('.shot-img').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const img = el.querySelector('img');
    if (!img) return;
    lbImg.src = img.src;
    lbCap.textContent = img.alt || '';
    lightbox.classList.add('open');
  });
});
lbClose?.addEventListener('click', ()=> lightbox.classList.remove('open'));
lightbox?.addEventListener('click', (e)=>{
  if(e.target === lightbox) lightbox.classList.remove('open');
});

// Fondo ruido (suave)
const c = document.getElementById('bg-noise');
if (c) {
  const ctx = c.getContext('2d');
  const resize = ()=>{
    c.width = innerWidth; c.height = innerHeight;
    const imgData = ctx.createImageData(c.width, c.height);
    for(let i=0;i<imgData.data.length;i+=4){
      const v = 240 + (Math.random()*15|0);
      imgData.data[i]=imgData.data[i+1]=imgData.data[i+2]=v;
      imgData.data[i+3]=15; // alpha bajo
    }
    ctx.putImageData(imgData,0,0);
  };
  addEventListener('resize', resize, {passive:true});
  resize();
}
