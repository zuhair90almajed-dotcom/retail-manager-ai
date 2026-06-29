function login(event){
  event.preventDefault();

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if(user === "admin" && pass === "1234"){
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "grid";
    document.body.classList.remove("login-body");
    updateClock();
  }else{
    alert("بيانات الدخول غير صحيحة");
  }
}

function logout(){
  document.getElementById("app").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.body.classList.add("login-body");
}

function toggleMenu(){
  document.getElementById("sidebar").classList.toggle("open");
}

document.querySelectorAll(".nav a").forEach(link=>{
  link.addEventListener("click",function(e){
    e.preventDefault();

    document.querySelectorAll(".nav a").forEach(a=>a.classList.remove("active"));
    this.classList.add("active");

    const page = this.dataset.page;
    document.querySelectorAll(".page").forEach(section=>section.classList.remove("active"));
    document.getElementById(page).classList.add("active");

    document.getElementById("sidebar").classList.remove("open");
  });
});

function addTask(){
  alert("تمت إضافة مهمة تجريبية. في النسخة القادمة سنحفظها في قاعدة البيانات.");
}

function aiAsk(){
  const input = document.getElementById("aiInput");
  const chat = document.getElementById("chat");
  const text = input.value.trim();

  if(!text) return;

  chat.innerHTML += `<div class="msg user">${text}</div>`;

  let answer = "حسب البيانات التجريبية، يوصى بمتابعة فرع سترة اليوم بسبب نقص قسم المشروبات وانخفاض الأداء مقارنة بالأمس.";

  if(text.includes("زيارة")){
    answer = "أقترح زيارة فرع سترة أولاً، ثم دمستان. السبب: تنبيهات مخزون ومرتجعات.";
  }

  if(text.includes("مبيعات")){
    answer = "مبيعات اليوم BD 34,250 وهي أعلى من أمس بنسبة 8%. أفضل فرع هو الجنبية.";
  }

  if(text.includes("مخزون")){
    answer = "يوجد نقص في مياه نستله بقسم المشروبات، والكمية الحالية 12 فقط.";
  }

  chat.innerHTML += `<div class="msg bot">${answer}</div>`;
  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}

function updateClock(){
  const now = new Date();

  const days = [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت"
  ];

  const dateEl = document.getElementById("todayDate");
  const clockEl = document.getElementById("clock");

  if(dateEl){
    dateEl.innerHTML = days[now.getDay()] + " " + now.toLocaleDateString("ar-BH");
  }

  if(clockEl){
    clockEl.innerHTML = now.toLocaleTimeString("ar-BH");
  }
}

setInterval(updateClock,1000);

function toggleDarkMode(){
  document.body.classList.toggle("dark");
}

setInterval(function(){
  const lastUpdate = document.getElementById("lastUpdate");
  if(lastUpdate){
    lastUpdate.innerHTML = "قبل لحظات";
  }
},5000);

function toggleNotifications(){
  const box = document.getElementById("notificationsBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

function quickAction(){
  alert("الإجراءات السريعة:\n\n1- إضافة مهمة\n2- إنشاء تقرير\n3- إرسال تنبيه\n4- إضافة موظف");
}

function globalSearch(){
  const value = document.getElementById("globalSearch").value.trim();

  if(value.length > 0){
    console.log("Searching for:", value);
  }
}
