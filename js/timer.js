function Timer() {}

Timer.prototype = Object.create( Shot.prototype );
Timer.prototype.constructor = Timer;

Timer.prototype.timerFunc = function (duration, display, cb) {
	var timer = duration,
			minutes,
			seconds,
			intrv;

	creatorTimer();

	intrv = setInterval(function () {
		creatorTimer();

		if ( timer < 0 ) {
			clear(intrv);
			if ( typeof cb === 'function' ) cb();
		}
	}, 1000);

	function creatorTimer() {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		display.textContent = minutes + ':' + seconds;

		--timer;
	}

	function clear(name) {
		clearInterval(name);
	}
};