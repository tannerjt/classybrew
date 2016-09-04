##classybrew

**classybrew** lets you choose from several statistical algorithms (Jenks Natural Breaks, Quantile, Equal Interval) to generate class breaks based on your data.  **classybrew** has [colorbrewer](https://github.com/axismaps/colorbrewer) color palettes built in to quickly generate choropleth maps, graphics, tables, etc. with ease.

[View classybrew in action!](http://tannerjt.github.io/classybrew-www/examples/basic/)

Created By: [tannergeo](http://tannergeo.com)

###Using classybrew

**Basics - Setup**

```javascript
var brew = new classyBrew();
brew.setSeries([30.01, 14.9, 22.71, 24.96, 7.17, ...]);
brew.setNumClasses(5);
brew.setColorCode("BuGn");
```

**Basics - Classify**

```javascript
brew.classify('jenks'); // returns [7.17,14.9,19.3,22.71,26.9,31.26]
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
//@Methods: equal_interval, quantile, jenks
brew.classify(Method:optional, Classes:optional); // returns classified data. Defaults to natural breaks methods

// color theory
brew.setColorCode(ColorCodeString); // color ramp code... see below

//_____getters______//
//__________________//

// classification
brew.getSeries(); // returns Array of original data
brew.getNumClasses(); // returns set number of classes
brew.getBreaks(); // will call classify but for performance returns pointer if classify has already been called
brew.getClassificationMethods(); // returns available classification methods to pass to classify()

//color theory
brew.getColorCodes(); // returns array of all available color codes
brew.getColorCodesByType(); // returns object of color codes by type (diverging, sequential, qualitative)
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
["OrRd", "PuBu", "BuPu", "Oranges", 
"BuGn", "YlOrBr", "YlGn", "Reds", 
"RdPu", "Greens", "YlGnBu", "Purples", 
"GnBu", "Greys", "YlOrRd", "PuRd", "Blues", 
"PuBuGn", "Spectral", "RdYlGn", "RdBu", 
"PiYG", "PRGn", "RdYlBu", "BrBG", 
"RdGy", "PuOr", "Set2", "Accent", 
"Set1", "Set3", "Dark2", "Paired", 
"Pastel2", "Pastel1"];
*/
```

You can also view the simple test file (./test/index.html) to better understand how to use the library and visualize the color palettes.

This tool was built with inspiration from two outstanding open source repositories.

+ [axismaps/colorbrewer](https://github.com/axismaps/colorbrewer) - Cynthia Brewers Color Theory
+ [simogeo/geostats](https://github.com/simogeo/geostats)
