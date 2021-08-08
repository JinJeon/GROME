const picture = document.querySelector("#picture");
const images = [
    "A.jpeg", "B.jpg", "C.jpeg", "D.png"
]
const randomImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.src = `./IMG/${randomImage}`;
bgImage.width = 700;
picture.appendChild(bgImage);
// document.body.style.backgroundImage = `url('./IMG/${images[Math.floor(Math.random()*images.length)]}')`; 