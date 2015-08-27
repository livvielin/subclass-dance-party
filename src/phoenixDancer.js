var PhoenixDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  //this.$node = $('<span class="dancer phoenix"></span>');
  this.$node.addClass('phoenix');
};

PhoenixDancer.prototype = Object.create(Dancer.prototype);
PhoenixDancer.prototype.constructor = PhoenixDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
PhoenixDancer.prototype.oldStep = function() {
  Dancer.prototype.step.call(this);
};

PhoenixDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // phoenix dancer does something
};