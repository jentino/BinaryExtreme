function reConnect(token,appid) {
		
		outputemail = document.getElementById("welcomeuser");
		playSoundCustom(24);

        if (token == '') {
            writeToScreen("Invalid API Token");
            return;
        } 			
		else 
			{ 
				appid_temp = appid; //appid is the demo one sent from writetoscreen

				document.querySelector('#showtradeLock').innerHTML = appid_temp;
				ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id='+appid); 
				
					
		//////////////////////////////////////////////////////////Event listeners
				
				//listen to request to open websocket
				ws.onopen = function(evt) {
					onOpen(evt,token);
				};
				
				//listen to request to write to console
				ws.onmessage = function(evt) {
					onMessage(evt);
				};
			}
			
		
}