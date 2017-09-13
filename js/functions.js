function showBalance(balance) {
	
	document.getElementById("realbalance").innerHTML = balance.bold().fontcolor("Green");
}

function showRescueAmount() {
	document.getElementById("showrescueamount").innerHTML = tradeamount[rescue];
}

function returnTime(thetime) {
	
	var xd = new Date(0); // The 0 there is the key, which sets the date to the epoch
	xd.setUTCSeconds(thetime);
	return  xd.getMinutes() + ":" + xd.getSeconds();
}

function returnFullTime(thetime) {
	
	var xd = new Date(0); // The 0 there is the key, which sets the date to the epoch
	xd.setUTCSeconds(thetime);
	return  xd.getHours() + ":" + xd.getMinutes() + ":" + xd.getSeconds();
}

var tickCounter = 1;
var tickTradeSwitch = 0;
var tickCycle = 0;
var tickCycleSearch = 0;
var tickLock = "Open";

function tradeTickData() {

	mypb(totalwins);

	tickCycleSearch = Intervals.indexOf(tickCycle);
	
	//document.querySelector('#timer2 .field2').innerHTML = tickCounter%5;
	document.querySelector('#showtradeLock').innerHTML = tickCycle + " " + tickCycleSearch;

	if(tockSeconds === 0) {
		tickCycle++;
		tickCycle = tickCycle%60;

		if(tickCycleSearch === -1 && tickLock === "Open") {
			
			tickLock = "Closed";

			if(tickTradeSwitch === 0) {
				Buyit(tradeamount[rescue]);
				tickTradeSwitch = 1;
			} else if(tickTradeSwitch === 1) {
			 	Sellit(tradeamount[rescue]);
				tickTradeSwitch = 0;
			}
			playSoundCustom(3);		    
		}
	} 
	else if(tockSeconds === 4 && tickCycleSearch !== -1 && tickLock === "Closed") {
			tickLock = "Locked";
			GetPortfolio();
			playSoundCustom(18);
			
	}
	else if(tockSeconds === 3 && tickCycleSearch === -1 && tickLock === "Locked") {
		tickLock = "Open";
		GetProfitTable();
		playSoundCustom(21);
	}
	
	tickCounter++;
}



function mypb(wins){
	$(function() {
		var current_progress = 0;
			current_progress = (wins/33 * 100).toFixed();
			$("#dynamic")
			.css("width", current_progress + "%")
			.attr("aria-valuenow", current_progress)
			.text(current_progress + "% Profit");
			if (current_progress >= 100)
				current_progress = 0;
	  });
}