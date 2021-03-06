describe("deathEaterDancer", function() {

  var deathEaterDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    deathEaterDancer = new DeathEaterDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(deathEaterDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(deathEaterDancer.$node, 'fadeToggle');
    deathEaterDancer.step();
    expect(deathEaterDancer.$node.fadeToggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(deathEaterDancer, "step");
      expect(deathEaterDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(deathEaterDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(deathEaterDancer.step.callCount).to.be.equal(2);
    });
  });
});
