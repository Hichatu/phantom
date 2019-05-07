function buy2xClicks() {
	if (gameData.clicks >= gameData.clicks2xClickCost) {
		gameData.clicks -= gameData.clicks2xClickCost
		gameData.clicksPerClick *= 2
		gameData.clicks2xClickCost *= 2
		document.getElementById("clicksClicked").innerHTML = gameData.clicks + " Clicks Clicked"
		document.getElementById("2xClicksButton").innerHTML = "Upgrade Clicking Power (Cost " + gameData.clicks2xClickCost + " Clicks)"
		
	}
}

function buyAutoClicker() {
	window.alert("This doesn't do anything yet");
}