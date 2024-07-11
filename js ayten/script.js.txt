document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    const images = [
        { small: 'images/plant1-small.png', big: 'images/plant1.png' },
        { small: 'images/plant2-small.png', big: 'images/plant2.png' },
        { small: 'images/plant3-small.png', big: 'images/plant3.png' },
        { small: 'images/plant4-small.png', big: 'images/plant4.png' },
        // Add more images as needed
    ];

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.small;
        img.alt = 'Thumbnail';
        img.classList.add('gallery-img');
        galleryContainer.appendChild(img);

        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = image.big;
        });
    });

    function closeModal() {
        lightbox.style.display = 'none';
    }

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            closeModal();
        }
    });

    // Close the lightbox with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
