var checkAutoClickerLoop = window.setInterval(function() {
	if (gameData.clicks >= 128) {
	document.getElementById("AutoClickerButton").innerHTML = '<button onclick="buyAutoClicker()">Buy AutoClicker (Cost 256)</button>'
	clearInterval(checkAutoClickerLoop)
	}
}, 1)