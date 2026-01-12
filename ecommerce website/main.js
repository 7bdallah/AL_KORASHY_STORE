document.addEventListener("DOMContentLoaded", () => {
    // أنيميشن كروت لماذا نحن
    gsap.from(".about-card", {
        scrollTrigger: {
            trigger: ".about-grid",
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });

    // القائمة في الموبايل
    const menu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('#nav-menu');

    menu.addEventListener('click', () => {
        menu.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    });

    // إغلاق القائمة عند الضغط على رابط
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('is-active');
            navLinks.classList.remove('active');
        });
    });
});

// وظيفة الواتساب
function sendToWhatsApp() {
    const myNumber = "201018048893"; 
    const name = document.getElementById('custName').value;
    const product = document.getElementById('custProduct').value;
    const msg = document.getElementById('custMsg').value;

    if (!name || !product) {
        alert("أكمل البيانات أولاً يا بطل!");
        return;
    }

    const message = `طلب جديد من: ${name}%0Aالمنتج: ${product}%0Aالتفاصيل: ${msg}`;
    window.open(`https://wa.me/${myNumber}?text=${message}`, '_blank');
}
// كود التبديل بين الوضع الليلي والنهاري
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// التحقق من اختيار المستخدم السابق (إذا كان قد زار الموقع من قبل)
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.textContent = '☀️'; // تغيير الأيقونة لشمس
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = '🌙';
    }
});