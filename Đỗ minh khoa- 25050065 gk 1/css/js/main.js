document.addEventListener('DOMContentLoaded', () => {

    // 1. MOBILE MENU TOGGLE
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Tự đóng menu khi click vào một link bất kỳ
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. DARK MODE / LIGHT MODE TOGGLE
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');

    // Kiểm tra theme lưu trong LocalStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    });

    // 3. SCROLL TO TOP BUTTON
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 4. FORM VALIDATION
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Ngăn submit mặc định

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');
        const successMsg = document.getElementById('form-success');

        let isValid = true;

        // Reset thông báo lỗi
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        successMsg.textContent = '';

        // Validate Name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Vui lòng nhập họ và tên.';
            isValid = false;
        }

        // Validate Email (Dùng Regex đơn giản)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Vui lòng nhập email.';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Email không hợp lệ.';
            isValid = false;
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Vui lòng nhập nội dung lời nhắn.';
            isValid = false;
        }

        // Nếu tất cả hợp lệ
        if (isValid) {
            successMsg.textContent = 'Gửi tin nhắn thành công! Cảm ơn bạn.';
            contactForm.reset();
        }
    });

});