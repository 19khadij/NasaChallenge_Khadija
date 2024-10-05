document.getElementById('nextBtn').addEventListener('click', function() {
    // Hide the first text and image
    document.getElementById('text1').style.display = 'none';
    document.querySelector('.background-image').style.display = 'none';

    // Show the second image and text
    document.getElementById('nextImage').style.display = 'block';
    document.getElementById('text2').style.display = 'block';
});
