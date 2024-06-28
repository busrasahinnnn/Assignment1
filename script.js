function showSection(event, sectionId) {
    event.preventDefault(); // Prevent the default anchor link behavior
    var sections = document.querySelectorAll('.hobby-section');
    sections.forEach(function (section) {
        // Hide all sections
        section.style.display = 'none';
    });
    // Show the clicked section
    document.getElementById(sectionId).style.display = 'block';
    // Uncheck the toggle checkbox to hide the menu after clicking
    document.getElementById('tab-toggle').checked = false;
}

// Show the home section by default when the page loads
document.addEventListener('DOMContentLoaded', function () {
    showSection(null, 'home');
});

// Add event listener for tab links
document.querySelectorAll('.tab-link').forEach(function (link) {
    link.addEventListener('click', function (event) {
        var sectionId = event.target.getAttribute('href').substring(1);
        showSection(event, sectionId);
    });
});
