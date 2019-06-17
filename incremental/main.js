var gameData = {
  klicks: 0,
  klicksPerClick: 1
}

function click() {
  gameData.klicks += gameData.klicksPerClick
  document.getElementById("klicks").innerHTML = gameData.klicks
}
