
document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu-btn'), nav=document.querySelector('.nav');
 if(menu&&nav) menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 // Password checker: runs locally only; deliberately no network, storage or logging.
 const pw=document.querySelector('#password-input');
 if(pw){pw.addEventListener('input',()=>{const s=pw.value;let score=0; if(s.length>=14)score++;if(/[a-z]/.test(s)&&/[A-Z]/.test(s))score++;if(/\d/.test(s))score++;if(/[^A-Za-z0-9]/.test(s))score++;if(s.length>=20)score++;const labels=['Vrlo slabo','Slabo','Osnovno','Dobro','Vrlo dobro','Snažno'];const pct=[0,20,40,60,80,100][score];document.querySelector('#pw-meter').style.width=pct+'%';document.querySelector('#pw-label').textContent=s?labels[score]:'Unesi probni niz za procjenu';document.querySelector('#pw-result').style.display=s?'block':'none';});}
 // Business checklist
 const checklist=document.querySelector('#business-checklist');
 if(checklist){const update=()=>{const boxes=[...checklist.querySelectorAll('input[type=checkbox]')];const done=boxes.filter(x=>x.checked).length;const pct=Math.round(done/boxes.length*100);document.querySelector('#check-score').textContent=`${done} od ${boxes.length} mjera (${pct}%)`;document.querySelector('#check-meter').style.width=pct+'%';document.querySelector('#check-result').style.display='block';};checklist.addEventListener('change',update);}
 // Phishing quiz
 const quiz=document.querySelector('#phishing-quiz');
 if(quiz){quiz.querySelectorAll('[data-correct]').forEach(btn=>btn.addEventListener('click',()=>{quiz.querySelectorAll('button').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');const result=quiz.querySelector('#quiz-result');result.style.display='block';result.textContent=btn.dataset.correct==='true'?'Točno. Ne otvaraj poveznicu iz neočekivane poruke. Provjeri pošiljatelja neovisnim kanalom i otvori službenu stranicu ručnim upisom adrese.':'Nije najbolji izbor. Kod sumnjive poruke ne klikaj poveznice niti otvaraj privitke. Provjeri zahtjev drugim, pouzdanim kanalom.';}));}
 // Contact form prototype: do not transmit or store visitor data before a real endpoint is configured.
 const form=document.querySelector('#contact-form');
 if(form){form.addEventListener('submit',e=>{e.preventDefault();const status=document.querySelector('#contact-status');if(status){status.style.display='block';status.textContent='Obrazac je pripremljen kao prototip. Slanje će biti aktivirano nakon povezivanja potvrđene kontaktne adrese ili sigurnog obrasca.';}});}
});
