var currentLanguage = localStorage.getItem("currentLanguage") || "vi"; // Lấy giá trị ngôn ngữ hiện tại từ Local Storage, mặc định là "vi"

var vietnameseButton = document.getElementById("vietnameseButton");
vietnameseButton.addEventListener("click", function () {
  changeLanguage("vi");
});

var englishButton = document.getElementById("englishButton");
englishButton.addEventListener("click", function () {
  changeLanguage("en");
});

var germanButton = document.getElementById("germanButton");
germanButton.addEventListener("click", function () {
  changeLanguage("de");
});

var koreaButton = document.getElementById("koreaButton");
koreaButton.addEventListener("click", function () {
  changeLanguage("kr");
});

var japanButton = document.getElementById("japanButton");
japanButton.addEventListener("click", function () {
  changeLanguage("jp");
});

// Gọi hàm changeLanguage với giá trị ngôn ngữ hiện tại
changeLanguage(currentLanguage);

function changeLanguage(language) {
  var elements = document.querySelectorAll("[data-lang]");
  
  elements.forEach(function (element) {
    if (language === "vi") {
      element.innerHTML = element.getAttribute("data-lang-vi");
    } else if (language === "en") {
      element.innerHTML = element.getAttribute("data-lang-en");
    } else if (language === "de") {
      element.innerHTML = element.getAttribute("data-lang-de");
    } else if (language === "kr") {
      element.innerHTML = element.getAttribute("data-lang-kr");
    } else if (language === "jp") {
      element.innerHTML = element.getAttribute("data-lang-jp");
    }
  });

  currentLanguage = language;
  localStorage.setItem("currentLanguage", currentLanguage); // Lưu giá trị ngôn ngữ hiện tại vào Local Storage
}