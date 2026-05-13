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

// Mock Data Utils
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(amount);
};
