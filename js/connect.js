function Connect(token, appid) {
            
            output = document.getElementById("debug");
            //document.getElementById("debug").innerHTML = "Connecting ... " ;
            
            appid_temp = appid;

			//document.querySelector('#showtradeLock').innerHTML = appid_temp;
            playSoundCustom(16);
            
            if (token == '') {
                writeToScreen("Invalid API Token");
                return;
            } 
                
            else {

                ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id='+appid); 
            
                ws.onopen = function(evt) {
                    onOpen(evt,token);
                };
                
                ws.onmessage = function(evt) {
                    onMessage(evt);
                };
            }
}
                
           