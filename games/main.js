var gameData = {
  clicks: 0
  clicksPerClick: 1
  clicksPerClickCost: 10
}

function clickClicks()
{
	gameData.clicks += gameData.clicksPerClick
	document.getElementById("clicksClicked").innerHTML = gameData.clicks + " Clicks Clicked"
}

function buyClicksPerClick()
{
	if (gameData.clicks >= gameData.clicksPerClickCost)
	{
		gameData.clicks -= gameData.clicksPerClickCost
		gameData.clicksPerClick += 1
		gameData.clicksPerClickCost *= 2
	}
}