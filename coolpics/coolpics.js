
const menuButton = document.querySelector('.menu');
const nav = document.querySelector('nav');

// Open and close the mobile menu
menuButton.addEventListener('click', () => {
    nav.classList.toggle('hide');

    const isOpen = !nav.classList.contains('hide');
    menuButton.setAttribute('aria-expanded', isOpen);
});

// Select gallery images and modal elements
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.image-modal');
const modalImage = modal.querySelector('img');
const closeButton = document.querySelector('.close-viewer');

// Open the modal when an image is clicked
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        modalImage.src = 'https://wddbyui.github.io/wdd131/images/norris-full.jpg';
        modalImage.alt = image.alt;
        modal.showModal();
    });
});

// Close modal using the X button
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal by clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        const rect = modal.getBoundingClientRect();

        const outside =
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom;

        if (outside) {
            modal.close();
        }
    }
});

// The native dialog also closes with the Escape key
