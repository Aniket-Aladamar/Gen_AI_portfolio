document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Fetch form data
        const formData = new FormData(form);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Send form data (You can replace this with your own logic, like sending data using AJAX)
        console.log('Form data:', formDataObject);
        
        // Reset form fields
        form.reset();
    });
});
