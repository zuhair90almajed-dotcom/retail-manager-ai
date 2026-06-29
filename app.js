const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav a');
function showPage(id){pages.forEach(p=>p.classList.remove('active'));document.getElementById(id)?.classList.add('active');navLinks.forEach(a=>a.classList.toggle('active',a.dataset.page===id));window.scrollTo(0,0)}
navLinks.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();showPage(a.dataset.page);document.querySelector('.sidebar')?.classList.remove('open')}));
function toggleMenu(){document.querySelector('.sidebar').classList.toggle('open')}
function login(e){e.preventDefault();const u=document.getElementById('username').value.trim();const p=document.getElementById('password').value.trim();if(u==='admin'&&p==='1234'){document.body.className='';document.getElementById('login').style.display='none';document.getElementById('app').style.display='grid';showPage('dashboard')}else alert('بيانات الدخول غير صحيحة. جرّب admin / 1234')}
function logout(){location.reload()}
function addTask(){alert('نسخة تجريبية: سيتم ربط إضافة المهام بقاعدة بيانات لاحقاً.')}
function aiAsk(){const input=document.getElementById('aiInput');const chat=document.getElementById('chat');if(!input.value.trim())return;chat.innerHTML += `<div class="msg user">${input.value}</div>`;chat.innerHTML += `<div class="msg bot">تحليل تجريبي: يوصى بمتابعة فرع سترة اليوم بسبب نقص المشروبات وارتفاع المرتجعات. النسخة القادمة ستربط التحليل ببيانات حقيقية.</div>`;input.value='';chat.scrollTop=chat.scrollHeight}
function updateClock(){

const now=new Date();

const days=[
"الأحد",
"الاثنين",
"الثلاثاء",
"الأربعاء",
"الخميس",
"الجمعة",
"السبت"
];

document.getElementById("todayDate").innerHTML=
days[now.getDay()]+" "+
now.toLocaleDateString("ar-BH");

document.getElementById("clock").innerHTML=
now.toLocaleTimeString("ar-BH");

}

setInterval(updateClock,1000);

updateClock();

function toggleDarkMode(){

document.body.classList.toggle("dark");

}

setInterval(function(){

document.getElementById("lastUpdate").innerHTML="قبل لحظات";

},5000);
