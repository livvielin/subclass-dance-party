var DeathEaterDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  var eaters = ['Voldemort', 'Bellatrix', 'Malfoy', 'Dementor', 'Snape'];
  var pick = Math.floor(Math.random() * eaters.length);
  var eaterName = eaters[pick];
  var imgSource = 'src/images/' + eaterName + '.jpeg';
  var className = 'deathEater ' + eaters[pick];
  this.$node.addClass(className).prepend('<img class="death" src="'+imgSource+'"/>');
  // http://img10.deviantart.net/a9ef/i/2013/346/7/4/harry_potter_characters_by_saltymoose-d6xo7ik.jpg
  // from http://www.zerochan.net/1395261#full
  // this.$('img').attr('src', imgSource);
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
  //this.$node.fadeToggle();
};

DeathEaterDancer.prototype.lineUp = function(x) {
  x = x || this.left;
  this.setPosition(50, x);
};

DeathEaterDancer.prototype.annihilate = function() {
  for (var enemy = 0; enemy < window.dancers.length; enemy++) {
    if (this.$node.hasClass("Voldemort")) {
      if (this.$node.css('left') !== window.dancers[enemy].$node.css('left')) {
        window.dancers[enemy].$node.remove();
        window.dancers.splice(enemy,1);
      }
    } else if (this.$node.hasClass("Snape")) {
      if (window.dancers[enemy].$node.hasClass("Voldemort")) {
        window.dancers[enemy].$node.remove();
        window.dancers.splice(enemy,1);
      }
    } else if (!(window.dancers[enemy] instanceof DeathEaterDancer)) {
      var distance = this.findDistance(window.dancers[enemy]);
      if (window.dancers[enemy] instanceof PhoenixDancer) {
        if (distance < 500) {
          window.dancers[enemy].$node.remove();
          window.dancers.splice(enemy,1);
          console.log('Killed a wizard muahahahhah');
        }
      } else {
        if (distance < 1000) {
          window.dancers[enemy].$node.remove();
          window.dancers.splice(enemy,1);
          console.log('Killed a filthy muggle argh');
        }
      }
    }
  }
};