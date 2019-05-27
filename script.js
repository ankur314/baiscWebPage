function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColorOfBricks(){
  var header = document.querySelectorAll(".brick");
  for(item of header){
    item.style.background = getRandomColor();
  }
}

setInterval("changeColorOfBricks()", 500);
console.log("Hi there! I am really very thankful to you for visiting my webpage. Have a great day ahead!");
