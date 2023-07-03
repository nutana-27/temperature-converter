document.getElementById('convertBtn').addEventListener('click', function() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;
    var result;
  
    if (unit === 'celsius') {
      result = (temperature * 9/5) + 32;
    } else if (unit === 'fahrenheit') {
      result =  (temperature - 32) * 5 / 9;
    } 
  
    document.getElementById('result').innerHTML = result;
  });
  
  