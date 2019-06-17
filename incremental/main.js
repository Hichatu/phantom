var gameData = {
	klicks: 0,
	klicksPerClick: 1,
}

function clickButton() {
	gameData.klicks += gameData.klicksPerClick
	document.getElementById("klicks").innerHTML = gameData.klicks
}