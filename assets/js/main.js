// PWA Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('SW Registered', reg))
      .catch(err => console.log('SW Failed', err));
  });
}

// Active Nav Link Highlight
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-item a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href').includes(currentPath.split('/').pop())) {
      link.parentElement.classList.add('active');
    }
  });
});

// Mobile Sidebar Toggle
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const toggle = document.createElement('div');
  toggle.className = 'mobile-toggle';
  toggle.innerHTML = '☰';
  document.body.appendChild(toggle);

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    toggle.innerHTML = sidebar.classList.contains('active') ? '✕' : '☰';
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        sidebar.classList.contains('active') && 
        !sidebar.contains(e.target) && 
        !toggle.contains(e.target)) {
      sidebar.classList.remove('active');
      toggle.innerHTML = '☰';
    }
  });
});

// Mock Data Utils
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(amount);
};
