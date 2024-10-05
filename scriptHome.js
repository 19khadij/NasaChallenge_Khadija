// document.getElementById('nextBtn').addEventListener('click', function() {
//     // Hide the first text and image
//     document.getElementById('text1').style.display = 'none';
//     document.querySelector('.background-image').style.display = 'none';

//     // Show the second image and text
//     document.getElementById('nextImage').style.display = 'block';
//     document.getElementById('text2').style.display = 'block';

//     //hide exo button
//     document.getElementById('nextBtn2').style.display='block';
// });

// document.getElementById('nextBtn2').addEventListener('click', function() {
//     // Hide the first text and image
//     document.getElementById('text1').style.display = 'none';
//     document.querySelector('.background-image').style.display = 'none';

//     // Hide the second image and text
//     document.getElementById('nextImage').style.display = 'none';
//     document.getElementById('text2').style.display = 'none';
//     document.getElementById('nextBtn2').style.display='none';
//     document.getElementById('nextBtn').style.display='none';

//     // Show the Third image and text
//     document.getElementById('nextImage2').style.display = 'block';
//     document.getElementById('text3').style.display = 'block';
// });


document.getElementById('nextBtn').addEventListener('click', function() {
    // Hide the first text and image
    document.getElementById('text1').style.display = 'none';
    document.querySelector('.background-image').style.display = 'none';

    // Show the second image and text
    document.getElementById('nextImage').style.display = 'block';
    document.getElementById('text2').style.display = 'block';

    // Show the second button
    document.getElementById('nextBtn2').style.display = 'block';
});

document.getElementById('nextBtn2').addEventListener('click', function() {
    // Hide the second image and text
    document.getElementById('nextImage').style.display = 'none';
    document.getElementById('text2').style.display = 'none';

    // Hide the second button
    document.getElementById('nextBtn2').style.display = 'none';
    
    // Show the third image and text
    document.getElementById('nextImage2').style.display = 'block';
    document.getElementById('text3').style.display = 'block';
    document.getElementById('text4').style.display='block';

    // Show the third button (if you have one)
    document.getElementById('nextBtn3').style.display = 'block';
});
document.getElementById('nextBtn3').addEventListener('click', function() {
    // Navigate to the types.html page
    window.location.href = 'types.html';
});
