function flip() {
  let num = Math.floor(Math.random() * 2);
  if (num == 1) {
      document.getElementById('image').src = "tails.png";
      document.getElementById('result').innerHTML = "Tails..!";
  }
  else {
      document.getElementById('image').src = "heads.png";
      document.getElementById('result').innerHTML = "Heads..!";
  }
}
