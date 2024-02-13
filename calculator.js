function press(num) {
    document.getElementById('display').value += num;
  }
  
  function calculate() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }