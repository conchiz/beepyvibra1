// JavaScript Document
$(document).redy(function(e){
	 document.addEventListener("deviceready",function(){
		 $('#Beep').tap(function(){
			 navigator.notification.Beep(1);
		 });
		 $('#Vibrar').tap(function(){
			 navigator.notification.Vibrate(1000);
		 });
	 },false);
});