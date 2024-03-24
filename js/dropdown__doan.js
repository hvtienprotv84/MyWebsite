window.addEventListener('scroll', function() {
    var dropdownContainer = document.getElementById('dropdownContainer');
    var redBackground = document.getElementById('redBackground');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition >= 500) {
      dropdownContainer.classList.remove('hidden');
      redBackground.style.opacity = 0.5;
    } else {
      dropdownContainer.classList.add('hidden');
      redBackground.style.opacity = 0;
    }
  });
  
  var customToggle = document.querySelector('.custom-toggle');
  var dropdownOptions = document.querySelector('.dropdown-options');
  
  customToggle.addEventListener('click', function() {
    dropdownOptions.style.display = dropdownOptions.style.display === 'none' ? 'block' : 'none';
  });
  
  var options = document.querySelectorAll('.option');
  
  options.forEach(function(option) {
    option.addEventListener('click', function() {
      console.log('Selected option:', option.textContent);
      dropdownOptions.style.display = 'none';
    });
  });