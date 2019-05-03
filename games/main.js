var gameData = {
  clicks: 0,
  clicksPerClick: 1
}

function clickClicks()
{
	gameData.clicks += gameData.clicksPerClick
	document.getElementById("clicksClicked").innerHTML = gameData.clicks + "Clicks Clicked"
}