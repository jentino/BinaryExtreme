function tradeTickData() {

	mypb(totalwins);

	tickCycleSearch = Intervals.indexOf(tickCycle);
	
	//document.querySelector('#showtradeLock').innerHTML = tickCycle + " " + tickCycleSearch;

	if(tockSeconds === 0) {
		tickCycle++;
		tickCycle = tickCycle%60;

		if(tickCycleSearch === -1 && tickLock === "Open") {
			
			tickLock = "Closed";

			if(appid_temp == appidlive){
				if(tickTradeSwitch === 0) {
					Buyit(tradeamount[rescue]);
					tickTradeSwitch = 1;	
				} else if(tickTradeSwitch === 1) {
					Sellit(tradeamount[rescue]);
					tickTradeSwitch = 0;
				}
			}
			else if(appid_temp == appiddemo){
				if(tickTradeSwitch === 0) {
					Sellit(tradeamount[rescue]);
					tickTradeSwitch = 1;	
				} else if(tickTradeSwitch === 1) {
					Buyit(tradeamount[rescue]);
					tickTradeSwitch = 0;
				}
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

function checkWinOrLoss(buyprice,amount){
	var str_return;
	
	if (amount > 0) {
		
		// connectLock = "On";
		// if(winlossLock == "Off"){
			tradeProfit = tradeProfit + parseFloat(buyprice)*0.89;
			totalwins++;
			countlosses = 0;
			rescue = 0;
		// }
		
		str_return = "Win".bold().fontcolor("Green");
	}
	else {
		// connectLock = "Off";

		// if(winlossLock == "Off"){
			tradeLoss = tradeLoss + parseFloat(buyprice);
			countlosses++;
			rescue++;
		// }

		str_return = "Loss".bold().fontcolor("Red");
	}
	return str_return;
}


function switchAcccounts(lossresult) {

	if(lossresult == -2) {
	
		if(appid_temp == appidlive){
			// winlossLock = "On";
			// connectLock = "DEMO";
			reConnect(tokeniddemo, appiddemo);
		}
			
		else if (appid_temp == appiddemo){

			// winlossLock = "Off";
			// connectLock = "Live";
			//countlosses = 0;
			reConnect(tokenidlive,appidlive);
		}

	}
	// else if(lossresult == -4) {
		
	// 	if(appid_temp == appidlive){
	// 		// winlossLock = "On";
	// 		// connectLock = "DEMO";
	// 		reConnect(tokeniddemo, appiddemo);
	// 	}
			
	// 	else if (appid_temp == appiddemo){

	// 		// winlossLock = "Off";
	// 		// connectLock = "Live";
	// 		//countlosses = 0;
	// 		reConnect(tokenidlive,appidlive);
	// 	}	
	
	// }
	// else if(lossresult == -6) {
		
	// 	if(appid_temp == appidlive){
	// 		// winlossLock = "On";
	// 		// connectLock = "DEMO";
	// 		reConnect(tokeniddemo, appiddemo);
	// 	}
			
	// 	else if (appid_temp == appiddemo){

	// 		// winlossLock = "Off";
	// 		// connectLock = "Live";
	// 		//countlosses = 0;
	// 		reConnect(tokenidlive,appidlive);
	// 	}	
	
	// }
}
