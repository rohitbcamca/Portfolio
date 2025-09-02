document.addEventListener('DOMContentLoaded', function () {

    // Basic required-fields check for contact form
    var contactForm = document.querySelector('.contform');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            var requiredFields = contactForm.querySelectorAll('input[required], textarea[required]');
            for (var i = 0; i < requiredFields.length; i++) {
                var field = requiredFields[i];
                if (!field.value || !field.value.trim()) {
                    event.preventDefault();
                    alert('Please fill all required fields.');
                    field.focus();
                    return;
                }
            }

            // Basic email format check
            var emailInput = contactForm.querySelector('input[type="email"]');
            if (emailInput && emailInput.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
                event.preventDefault();
                alert('Please enter a valid email address.');
                emailInput.focus();
                return;
            }
        });
    }
});

 