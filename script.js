function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Add active class to clicked button
    event.target.classList.add('active');

    // Smooth scroll to top of page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}