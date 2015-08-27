$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000 + 500
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });

  $(".lineUp").on("click", function(event) {
    // set separate dancer arrays
    var deathEaters = [];
    var phoenixes = [];
    var muggles = [];
    // fill three arrays with dancers based on type
    for (var dancer = 0; dancer < window.dancers.length; dancer++) {
      if (window.dancers[dancer] instanceof DeathEaterDancer) {
        deathEaters.push(window.dancers[dancer]);
      } else if (window.dancers[dancer] instanceof PhoenixDancer) {
        phoenixes.push(window.dancers[dancer]);
      } else {
        muggles.push(window.dancers[dancer]);
      }
    }
    // store spacing units by dividing body width by array lengths
    var deathUnit = $(window).width() / deathEaters.length + 1;
    var phoenixUnit = $(window).width() / phoenixes.length + 1;
    var muggleUnit = $(window).width() / muggles.length + 1;
    // iterate through each array and call lineUp passing in an incremented location
    for (var i = 0; i < deathEaters.length; i++) {
      deathEaters[i].lineUp(deathUnit * (i+1) - 0.75*deathUnit);
    }
    for (var i = 0; i < phoenixes.length; i++) {
      phoenixes[i].lineUp(phoenixUnit * (i+1) - 0.75*phoenixUnit);
    }
    for (var i = 0; i < muggles.length; i++) {
      muggles[i].lineUp(muggleUnit * (i+1) - 0.75*muggleUnit);
    }
  });

  $(document).on("click", ".deathEater", function(event){
    for (var dancer = 0; dancer < window.dancers.length; dancer++) {
      if (window.dancers[dancer].$node.css('left') === $(this).css('left')) {
        window.dancers[dancer].annihilate();
      }
    }
  });

});

