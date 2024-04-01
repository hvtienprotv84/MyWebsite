window.addEventListener('DOMContentLoaded', function() {
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Webnesday', 'Thursday', 'Friday', 'Saturday'];
    var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    function formatDate(date) {
      var day = daysOfWeek[date.getDay()];
      var dateNumber = date.getDate();
      var month = monthsOfYear[date.getMonth()];
      var year = date.getFullYear();
  
      return day + ', ' + month + ' ' + dateNumber + ', ' + year + ' | ';
    }
  
    function formatTime(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
  
      return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    }
  
    function updateTimeInfo() {
      var currentDate = new Date();
      var currentDateStr = formatDate(currentDate);
      var currentTimeStr = formatTime(currentDate);
  
      document.getElementById('current-date').textContent = currentDateStr + ' ' + currentTimeStr;
    }
  
    updateTimeInfo();
    setInterval(updateTimeInfo, 1000); // Cập nhật thông tin thời gian mỗi giây
  });