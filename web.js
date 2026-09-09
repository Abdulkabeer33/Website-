// script.js — shared across all pages
(function() {
  // ----- MOBILE MENU TOGGLE -----
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('nav ul');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      nav.classList.toggle('open');
    });
    // close on link click (optional)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
  }

  // ----- DARK MODE TOGGLE -----
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      // optional: store preference in localStorage
      const isDark = document.body.classList.contains('dark-mode');
      themeToggle.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('studyhub-theme', isDark ? 'dark' : 'light');
    });
    // load saved preference
    const saved = localStorage.getItem('studyhub-theme');
    if (saved === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggle.textContent = '☀️';
    } else {
      themeToggle.textContent = '🌙';
    }
  }

  // ----- HOME: show/hide mantra (index.html) -----
  const showMsgBtn = document.getElementById('showMsgBtn');
  const extraMsg = document.getElementById('extraMessage');
  if (showMsgBtn && extraMsg) {
    showMsgBtn.addEventListener('click', function() {
      extraMsg.classList.toggle('visible');
      showMsgBtn.textContent = extraMsg.classList.contains('visible') 
        ? '🙈 Hide mantra' 
        : '📢 Show study mantra';
    });
  }

  // ----- RESOURCES: show/hide extra tips (resources.html) -----
  const toggleTipsBtn = document.getElementById('toggleTipsBtn');
  const extraTips = document.getElementById('extraTips');
  if (toggleTipsBtn && extraTips) {
    toggleTipsBtn.addEventListener('click', function() {
      extraTips.classList.toggle('visible');
      toggleTipsBtn.textContent = extraTips.classList.contains('visible') 
        ? '💡 Hide extra tips' 
        : '💡 Show extra tips';
    });
  }

  // ----- CONTACT FORM VALIDATION (contact.html) -----
  const contactForm = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  if (contactForm && feedback) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Simple validation: none empty
      if (!name || !email || !message) {
        feedback.textContent = '⚠️ Please fill in all fields.';
        feedback.style.color = '#dc2626';
        return;
      }
      // basic email check (contains @ and .)
      if (!email.includes('@') || !email.includes('.')) {
        feedback.textContent = '⚠️ Please enter a valid email address.';
        feedback.style.color = '#dc2626';
        return;
      }

      feedback.textContent = '✅ Thanks, your message was sent! (demo)';
      feedback.style.color = '#16a34a';
      contactForm.reset();
    });
  }
})();