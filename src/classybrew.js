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
	this.range = undefined;
	this.colorRamps =  ["BuGn","BuPu","GnBu",
						"OrRd","PuBu","PuBuGn",
						"PuRd","RdPu","YlGn",
						"YlGnBu","YlOrBr","YlOrRd"];

	// define array of values
	this.setSeries = function (seriesArr) {
		this.series = Array();
		this.series = seriesArr;
		this.series = this.series.sort(function (a, b) { return a-b });
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

	// get available color ramps
	this.getColorRamps = function () {
		return this.colorRamps;
	};

	// define color ramp color
	this.setRampColor = function (color) {
		this.rampColor = color;
	};

	// get color ramp color
	this.getRampColor = function () {
		return rampColor;
	};

	// return array of natural breaks
	this.classify = function () {
		// now iterate through the datalist:
		// determine mat1 and mat2
		// really not sure how these 2 different arrays are set - the code for
		// each seems the same!
		// but the effect are 2 different arrays: mat1 and mat2
		var mat1 = []
		for ( var x = 0, xl = this.series.length + 1; x < xl; x++) {
			var temp = []
			for ( var j = 0, jl = this.numClasses + 1; j < jl; j++) {
				temp.push(0)
			}
			mat1.push(temp)
		}

		var mat2 = []
		for ( var i = 0, il = this.series.length + 1; i < il; i++) {
			var temp2 = []
			for ( var c = 0, cl = this.numClasses + 1; c < cl; c++) {
				temp2.push(0)
			}
			mat2.push(temp2)
		}

		// absolutely no idea what this does - best I can tell, it sets the 1st
		// group in the
		// mat1 and mat2 arrays to 1 and 0 respectively
		for ( var y = 1, yl = this.numClasses + 1; y < yl; y++) {
			mat1[0][y] = 1
			mat2[0][y] = 0
			for ( var t = 1, tl = this.series.length + 1; t < tl; t++) {
				mat2[t][y] = Infinity
			}
			var v = 0.0
		}

		// and this part - I'm a little clueless on - but it works
		// pretty sure it iterates across the entire dataset and compares each
		// value to
		// one another to and adjust the indices until you meet the rules:
		// minimum deviation
		// within a class and maximum separation between classes
		for ( var l = 2, ll = this.series.length + 1; l < ll; l++) {
			var s1 = 0.0
			var s2 = 0.0
			var w = 0.0
			for ( var m = 1, ml = l + 1; m < ml; m++) {
				var i3 = l - m + 1
				var val = parseFloat(this.series[i3 - 1])
				s2 += val * val
				s1 += val
				w += 1
				v = s2 - (s1 * s1) / w
				var i4 = i3 - 1
				if (i4 != 0) {
					for ( var p = 2, pl = this.numClasses + 1; p < pl; p++) {
						if (mat2[l][p] >= (v + mat2[i4][p - 1])) {
							mat1[l][p] = i3
							mat2[l][p] = v + mat2[i4][p - 1]
						}
					}
				}
			}
			mat1[l][1] = 1
			mat2[l][1] = v
		}

		var k = this.series.length
		var kclass = []

		// fill the kclass (classification) array with zeros:
		for (i = 0, il = this.numClasses + 1; i < il; i++) {
			kclass.push(0)
		}

		// this is the last number in the array:
		kclass[this.numClasses] = parseFloat(this.series[this.series.length - 1])
		// this is the first number - can set to zero, but want to set to lowest
		// to use for legend:
		kclass[0] = parseFloat(this.series[0])
		var countNum = this.numClasses
		while (countNum >= 2) {
			var id = parseInt((mat1[k][countNum]) - 2)
			kclass[countNum - 1] = this.series[id]
			k = parseInt((mat1[k][countNum] - 1))
			// spits out the rank and value of the break values:
			// console.log("id="+id,"rank = " + String(mat1[k][countNum]),"val =
			// " + String(this.series[id]))
			// count down:
			countNum -= 1
		}
		// check to see if the 0 and 1 in the array are the same - if so, set 0
		// to 0:
		if (kclass[0] == kclass[1]) {
			kclass[0] = 0
		}
		
		this.range = kclass;
		this.range.sort(function (a, b) { return a-b })
		
		return this.range; //array of breaks
	};

	// get color ramp
	this.getColors = function () {
		// return array of colors
	};

	// get number in range
	this.getNumberInRange = function (num) {
		
	};

	// get color for a given value
	this.getColorInRange = function (num) {
		
	};

}

