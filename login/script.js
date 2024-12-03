  // JavaScript برای تغییر نوع ورودی
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');
  const toggleIcon = document.getElementById('toggleIcon');

  togglePassword.addEventListener('click', function () {
      // تغییر نوع ورودی بین password و text
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      
      // تغییر آیکون
      toggleIcon.src = type === 'password' ? './assets/images/view.png' : './assets/images/hide.png'; // تصاویر برای نمایش و مخفی کردن
  });