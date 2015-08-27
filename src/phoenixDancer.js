var PhoenixDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  var phoenixes = ['Harry', 'Ron', 'Hermione', 'Luna', 'Dobby'];
  var pick = Math.floor(Math.random() * phoenixes.length);
  var phoenixName = phoenixes[pick];
  var imgSource = 'src/images/' + phoenixName + '.jpeg';
  this.$node.addClass('phoenix').prepend('<img class="order" src="'+imgSource+'"/>');
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
  this.$node.slideToggle();
};

PhoenixDancer.prototype.lineUp = function() {
  this.setPosition($("body").height() - 100, this.left);
};