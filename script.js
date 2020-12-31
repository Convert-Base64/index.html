function readFile(e) {
  var files;
  if (e.target.files) {
    files=e.target.files
  } else {
    files=e.dataTransfer.files
  }
  if (files.length==0) {
    return;
  }
  var file=files[0];
  document.getElementById('fileName').innerHTML = ('File: ' + file.name + ''); 
  document.getElementById('fileType').innerHTML = ('Type: ' + file.type + ''); 
  document.getElementById('fileSize').innerHTML = ('Size: ' + file.size + 'KB'); 
  reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('base64').value = e.target.result;
  }
  reader.readAsDataURL(file);
}
function CopyText() {
  var copyText = document.getElementById("base64");
  copyText.select();
  copyText.setSelectionRange(0, 999999)
  document.execCommand("copy");
}