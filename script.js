// Año en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const navToggle = document.getElementById('navToggle');
const menu = document.getElementById('menu');
navToggle?.addEventListener('click', () => {
  menu.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// Scroll reveal básico
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.animationPlayState = 'running';
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});

// Formulario de contacto (demo)
function handleContact(e){
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  alert(`¡Gracias ${data.nombre}! Te escribo a ${data.email} pronto.`);
  e.target.reset();
  return false;
}
window.handleContact = handleContact;

// Canvas ruido sutil (fondo)
const c = document.getElementById('bg-noise');
const ctx = c.getContext('2d');
function resize(){ c.width = innerWidth; c.height = innerHeight; }
addEventListener('resize', resize); resize();

function noise(){
  const id = ctx.createImageData(c.width, c.height);
  const b = id.data;
  for(let i=0;i<b.length;i+=4){
    const v = 10 + Math.random()*20; // brillo bajo
    b[i]=b[i+1]=b[i+2]=v; b[i+3]=35; // alpha sutil
  }
  ctx.putImageData(id, 0, 0);
}
noise();
