// انتظار تحميل المستند
document.addEventListener('DOMContentLoaded', () => {
    // تهيئة المتغيرات
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const skillBars = document.querySelectorAll('.progress-bar');
    const sections = document.querySelectorAll('section');
    const form = document.querySelector('.contact-form');

    // ترجمات النصوص
    const translations = {
        ar: {
            'nav-home': 'الرئيسية',
            'nav-about': 'نبذة عني',
            'nav-experience': 'الخبرات',
            'nav-skills': 'المهارات',
            'nav-certificates': 'الدورات التدريبية',
            'nav-contact': 'تواصل معي',
            'current-lang': 'EN',
            'hero-title': 'هاجر البريقي',
            'hero-subtitle': 'مهندسة اتصالات وإلكترونيات',
            'hero-description': 'حاصلة على درجة البكالوريوس في هندسة الاتصالات من جامعة التقنية والعلوم التطبيقية، بمعدل تراكمي 3.03',
            'download-cv': 'تحميل السيرة الذاتية',
            'objective-title': 'الهدف المهني',
            'objective-text': 'تتميز بالحماس والرغبة القوية في التخطيط والدراسة وحل المشكلات التقنية والإدارية في مجال الاتصالات.',
            'education-title': 'التعليم',
            'education-degree': 'بكالوريوس في هندسة الإلكترونيات والاتصالات',
            'education-institution': 'جامعة التقنية والعلوم التطبيقية، المصنعة',
            'education-year': '2018 - 2023',
            'experience-title': 'الخبرات العملية',
            'experience-omantel-title': 'مهندسة اتصالات - عمانتل',
            'experience-omantel-date': '2023 - الحالي',
            'experience-omantel-detail1': 'العمل في قسم النقل والصيانة والتحويل',
            'experience-omantel-detail2': 'تصميم وتنفيذ حلول شبكات الاتصالات',
            'experience-omantel-detail3': 'صيانة وتحسين أداء الشبكات',
            'experience-huawei-title': 'متدربة - هواوي',
            'experience-huawei-date': '2023',
            'experience-huawei-detail1': 'التدريب على تقنيات شبكات الجيل الخامس 5G',
            'experience-huawei-detail2': 'العمل على مشاريع تطوير البنية التحتية للاتصالات',
            'skills-title': 'المهارات',
            'skills-technical': 'المهارات التقنية',
            'skills-personal': 'المهارات الشخصية',
            'skill-office': 'برامج Microsoft Office',
            'skill-internet': 'تصفح الإنترنت',
            'skill-matlab': 'MATLAB',
            'skill-communication': 'التواصل الفعال',
            'skill-teamwork': 'العمل الجماعي',
            'skill-time': 'الالتزام بالمواعيد',
            'skill-leadership': 'مهارات قيادية',
            'skill-driving': 'رخصة قيادة',
            'languages-title': 'اللغات',
            'lang-arabic': 'العربية: اللغة الأم',
            'lang-english': 'الإنجليزية: مستوى جيد جداً',
            'footer-name': 'هاجر البريقي',
            'footer-description': 'مهندسة اتصالات وإلكترونيات',
            'certificates-title': 'الدورات التدريبية',
            'certificate-plc': 'برمجة وتصميم PLC',
            'certificate-plc-date': '2023',
            'certificate-matlab': 'تصميم وتحليل باستخدام MATLAB',
            'certificate-matlab-date': '2023',
            'certificate-mit': 'MIT Inventor, ThingSpeak, VEX Microcontroller',
            'certificate-mit-date': '2023',
            'certificate-excel': 'أساسيات Microsoft Excel',
            'certificate-excel-date': '2024',
            'contact-title': 'تواصل معي',
            'contact-email-title': 'البريد الإلكتروني',
            'contact-phone-title': 'الهاتف',
            'contact-location-title': 'الموقع',
            'contact-location': 'سلطنة عمان',
            'contact-name': 'الاسم',
            'contact-email': 'البريد الإلكتروني',
            'contact-message': 'الرسالة',
            'contact-submit': 'إرسال',
            'contact-whatsapp': 'تواصل عبر واتساب',
            'contact-email': 'hajar.alburaiqi@example.com',
            'contact-phone': '+968 1234 5678',
            'contact-location': 'سلطنة عمان',
        },
        en: {
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-experience': 'Experience',
            'nav-skills': 'Skills',
            'nav-certificates': 'Training Courses',
            'nav-contact': 'Contact',
            'current-lang': 'عربي',
            'hero-title': 'Hajar Al-Buraiqi',
            'hero-subtitle': 'Communications and Electronics Engineer',
            'hero-description': 'Bachelor\'s degree in Communications Engineering from the University of Technology and Applied Sciences, with a GPA of 3.03',
            'download-cv': 'Download CV',
            'objective-title': 'Professional Objective',
            'objective-text': 'Passionate about planning, studying, and solving technical and administrative problems in the field of communications.',
            'education-title': 'Education',
            'education-degree': 'Bachelor of Electronics and Communications Engineering',
            'education-institution': 'University of Technology and Applied Sciences, Musannah',
            'education-year': '2018 - 2023',
            'experience-title': 'Work Experience',
            'experience-omantel-title': 'Communications Engineer - Omantel',
            'experience-omantel-date': '2023 - Present',
            'experience-omantel-detail1': 'Working in Transport, Maintenance, and Transmission Department',
            'experience-omantel-detail2': 'Design and Implementation of Telecommunications Network Solutions',
            'experience-omantel-detail3': 'Network Maintenance and Performance Optimization',
            'experience-huawei-title': 'Trainee - Huawei',
            'experience-huawei-date': '2023',
            'experience-huawei-detail1': 'Training on 5G Network Technologies',
            'experience-huawei-detail2': 'Working on Telecommunications Infrastructure Development Projects',
            'skills-title': 'Skills',
            'skills-technical': 'Technical Skills',
            'skills-personal': 'Personal Skills',
            'skill-office': 'Microsoft Office Programs',
            'skill-internet': 'Internet Browsing',
            'skill-matlab': 'MATLAB',
            'skill-communication': 'Effective Communication',
            'skill-teamwork': 'Teamwork',
            'skill-time': 'Time Management',
            'skill-leadership': 'Leadership Skills',
            'skill-driving': 'Driving License',
            'languages-title': 'Languages',
            'lang-arabic': 'Arabic: Native',
            'lang-english': 'English: Very Good',
            'footer-name': 'Hajar Al-Buraiqi',
            'footer-description': 'Communications and Electronics Engineer',
            'certificates-title': 'Training Courses',
            'certificate-plc': 'PLC Programming and Design',
            'certificate-plc-date': '2023',
            'certificate-matlab': 'MATLAB Design and Analysis',
            'certificate-matlab-date': '2023',
            'certificate-mit': 'MIT Inventor, ThingSpeak, VEX Microcontroller',
            'certificate-mit-date': '2023',
            'certificate-excel': 'Microsoft Excel Basics',
            'certificate-excel-date': '2024',
            'contact-title': 'Contact Me',
            'contact-email-title': 'Email',
            'contact-phone-title': 'Phone',
            'contact-location-title': 'Location',
            'contact-location': 'Sultanate of Oman',
            'contact-name': 'Name',
            'contact-email': 'Email',
            'contact-message': 'Message',
            'contact-submit': 'Send',
            'contact-whatsapp': 'Contact via WhatsApp',
            'contact-email': 'hajar.alburaiqi@example.com',
            'contact-phone': '+968 1234 5678',
            'contact-location': 'Sultanate of Oman',
        }
    };

    // الحالة الحالية للغة
    let currentLang = 'ar';

    // جعل وظيفة تبديل اللغة متاحة عالمياً
    window.toggleLanguage = function() {
        // Add transition class before changing
        document.body.classList.add('language-transition');
        
        // تبديل اللغة
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        
        // تحديث اتجاه الصفحة
        document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
        
        // Reset animations
        const heroText = document.querySelector('.hero-text');
        const circuitAnimation = document.querySelector('.circuit-animation');
        
        heroText.style.animation = 'none';
        circuitAnimation.style.animation = 'none';
        
        // Force reflow
        void heroText.offsetWidth;
        void circuitAnimation.offsetWidth;
        
        // تحديث النصوص with animation
        document.querySelectorAll('[data-lang]').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = currentLang === 'ar' ? 'translateX(-20px)' : 'translateX(20px)';
            
            setTimeout(() => {
                const key = element.getAttribute('data-lang');
                if (translations[currentLang][key]) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translations[currentLang][key];
                    } else {
                        element.textContent = translations[currentLang][key];
                    }
                }
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
            }, 300);
        });
        
        // Restart animations
        heroText.style.animation = '';
        circuitAnimation.style.animation = '';
        
        // Remove transition class after animation completes
        setTimeout(() => {
            document.body.classList.remove('language-transition');
        }, 500);

        // حفظ تفضيل اللغة
        localStorage.setItem('preferred-language', currentLang);
    };

    // تحميل تفضيل اللغة عند بدء التشغيل
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && savedLang !== currentLang) {
        toggleLanguage();
    }

    // التحكم في شريط التنقل عند التمرير
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    // زر القائمة للأجهزة المحمولة
    let menuOpen = false;
    menuBtn?.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            navLinks.style.display = 'flex';
            navLinks.style.animation = 'slideIn 0.3s forwards';
        } else {
            menuBtn.classList.remove('open');
            navLinks.style.animation = 'slideOut 0.3s forwards';
            setTimeout(() => {
                navLinks.style.display = 'none';
            }, 300);
        }
        menuOpen = !menuOpen;
    });

    // التمرير السلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // إغلاق القائمة في الأجهزة المحمولة
                if (menuOpen) {
                    menuBtn.click();
                }
            }
        });
    });

    // تحريك أشرطة المهارات
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });
    };

    // مراقب التقاطع للتحريكات
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // تحريك أشرطة المهارات عند الوصول إلى قسم المهارات
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
            }
        });
    }, {
        threshold: 0.2
    });

    // إضافة المراقب لجميع الأقسام
    sections.forEach(section => {
        observer.observe(section);
    });

    // معالجة نموذج الاتصال
    form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // جمع البيانات من النموذج
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // إظهار رسالة نجاح (يمكن تعديلها لإرسال البيانات إلى الخادم)
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-check"></i> تم الإرسال بنجاح';
        submitBtn.style.background = '#4CAF50';
        
        // إعادة تعيين النموذج والزر بعد 3 ثوانٍ
        setTimeout(() => {
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
        }, 3000);
    });

    // تأثيرات التحويم للبطاقات
    const cards = document.querySelectorAll('.certificate-card, .timeline-content, .contact-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // تحريك الدائرة الكهربائية
    const circuitAnimation = document.querySelector('.circuit-animation');
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
        
        if (circuitAnimation) {
            circuitAnimation.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        }
    });

    // Circuit Animation
    function initCircuitAnimation() {
        const paths = document.querySelectorAll('.circuit-path');
        const nodes = document.querySelectorAll('.circuit-node');
        
        // Position circuit paths
        paths[0].style.top = '20%';
        paths[0].style.left = '10%';
        paths[0].style.width = '40%';
        paths[0].style.height = '2px';
        
        paths[1].style.top = '60%';
        paths[1].style.right = '10%';
        paths[1].style.width = '30%';
        paths[1].style.height = '2px';
        
        // Position nodes
        nodes[0].style.top = '20%';
        nodes[0].style.left = '10%';
        
        nodes[1].style.top = '60%';
        nodes[1].style.right = '40%';
        
        nodes[2].style.top = '40%';
        nodes[2].style.left = '50%';
        
        // Add random delays to animations
        nodes.forEach(node => {
            node.style.animationDelay = Math.random() * 2 + 's';
        });
    }

    // Initialize circuit animation when DOM is loaded
    initCircuitAnimation();

    // إضافة تأثيرات كتابة تدريجية للنصوص
    const heroText = document.querySelector('.hero-text h1');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        typeWriter();
    }

    // Stars background for dark mode
    function createStars() {
        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars';
        document.body.appendChild(starsContainer);

        // Create multiple stars
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // Random size
            const size = Math.random() * 3;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // Random twinkle duration
            star.style.setProperty('--twinkle-duration', `${2 + Math.random() * 3}s`);
            
            starsContainer.appendChild(star);
        }

        // Add shooting stars
        for (let i = 0; i < 3; i++) {
            const shootingStar = document.createElement('div');
            shootingStar.className = 'shooting-star';
            shootingStar.style.top = `${Math.random() * 50}%`;
            shootingStar.style.animationDelay = `${Math.random() * 4}s`;
            starsContainer.appendChild(shootingStar);
        }
    }

    // Initialize stars on page load
    createStars();
});

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-switch__checkbox');

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.checked = savedTheme === 'dark';

// Theme toggle click handler
themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// تحريكات CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateY(-100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(-100%); opacity: 0; }
    }
    
    .animate {
        animation: fadeInUp 0.6s ease forwards;
        opacity: 0;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

document.head.appendChild(style);

// Form handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            // Here you would typically send the form data to a server
            alert('شكراً لتواصلك! سيتم الرد عليك قريباً.');
            contactForm.reset();
        });
    }
});
