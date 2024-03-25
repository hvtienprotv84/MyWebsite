function downloadPDF() {
    var url = 'CV_PDF/CV_EN_PDF.pdf'; // Đường dẫn tới file PDF
    var filename = 'CV_EN_PDF.pdf'; // Tên file PDF
  
    var link = document.createElement('a');
    link.href = url;
    link.download = filename;
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }