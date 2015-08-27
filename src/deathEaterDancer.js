var DeathEaterDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  var eaters = ['Voldemort', 'Bellatrix', 'Malfoy'];
  var pick = Math.floor(Math.random() * eaters.length);
  var eaterName = eaters[pick];
  this.$node.addClass('deathEater').prepend('<img src="src/images/Voldemort.jpeg"/>');
};

DeathEaterDancer.prototype = Object.create(Dancer.prototype);
DeathEaterDancer.prototype.constructor = DeathEaterDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
DeathEaterDancer.prototype.oldStep = function() {
  Dancer.prototype.step.call(this);
};

DeathEaterDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // death eater sends out dark mark
};