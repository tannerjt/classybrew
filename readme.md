##classybrew

**classybrew** uses the Jenks Natural Breaks Algorithm to generate classes based on intrinsic breaks in your data.  **classybrew** will also generate a range of **sequential** color codes based on the number of breaks in your data and a user defined palette.

This tool was built with help from two outstanding open source repositories.

+ [axismaps/colorbrewer](https://github.com/axismaps/colorbrewer)
+ [simogeo/geostats](https://github.com/simogeo/geostats)

For more information about Jenk's Natural Breaks and a helpful python port of the algorithm, visit [Daniel J Lewis's Blog](http://danieljlewis.org/2010/06/07/jenks-natural-breaks-algorithm-in-python/).

###Using classybrew

**Basics - Setup**

'''javascript
var brew = new classyBrew();
brew.setSeries([30.01, 14.9, 22.71, 24.96, 7.17, 22.31, 26.23, 24.62, 24.35, 29.37, 28.55, 20.05, 22.06, 19.04, 21.95, 28.13, 21.28, 25.42, 19.16, 28.52, 29.63, 21.37, 16.69, 30.05, 25.81, 21.26, 23.48, 25.07, 31.26, 26.9, 24.04, 16.46, 27.47, 19.3, 20.51, 21.43]);
brew.setNumClasses(5);
brew.setColorCode("BuGn");
'''

**Basics - Classify**

You can use classify or getBreaks

'''javascript
brew.classify(); // returns [7.17,14.9,19.3,22.71,26.9,31.26]
'''

**Basics - Retrieval**

'''javascript
var breaks = brew.getBreaks(); // returns [7.17,14.9,19.3,22.71,26.9,31.26]
var colors = brew.getColors(); // returns [rgb(237,248,251),rgb(178,226,226),rgb(102,194,164),rgb(44,162,95),rgb(0,109,44)]
'''

**Basics - Get Color by Number**

'''javascript
brew.getColorInRange(7.5)
'''