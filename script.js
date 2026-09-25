document.addEventListener('DOMContentLoaded',()=>{
 const body=document.body,menu=document.querySelector('#primary-menu'),openBtn=document.querySelector('#menu-open-button'),closeBtn=document.querySelector('#menu-close-button'),links=document.querySelectorAll('.nav-link'),back=document.querySelector('#back-to-top'),form=document.querySelector('#contact-form'),status=document.querySelector('#form-status');
 document.querySelector('#current-year').textContent=new Date().getFullYear();
 const setMenu=open=>{menu.classList.toggle('open',open);body.classList.toggle('menu-open',open);openBtn.setAttribute('aria-expanded',String(open));};
 openBtn.addEventListener('click',()=>setMenu(true));closeBtn.addEventListener('click',()=>setMenu(false));links.forEach(l=>l.addEventListener('click',()=>setMenu(false)));menu.addEventListener('click',e=>{if(e.target===menu)setMenu(false)});document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
 const sections=document.querySelectorAll('main section[id]');
 const updateActive=()=>{let id='home',pos=scrollY+140;sections.forEach(s=>{if(pos>=s.offsetTop)id=s.id});links.forEach(l=>{const active=l.getAttribute('href')===`#${id}`;l.classList.toggle('active',active);active?l.setAttribute('aria-current','page'):l.removeAttribute('aria-current')})};
 const updateTop=()=>back.classList.toggle('show',scrollY>500);window.addEventListener('scroll',()=>{updateActive();updateTop()},{passive:true});back.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
 const reveals=document.querySelectorAll('.reveal');if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});reveals.forEach(e=>io.observe(e))}else reveals.forEach(e=>e.classList.add('visible'));
 form.addEventListener('submit',e=>{e.preventDefault();if(!form.checkValidity()){form.reportValidity();return}status.textContent='Thanks! The demo form is working on the page. Connect it to a backend or form service to receive messages.';status.style.color='#3b141c';form.reset()});
 updateActive();updateTop();
});
