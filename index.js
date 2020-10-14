function play() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  document
    .querySelector(".dice .img1")
    .setAttribute("src", "images\\dice" + randomNumber1 + ".png");

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document
    .querySelector(".dice .img2")
    .setAttribute("src", "images\\dice" + randomNumber2 + ".png");

  document.querySelector("h1").innerText =
    randomNumber1 == randomNumber2
      ? "DRAW😑"
      : randomNumber1 > randomNumber2
      ? "⛳Player 1 Won!"
      : "Player 2 Won!⛳";
}
document.querySelector("button").onclick = play;
