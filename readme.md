##classybrew

**classybrew** uses the Jenks Natural Breaks Algorithm to generate classes based on intrinsic breaks in your data.  **classybrew** will also generate a range of **sequential** color codes based on the number of breaks in your data and a user defined palette.  The minified JavaScript file is only 18kb in size, and will integrate perfectly with your next **mapping** project.

[View Blog Post](http://tannerjt.github.io/geotanner/javascript/color-theory/2014/10/29/classybrew-jenks-heart-colorbrewer.html)

This tool was built with help from two outstanding open source repositories.

+ [axismaps/colorbrewer](https://github.com/axismaps/colorbrewer) - Cynthia Brewers Color Theory
+ [simogeo/geostats](https://github.com/simogeo/geostats)

For more information about Jenk's Natural Breaks and a helpful python port of the algorithm, visit [Daniel J Lewis's Blog](http://danieljlewis.org/2010/06/07/jenks-natural-breaks-algorithm-in-python/).

###Using classybrew

**Basics - Setup**

```javascript
var brew = new classyBrew();
brew.setSeries([30.01, 14.9, 22.71, 24.96, 7.17, ...]);
brew.setNumClasses(5);
brew.setColorCode("BuGn");
```

**Basics - Classify**

You can use classify or getBreaks

```javascript
brew.classify(); // returns [7.17,14.9,19.3,22.71,26.9,31.26]
```

**Basics - Retrieval**

```javascript
var breaks = brew.getBreaks(); // returns [7.17,14.9,19.3,22.71,26.9,31.26]
var colors = brew.getColors(); // returns [rgb(237,248,251),rgb(178,226,226),rgb(102,194,164),rgb(44,162,95),rgb(0,109,44)]
brew.getColorInRange(7.5); // returns rgb(237,248,251)
```

**All classybrew Methods**

```javascript
//constructor
var brew = new classyBrew();

//_____setters______//
//__________________//

// classification
brew.setSeries(Array); // define array of data to classify
brew.setNumClasses(Number); // number of classes or breaks

// color theory
brew.setColorCode(ColorCodeString); // color ramp code... see below

//_____getters______//
//__________________//

// classification
brew.getSeries(); // returns Array of original data
brew.getNumClasses(); // returns set number of classes
brew.classify(); // build array of natural breaks
brew.getBreaks(); // same as classify

//color theory
brew.getColorCodes(); // returns array of all available color codes
brew.getColorCode(); // returns set color code
brew.getColors(); // returns array of colors specific to your data
brew.getColorInRange(Num); // returns appropriate color for given number
```

***Color Theory***

The colors generated using classybrew are based on [Cynthia Brewer's](http://colorbrewer2.org/) sequential color ramps.  Below are the possible codes you can use when generating your color ramp with your data.  *BuGn -> Blue to Green*

```javascript
var brew = new classyBrew();
brew.getColorCodes();  // returns
/*
["BuGn","BuPu","GnBu",
 "OrRd","PuBu","PuBuGn",
 "PuRd","RdPu","YlGn",
 "YlGnBu","YlOrBr","YlOrRd", 
 "Oranges", "Reds", "Greens",
 "Purples", "Greys", "Blues"];
*/
```

You can also view the simple test file to better understand how to use the library.