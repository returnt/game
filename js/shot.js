function Shot() {}

Shot.prototype = Object.create( Target.prototype );
Shot.prototype.constructor = Shot;

Shot.prototype.ANIM_DURATION = 250; //ms

Shot.prototype.hits = 0;

Shot.prototype.doShot = function (e, tarId, cb) {
	var _this = this;

	e = e || window.event;
	var target = e.target;

	var gun = document.querySelector('.weapon__item.active');
	var gunFire = document.querySelector('img.fire');

	if ( target.getAttribute('id') === tarId ) {
		_this.hits++;
		if ( typeof cb === 'function' ) cb();
	}

	gun.classList.add('js-push-weapon');
	gunFire.classList.add('js-show-fire');

	setTimeout(function deleteCSSAnimClasses() {
		gun.classList.remove('js-push-weapon');
		gunFire.classList.remove('js-show-fire');
	}, _this.ANIM_DURATION);
};