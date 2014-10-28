// Author : Joshua Tanner
// Date : 10-26-2014

// cb = new classyBrew();
// cb.setSeries([1, 2, 3])
// cb.setNumClasses(7)
// cb.setColor('blue')
// cb.getSeries()
// cb.getNumClasses()
// cb.getBreaks()
// 
// cb.getClassJenks()
// cb.getColors()


var classyBrew;

classyBrew = function () {
	this.series = undefined;
	this.numClasses = null;
	this.breaks = undefined;
	this.rampColor = undefined;

	// define array of values
	this.setSeries = function (seriesArr) {
		this.series = Array();
		this.series = seriesArr;
	};

	// return array of values
	this.getSeries = function () {
		return this.series;
	};

	// set number of classes
	this.setNumClasses = function (n) {
		this.numClasses = n;
	};

	// get number of classes
	this.getNumClasses = function () {
		return this.numClasses;
	};

	// define color ramp color
	this.setRampColor = function (color) {
		this.rampColor = color.toUpperCase();
	};

	// get color ramp color
	this.getRampColor = function () {
		return rampColor;
	};

	// return array of natural breaks
	this.getBreaks = function () {
		// return array of breaks
	};

	// get color ramp
	this.getColors = function () {
		// return array of colors
	};

	// get color for a given value
	this.getColor = function (num) {
		// return color for given num in ramp
	};

}

