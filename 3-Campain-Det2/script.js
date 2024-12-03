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
function closeDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    const overlay = document.getElementById("overlay");

    if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
        overlay.style.display = "none"; // پنهان کردن overlay
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.icon-down')) {
        closeDropdown();
    }
}
document.querySelector('.dropdown-chart').addEventListener('click', function(event) {
    event.stopPropagation(); // جلوگیری از انتشار رویداد کلیک
    const dropdownMenu = document.querySelector('.dropdown-selector');
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '' ? 'block' : 'none';
});

// بسته شدن منو با کلیک در خارج از آن
document.addEventListener('click', function(event) {
    const dropdownMenu = document.querySelector('.dropdown-selector');
    const imgF = document.querySelector('.dropdown-chart');

    // بررسی اینکه آیا کلیک در خارج از منو و دکمه بازکننده بوده است
    if (!dropdownMenu.contains(event.target) && !imgF.contains(event.target)) {
        dropdownMenu.style.display = 'none'; // بسته شدن منو
    }
});