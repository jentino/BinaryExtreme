// function dot_update(dbgindex){
	
// 	if (dbgindex == "next") {
		
// 		var display_div_id = "shownextcandle";
// 		var data = "candle_id=candle5";
// 		var green = "tinygreenbox";
// 		var red = "tinyredbox";
// 	}
// 	else if (dbgindex == "current") {

// 		var display_div_id = "showcurrentcandle";
// 		var data = "candle_id=candle1";
// 		var green = "tinygreenbox";
// 		var red = "tinyredbox";
// 	}
// 	else if (dbgindex == "signal") {
// 		var display_div_id = "showsignalcandle";
// 		var data = "candle_id=candle6";
// 		var green = "tinygreenbox";
// 		var red = "tinyredbox";	
// 	}
// 	else if (dbgindex == "dot1") {
// 		var display_div_id = "showdot1";
// 		var data = "candle_id=dot1";
// 		var green = "tinygreendot";
// 		var red = "tinyreddot";	
// 	}
// 	else if (dbgindex == "dot2") {
// 		var display_div_id = "showdot2";
// 		var data = "candle_id=dot2";
// 		var green = "tinygreendot";
// 		var red = "tinyreddot";	
// 	}
// 	else if (dbgindex == "dot3") {
// 		var display_div_id = "showdot3";
// 		var data = "candle_id=dot3";
// 		var green = "tinygreendot";
// 		var red = "tinyreddot";	
// 	}
// 	else if (dbgindex == "dot4") {
// 		var display_div_id = "showdot4";
// 		var data = "candle_id=dot4";
// 		var green = "tinygreendot";
// 		var red = "tinyreddot";	
// 	}
	
//  	var xhr;

//  	if (window.XMLHttpRequest) { // Mozilla, Safari, ...
//     	xhr = new XMLHttpRequest();
//   	} 
   
//     else if (window.ActiveXObject) { // IE 8 and older
//       	xhr = new ActiveXObject("Microsoft.XMLHTTP");
//   	}

//   	xhr.open("POST", "../includes/dot_dblist.php", true); 
//   	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");                  
//   	xhr.send(data);         
	
//   	xhr.onreadystatechange = display_data;
	
// 	function display_data() {
		
// 	    if (xhr.readyState == 4) {
// 	      	if (xhr.status == 200) {
// 	      		document.querySelector('#showtradeLock').innerHTML = tradeLock;
	      		
// 	      		var searchMinute = Intervals.indexOf(globalMinutes);
	      			      		
// 		        if(xhr.responseText == "1"){
		        	
// 		        	document.getElementById(display_div_id).innerHTML = "<img src=../img/"+green+".png>";
// 					signalCandle = "UP";
					  
// 		        }
// 	       		else if(xhr.responseText == "2"){
	        		
// 	          		document.getElementById(display_div_id).innerHTML = "<img src=../img/"+red+".png>";
// 					signalCandle = "DOWN";
					   
// 	        	}
// 		        else {
// 					document.getElementById(display_div_id).innerHTML = "!";
// 				}
				
// 				// if(tockSeconds == 59 && searchMinute == -1 && tradeLock == "Open"){
// 				// 	tradeLock = "Closed";
// 				// 	if(tradeDirection == "RED"){

// 				// 		tradeDirection = "GREEN";
// 				// 		tradeOption("RED",globalMinutes);
// 				// 	}

// 				// 	else if(tradeDirection == "GREEN") {
// 				// 		tradeDirection = "RED";
// 				// 		tradeOption("GREEN",globalMinutes);
// 				// 	}
// 				// }  
						
// 				// else if(tockSeconds == 4 && searchMinute !== -1 && tradeLock == "Closed") {
// 				// 		if(newtradeOptionIdLock != oldtradeOptionIdLock){
// 				// 			tradeLock = "Locked";
// 				// 			GetPortfolio();
// 				// 			playSoundCustom("18");
// 				// 			oldtradeOptionIdLock = newtradeOptionIdLock;
							
// 				// 		}							
// 				// } 
						
// 				// else if(tockSeconds == 5 && searchMinute == -1 && tradeLock == "Locked"){

// 				// 	tradeLock = "Open";
// 				// 	GetProfitTable();
// 				// 	playSoundCustom("20");
// 				// }
	           	
// 		    }
// 		}
// 	}
// }