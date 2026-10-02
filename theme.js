// theme.js
const themeToggle = document.querySelector('#theme-btn');

// Khôi phục trạng thái chủ đề từ localStorage khi tải lại trang
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggle.setAttribute('aria-pressed', 'true');
}

// Xử lý sự kiện click để chuyển đổi chủ đề mà không gây ra lỗi console
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  const isDark = document.body.classList.contains('dark-theme');
  themeToggle.setAttribute('aria-pressed', isDark);
  
  // Lưu trữ trạng thái thông qua localStorage bằng khóa 'theme'
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});