function writeToScreen(message) {
	var div = document.createElement("p");
	div.style.wordWrap = "break-word";
	div.innerHTML = message;    
	output.appendChild(div);    
	div.scrollIntoView(); 	       
}
	
function writeTimeToScreen(thetime) {
	
	var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
	d.setUTCSeconds(thetime);
	
	globalMinutes = d.getMinutes();
	
	if(setTimerOnce == 1) {
		startTockClock();
		setTimerOnce = 10000;
	}
	document.getElementById("showTheTime").innerHTML = d.getHours() +  ":" + d.getMinutes();

}	

function writeBalanceToDash(updatedbalanceamount) {
	document.getElementById("realbalance").innerHTML = updatedbalanceamount.bold();
}

function writeWinLossToScreen() {	

	var winlossresult = countwins - countlosses;
	
	document.getElementById("winlossDash").innerHTML = totalwins + " / " + winlossresult;

	document.getElementById("profitupdate").innerHTML = (tradeProfit - tradeLoss).toFixed(2); 
	
	if(winlossresult == -2 && connectLock == "Off" && appid_temp == appidlive) {
		//writeToScreen("YOU HAVE LOST THIS ROUND. CLAIM YOUR REFUND.");
		winlossLock = "On";
		connectLock = "DEMO";
		reConnect(tokeniddemo, appiddemo);
	}
	else if (connectLock == "On" && appid_temp == appiddemo) {
		winlossLock = "Off";
		countlosses = 0;
		connectLock = "Live";
		reConnect(tokenidlive,appidlive);
	}
}

