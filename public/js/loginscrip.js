document.addEventListener('DOMContentLoaded', () => {
    const loginbutton = document.getElementById('loginbutton');
    const loginModal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.closeBtn');

    // เปิดป๊อปอัพเมื่อกดปุ่ม Login
    loginbutton.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    // ปิดป๊อปอัพเมื่อกดปุ่มปิด
    closeBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // ปิดป๊อปอัพเมื่อกดนอกป๊อปอัพ
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
});