
var input = document.getElementById('textInput');
  input.addEventListener('blur',  () => {
    var message = document.getElementById('messageBox');
    message.textContent = this.value
  });