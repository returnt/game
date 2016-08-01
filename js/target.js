function Target() {}

Target.prototype = Object.create( TargetArea.prototype );
Target.prototype.constructor = Target;

Target.prototype.random = function (min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};

Target.prototype.generate = function (tarArea, tarElem) {
	var left = this.random(0, this.elemWidth(tarArea)) - this.elemWidth(tarElem);
	var right = this.random(0, this.elemHeight(tarArea)) - this.elemHeight(tarElem);

	if ( left < 0 ) left = 0;
	if ( right < 0 ) right = 0;

	tarElem.style.left = left + 'px';
	tarElem.style.top = right + 'px';
};