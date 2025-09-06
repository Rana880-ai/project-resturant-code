
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenu.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Sticky Navbar
    window.addEventListener('scroll', function() {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 100) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (navMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
          }
        }
      });
    });
    
    // Booking Modal Elements
    const bookTableBtn = document.getElementById('book-table-btn');
    const bookTableHeroBtn = document.getElementById('book-table-hero-btn');
    const bookingModal = document.getElementById('booking-modal');
    const closeModal = document.getElementById('close-modal');
    const bookingForm = document.getElementById('booking-form');
    
    // Open Booking Modal
    function openBookingModal() {
      bookingModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    
    // Close Booking Modal
    function closeBookingModal() {
      bookingModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
    
    // Click Events
    bookTableBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openBookingModal();
    });
    
    bookTableHeroBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openBookingModal();
    });
    
    closeModal.addEventListener('click', closeBookingModal);
    
    // Close modal when clicking outside
    bookingModal.addEventListener('click', function(e) {
      if (e.target === bookingModal) {
        closeBookingModal();
      }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && bookingModal.classList.contains('active')) {
        closeBookingModal();
      }
    });
    
    // Form Submission
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const guests = document.getElementById('guests').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      
      // Simple validation
      if (!name || !email || !phone || !guests || !date || !time) {
        alert('Please fill in all required fields');
        return;
      }
      
      // Format date for display
      const formattedDate = new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Show confirmation message
      alert(`Thank you, ${name}! Your reservation for ${guests} guests on ${formattedDate} at ${time} has been received. We will contact you at ${email} or ${phone} to confirm.`);
      
      // Reset form and close modal
      bookingForm.reset();
      closeBookingModal();
    });
    
    // Set minimum date for booking to tomorrow
    const dateInput = document.getElementById('date');
    if (dateInput) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowFormatted = tomorrow.toISOString().split('T')[0];
      dateInput.setAttribute('min', tomorrowFormatted);
    }
