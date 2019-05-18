<!DOCTYPE html>
<html>
<head> 
    <title>Coder</title>
    <meta charset="utf-8">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
   
        <script>


var	clsStopwatch = function() {
		// Private vars
		var	startAt	= 0;	// Time of last start / resume. (0 if not running)
		var	lapTime	= 0;	// Time on the clock when last stopped in milliseconds

		var	now	= function() {
				return (new Date()).getTime(); 
			}; 
 
		
		// Start or resume
		this.start = function() {
				startAt	= startAt ? startAt : now();
			};

		// Stop or pause
		this.stop = function() {
				// If running, update elapsed time otherwise keep it
				lapTime	= startAt ? lapTime + now() - startAt : lapTime;
				startAt	= 0; // Paused
			};

		// Reset
		this.reset = function() {
                lapTime = startAt = 0;
              
			};

		// Duration
		this.time = function() {
				return lapTime + (startAt ? now() - startAt : 0); 
            };
            
	};

var x = new clsStopwatch();

var $time;
var clocktimer;

function pad(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}

function formatTime(time) {
	var h = m = s = ms = 0;
	var newTime = '';

	h = Math.floor( time / (60 * 60 * 1000) );
	time = time % (60 * 60 * 1000);
	m = Math.floor( time / (60 * 1000) );
	time = time % (60 * 1000);
	s = Math.floor( time / 1000 );
	ms = time % 1000;

	newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
	return newTime;
}


function show() {
	$time = document.getElementById('time');
	update();
}

function update() {
	$time.innerHTML = formatTime(x.time());
}

function start() {
	clocktimer = setInterval("update()", 1);
	x.start();
}

function stop() {
	x.stop();
	clearInterval(clocktimer);
}

function reset() {
	stop();
	x.reset();
	update();
}
	</script>
	<style>
	#timestyle{
	font-size:70px;
	color:brown;
	}
	.container{
		position: relative;
		top:200px;
	}
	.btn{
		width:120px;
		padding: 15px;
		position: relative;
		left: 70px;
		margin-left: 30px;
	}
	</style>
    
   </head>
   
<body onload="show();">
<div class="row container">	
	<div class="col-md-4"></div>
	<div class="col-md-7">
	<div id="timestyle">Time: <span id="time"></span></div>
	<input type="button" class="btn btn-default" value="start" onclick="start();">
	<input type="button" class="btn btn-default" value="stop" onclick="stop();">
	<input type="button" class="btn btn-default" value="reset" onclick="reset()">
</div>
<div class="col-md-1"></div>
</div>
</body>
</html>
