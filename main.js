document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        
        dropdown.addEventListener('mouseenter', function() {
            dropdownContent.classList.add('dropdown-content-show');
        });

        dropdown.addEventListener('mouseleave', function() {
            dropdownContent.classList.remove('dropdown-content-show');
        });
    });
});