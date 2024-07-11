<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>One-Page Website with Lightbox</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }

        h1 {
            margin: 0;
        }

        main {
            padding: 20px;
        }

        .gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .gallery img {
            max-width: 100%;
            height: auto;
            cursor: pointer;
        }

        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            padding-top: 20px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
        }

        .modal-content {
            margin: auto;
            display: block;
            max-width: 80%;
            max-height: 80%;
        }

        .close {
            color: #fff;
            font-size: 40px;
            font-weight: bold;
            position: absolute;
            top: 20px;
            right: 30px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <header>
        <h1>My One-Page Website</h1>
    </header>
    
    <main>
        <section class="gallery">
            <!-- Images will be dynamically added here -->
        </section>
    </main>

    <div id="lightbox" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="lightbox-img">
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const galleryContainer = document.querySelector('.gallery');
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');

            const imagePaths = [
                'C:\Tech-Academy-Projects\js ayten\images\plant1.png',
                'images/image2.jpg',
                'images/image3.jpg',
            ];

            imagePaths.forEach(path => {
                const img = document.createElement('img');
                img.src = path;
                img.alt = 'Image';
                img.classList.add('gallery-img');
                galleryContainer.appendChild(img);

                img.addEventListener('click', function() {
                    lightbox.style.display = 'block';
                    lightboxImg.src = this.src;
                });
            });

            const closeButton = document.querySelector('.close');
            closeButton.addEventListener('click', function() {
                lightbox.style.display = 'none';
            });

            lightbox.addEventListener('click', function(event) {
                if (event.target === lightbox) {
                    lightbox.style.display = 'none';
                }
            });

            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    lightbox.style.display = 'none';
                }
            });
        });
    </script>
</body>
</html>
