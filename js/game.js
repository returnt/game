function Game() {}

Game.prototype = Object.create( Timer.prototype );
Game.prototype.constructor = Game;

Game.prototype.init = function () {
	var _this = this;

	var targetArea = document.getElementById('targetArea'),
			targetWrapper = document.getElementById('targetWrapper');

	_this.generate(targetArea, targetWrapper);

	document.getElementById('targetArea').addEventListener('click', function (e) {
		_this.doShot(e, document.getElementById('targetItem').getAttribute('id'), function () {
			_this.generate(targetArea, targetWrapper);
		});
	}, false);

	_this.chooseWeapon(function () {
		_this.timerFunc(30, document.querySelector('.time__numbers'), function () {
			document.querySelector('.endBlock').classList.remove('hidden');
			document.getElementById('finalScore').textContent = _this.hits;
			_this.reset();
		});
	});

	_this.mouseParallax(document.getElementsByClassName('weapon')[0]);
};

Game.prototype.reset = function () {
	var _this = this;

	document.addEventListener('keyup', doWhenEnterPressed, false);

	function doWhenEnterPressed(event) {
		if ( event.keyCode === 13 ) {
			_this.hits = 0;

			document.querySelector('.endBlock').classList.add('hidden');
			document.querySelector('.beginBlock').classList.remove('hidden');

			document.removeEventListener('keyup', doWhenEnterPressed, false);
		}
	}
};

Game.prototype.chooseWeapon = function (cb) {
	var weapons = document.querySelectorAll('.beginBlock__image');

	for( var i = 0; i < weapons.length; i++ ) {

		weapons[i].addEventListener('click', function() {
			var active = document.querySelector('.weapon__item.active'),
				rightSrc = this.getElementsByTagName('img')[0].getAttribute('src'),
				elem;

			if (active) active.classList.remove('active');

			document.querySelector('.beginBlock').classList.add('hidden');

			elem = document.querySelector('.weapon__item[src="' + rightSrc + '"]');
			elem.classList.add('active');

			document.querySelector('.fire').dataset.fire = elem.dataset.weapon;

			if ( cb && typeof cb === 'function' ) cb();
		}, false);

	}
};

Game.prototype.mouseParallax = function (elem) {
	var elem = elem,
		elemWid = elem.offsetWidth,
		winWid = document.body.offsetWidth;

	document.addEventListener('mousemove', function (e) {
		e = e || window.event;
		var x = ((winWid - elemWid) / 2 - (e.pageX - (winWid / 2))) / 8;
		elem.style.right = x + 'px';
	}, false);
};
