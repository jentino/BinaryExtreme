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
	var time=('0'  + xd.getHours()).slice(-2)+':'+('0' + xd.getMinutes()).slice(-2);
	return  time;
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