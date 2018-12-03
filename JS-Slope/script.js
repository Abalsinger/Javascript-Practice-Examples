xOne = document.getElementById('X1');
xTwo = document.getElementById('X2');
yOne = document.getElementById('Y1');
yTwo = document.getElementById('Y2');
mySum = document.getElementById('mySum');
calSlopebutton = document.getElementById('calButton');
reset = document.getElementById('reset');

calSlopebutton.onclick = calSlope;
reset.onclick = resetNumbers;

function calSlope() {
  var x1 = getXone();
  var x2 = getXtwo();
  var y1 = getYone();
  var y2 = getYtwo();
  
  var rise = x2 - x1;
  var run = y2 - y1;
    
  var e = rise / run;
  postSlopeToPage(e);
}

function getXone() {
  var x1  = parseInt(xOne.value);
  return x1;
}

function getXtwo() {
  var x2 = parseInt(xTwo.value);
  return x2;
}

function getYone() {
  var y1 = parseInt(yOne.value);
  return y1;
}

function getYtwo() {
  var y2 = parseInt(yTwo.value);
  return y2;
}

function postSlopeToPage(e) {
  var slope = e.toString();
  mySlope.innerHTML = "<h4>The answer:</h4>" + slope;
}

function resetNumbers() {
  mySlope.innerHTML = '';
}