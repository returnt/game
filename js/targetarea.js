function TargetArea() {}

TargetArea.prototype = {
	constructor: TargetArea,
	elemWidth: function (elem) {
		return Math.floor( elem.offsetWidth );
	},
	elemHeight: function (elem) {
		return Math.floor( elem.offsetHeight );
	},
	elemPositionX: function (elem) {
		return elem.getBoundingClientRect().left;
	},
	elemPositionY: function (elem) {
		return elem.getBoundingClientRect().top
	}
};