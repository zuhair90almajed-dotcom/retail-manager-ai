function login(e){e.preventDefault();const u=document.getElementById('username').value.trim();const p=document.getElementById('password').value.trim();if(u==='admin'&&p==='1234'){document.getElementById('login').style.display='none';document.getElementById('app').style.display='grid';document.body.classList.remove('login-body');updateClock()}else{alert('بيانات الدخول غير صحيحة')}}
function logout(){document.getElementById('app').style.display='none';document.getElementById('login').style.display='block';document.body.classList.add('login-body')}
function showPage(id,el){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');document.querySelectorAll('.sidebar a').forEach(a=>a.classList.remove('active'));el.classList.add('active')}
function updateClock(){const n=new Date();const d=['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];document.getElementById('today').textContent=d[n.getDay()]+' '+n.toLocaleDateString('ar-BH');document.getElementById('clock').textContent=n.toLocaleTimeString('ar-BH')}
setInterval(updateClock,1000)
function toggleDark(){document.body.classList.toggle('dark')}
function toggleNotify(){const n=document.getElementById('notify');n.style.display=n.style.display==='none'?'block':'none'}
function quickAction(){alert('الإجراءات السريعة:\n1- إضافة مهمة\n2- إنشاء تقرير\n3- إرسال تنبيه\n4- إضافة موظف')}
function searchSystem(){console.log(document.getElementById('search').value)}
function addTask(){const v=document.getElementById('taskInput').value.trim();if(!v)return;const li=document.createElement('li');li.textContent=v;document.getElementById('taskList').appendChild(li);document.getElementById('taskInput').value=''}
function askAI(){const q=document.getElementById('aiInput').value.trim();if(!q)return;let a='حسب البيانات التجريبية، يوصى بزيارة فرع سترة بسبب نقص المشروبات وانخفاض الأداء.';if(q.includes('مبيعات'))a='مبيعات اليوم BD 34,250 وأفضل فرع هو الجنبية.';if(q.includes('مخزون'))a='يوجد نقص في مياه نستله، الكمية الحالية 12 فقط.';document.getElementById('chat').innerHTML+='\n\n👤 '+q+'\n🤖 '+a;document.getElementById('aiInput').value=''}
function toggleNotifications(){

    const panel = document.getElementById("notificationPanel");

    if(panel.style.display==="none"){
        panel.style.display="block";
    }else{
        panel.style.display="none";
    }

}
