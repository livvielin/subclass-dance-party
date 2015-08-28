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
    for (var j = 0; j < phoenixes.length; j++) {
      phoenixes[j].lineUp(phoenixUnit * (j+1) - 0.75*phoenixUnit);
    }
    for (var k = 0; k < muggles.length; k++) {
      muggles[k].lineUp(muggleUnit * (k+1) - 0.75*muggleUnit);
    }
  });

  $(document).on("click", ".deathEater", function(event){
    for (var dancer = 0; dancer < window.dancers.length; dancer++) {
      if (window.dancers[dancer].$node.css('left') === $(this).css('left')) {
        window.dancers[dancer].annihilate();
      }
    }
  });

  var harryAudio = document.createElement('audio');
  harryAudio.setAttribute('src', 'src/sounds/Harry.mp3');
  harryAudio.setAttribute('loop', 'loop');
  harryAudio.load();
  $(document).on("click", ".Harry", function(event) {
    if (harryAudio.paused) {
      harryAudio.play();
    } else {
      harryAudio.pause();
    }
  });

  var snapeAudio = document.createElement('audio');
  snapeAudio.setAttribute('src', 'src/sounds/Snape.mp3');
  snapeAudio.setAttribute('loop', 'loop');
  snapeAudio.load();
  $(document).on("click", ".Snape", function(event) {
    if (snapeAudio.paused) {
      snapeAudio.play();
    } else {
      snapeAudio.pause();
    }
  });

  var ronAudio = document.createElement('audio');
  ronAudio.setAttribute('src', 'src/sounds/Ron.mp3');
  ronAudio.setAttribute('loop', 'loop');
  ronAudio.load();
  $(document).on("click", ".Ron", function(event) {
    if (ronAudio.paused) {
      ronAudio.play();
    } else {
      ronAudio.pause();
    }
  });

  var hermioneAudio = document.createElement('audio');
  hermioneAudio.setAttribute('src', 'src/sounds/Hermione.mp3');
  hermioneAudio.setAttribute('loop', 'loop');
  hermioneAudio.load();
  $(document).on("click", ".Hermione", function(event) {
    if (hermioneAudio.paused) {
      hermioneAudio.play();
    } else {
      hermioneAudio.pause();
    }
  });

  var dumbledoreAudio = document.createElement('audio');
  dumbledoreAudio.setAttribute('src', 'src/sounds/Dumbledore.mp3');
  dumbledoreAudio.setAttribute('loop', 'loop');
  dumbledoreAudio.load();
  $(document).on("click", ".Dumbledore", function(event) {
    if (dumbledoreAudio.paused) {
      dumbledoreAudio.play();
    } else {
      dumbledoreAudio.pause();
    }
  });

  var voldemortAudio = document.createElement('audio');
  voldemortAudio.setAttribute('src', 'src/sounds/Voldemort.mp3');
  voldemortAudio.setAttribute('loop', 'loop');
  voldemortAudio.load();
  $(document).on("click", ".Voldemort", function(event) {
    if (voldemortAudio.paused) {
      voldemortAudio.play();
    } else {
      voldemortAudio.pause();
    }
  });

});

