var gameData = {
  clicks: 0,
  clicksPerClick: 1
}

function click() {
  gameData.clicks += gameData.clicksPerClick
  document.getElementById("clicks").innerHTML = gameData.clicks
}
