// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');  

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.step();
};


Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  setTimeout(function() {context.step();}, context.timeBetweenSteps);
};

Dancer.prototype.lineUp = function(x) {
  x = x || this.left;
  this.setPosition($("body").height() / 2, x);
};

Dancer.prototype.findDistance = function(enemy) {
  return Math.sqrt(Math.pow((this.top - enemy.top), 2) + Math.pow((this.left - enemy.left), 2));
};