var images = [
  "https://res.cloudinary.com/cloudinary-marketing/images/v1649720751/Web_Assets/blog/Mario_1/Mario_1-gif?_i=AA",
  "https://blog.talent500.co/wp-content/uploads/2022/12/Mean-stack-scaled.jpg",
  "https://www.softprodigy.com/storage/2021/07/full-stack-development-gif.gif"
];

var currentIndex = 0;
var imageElement = document.getElementById("myImage");

function previousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  changeImage("slide-right");
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  changeImage("slide-left");
}

function changeImage(animationClass) {
  imageElement.classList.add(animationClass);
  setTimeout(function() {
    imageElement.src = images[currentIndex];
    imageElement.classList.remove(animationClass);
  }, 300);
}

// Tự động chuyển đổi ảnh sau một khoảng thời gian
function autoChangeImage() {
  setInterval(function() {
    nextImage();
  }, 5000); // Thời gian chuyển đổi giữa các ảnh (đơn vị: mili giây)
}

autoChangeImage();