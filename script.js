document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        // Toggle the "expanded" class to make the box expand or collapse
        this.classList.toggle('expanded');
        
        // Optionally change the background color when a color option is selected
        const colorOptions = this.querySelectorAll('.color-option');
        colorOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Change the box background color to the selected color
                box.style.backgroundColor = this.style.backgroundColor;
            });
        });
        
        // Handle size options
        const sizeButtons = this.querySelectorAll('.size-options button');
        sizeButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Dynamically adjust the box size based on the selected size
                if (button.textContent === 'Small') {
                    box.style.height = '150px';
                } else if (button.textContent === 'Medium') {
                    box.style.height = '250px';
                } else if (button.textContent === 'Large') {
                    box.style.height = '350px';
                }
            });
        });
    });
});
