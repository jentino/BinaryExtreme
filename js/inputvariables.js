var tradeLock = "Open";
var tockSeconds;

var setTimerOnce = 1;
var tockMinutes;
var temp_minute = "";
var globalMinutes;
var rescue 	= 0;
//var tradeamount = [0.35,0.35,0.74,1.19,2.52,5.34,11.35,24.10];
//var tradeamount = [0.35,0.46,0.58,0.65,0.85,1.85,2,5];
//var tradeamount = [0.35,0.46,0.35,0.41,0.86,1.83,3.89,8.26];
//var tradeamount = [0.35,0.45,0.35,0.74,0.74,1.58,3.35,7.12,15.12];
//var tradeamount = [0.35,0.46,0.52,1.10,2.30,4.89,10.37];
var tradeamount = [0.35,0.74,1.58,3.35,7.12,15.12];
var Intervals = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59];
//var Intervals = [2,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59];


var tradeProfit = 0;
var maxProfit = 0;
var tradeLoss = 0;
var countbuys = 0;
var countsells = 0;
var countlosses = 0;
var countwins = 0;
var totalwins = 0;


var connectLock = "OnOn";
var winlossLock = "Off";
var OriginalBalanceLock = "Off";
var tradeDirection = "RED";
var newtradeOptionIdLock = 12345;
var oldtradeOptionIdLock = 12345;

var signalCandle;
var appid_temp = "";
var appidlive = "";
var appiddemo = "";
var tokenidlive = "";
var tokeniddemo = "";
var output;
var outputemail;
var assetvalue = "R_100";
var OriginalBalance = 0;
var OriginalBalanceMain = 0;
var trader_name = "";

