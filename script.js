const photos = [
    "photos/photo1.jpg",
    "photos/photo2.jpg",
    "photos/photo3.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
    index = (index + 1) % photos.length;
    slide.src = photos[index];
}, 3000);
