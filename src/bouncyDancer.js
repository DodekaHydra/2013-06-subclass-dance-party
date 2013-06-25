var BouncyDancer = function(top, left, eventFrequency) {
  var newDancer = Dancer.call(this, top, left, eventFrequency, entrance, startingEvent);

  this.eventFrequency = eventFrequency;
  this.top = top;
  this.left = left;
  this.$node.addClass('space-invader');
  this.$node.addClass('animated');


  var danceTypes = ["flash", "shake", "bounce", "tada", "swing", "wobble", "wiggle", "pulse"];
  var entranceTypes = ["bounceIn", "bounceInUp", "bounceInDown", "bounceInLeft", "bounceInRight", "lightSpeedIn", "rollIn"];
  var startingEvent = danceTypes[Math.floor(danceTypes.length * Math.random())];
  var entrance = entranceTypes[Math.floor(entranceTypes.length * Math.random())];
  //debugger;
  var color, colorfulInvader = [];
  this.$node.addClass(entrance);
  var invaderTemplate = ["0 0 0 1em", "0 1em 0 1em", "-2.5em 1.5em 0 .5em", "2.5em 1.5em 0 .5em", "-3em -3em 0 0", "3em -3em 0 0", "-2em -2em 0 0", "2em -2em 0 0", "-3em -1em 0 0", "-2em -1em 0 0", "2em -1em 0 0", "3em -1em 0 0", "-4em 0 0 0", "-3em 0 0 0", "3em 0 0 0", "4em 0 0 0", "-5em 1em 0 0", "-4em 1em 0 0", "4em 1em 0 0", "5em 1em 0 0", "-5em 2em 0 0", "5em 2em 0 0", "-5em 3em 0 0", "-3em 3em 0 0", "3em 3em 0 0", "5em 3em 0 0", "-2em 4em 0 0", "-1em 4em 0 0", "1em 4em 0 0", "2em 4em 0 0"];
  var colorz = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflower", "cornsilk", "crimson", "cyanaqua", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrod", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow"];
  _.each(invaderTemplate, function(val, ind, arr) {
    color = colorz[Math.floor(Math.random() * colorz.length)];
    colorfulInvader.push(val + " " + color);
  });
  colorfulInvader = colorfulInvader.join(", ");
  var colorObj = {
    'box-shadow': colorfulInvader
  };
  var size = "'" + Math.floor(Math.random() * 30) + "'";
  this.$node.css({
    "font-size": size
  });
  this.$node.css(colorObj);

  this.animate(entrance, startingEvent, danceTypes);
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;
BouncyDancer.prototype.animate = function(entrance, startingEvent, danceTypes) {
  Dancer.prototype.animate.call(this, entrance, startingEvent, danceTypes);
};