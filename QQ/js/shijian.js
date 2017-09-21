 window.onload = function() {
  var show = document.getElementById("show");

	setInterval(function() {
		var ntime="";
        function getnowtime() {
            var nowtime = new Date();
            var hour = padleft0(nowtime.getHours());
            var minute = padleft0(nowtime.getMinutes());
            ntime=hour + ":" + minute;
            return ntime;
        }		
		
		show.innerHTML =getnowtime();
		
	}, 1000);
	
    
        function padleft0(obj) {
            return obj.toString().replace(/^[0-9]{1}$/, "0" + obj);
        }	
	
 }




