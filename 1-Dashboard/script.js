// script.js
document.getElementById('searchInput').addEventListener('input', function() {
    if (this.value.length > 0) {
        this.placeholder = ''; // حذف placeholder
    } else {
        this.placeholder = 'جستجو...'; // بازگردانی placeholder در صورت خالی بودن
    }
});

function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    const overlay = document.getElementById("overlay");
    
    dropdown.classList.toggle("show");
    overlay.style.display = dropdown.classList.contains("show") ? "block" : "none"; // نمایش یا پنهان کردن overlay
}

// بسته شدن منو وقتی کاربر در خارج از آن کلیک کند
document.querySelector('.chart-dropdown-box').addEventListener('click', function() {
    const menu = document.querySelector('.chart-dropdown-menu');
    menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
});
document.addEventListener('click', function(event) {
    const dropdownMenu = document.querySelector('.chart-dropdown-menu');
    const imgF = document.querySelector('.chart-dropdown-box');

    // بررسی اینکه آیا کلیک در خارج از منو و دکمه بازکننده بوده است
    if (!dropdownMenu.contains(event.target) && !imgF.contains(event.target)) {
        dropdownMenu.style.display = 'none'; // بسته شدن منو
    }
});