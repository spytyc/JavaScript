var span = document.getElementById('spanId');
span.style.fontSize = '100px';
span.style.color = 'red';

function time() {
    // takes current date and time
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    var ms = d.getMilliseconds();
    span.textContent = h + ":" + m + ":" + s + ":" + ms;
    console.log(h + ":" + m + ":" + s + ":" + ms);
  }
  

  setInterval(time, 100); // 100 MS = 0.1S