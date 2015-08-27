describe("phoenixDancer", function() {

  var phoenixDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    phoenixDancer = new PhoenixDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(phoenixDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(phoenixDancer.$node, 'slideToggle');
    phoenixDancer.step();
    expect(phoenixDancer.$node.slideToggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(phoenixDancer, "step");
      expect(phoenixDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(phoenixDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(phoenixDancer.step.callCount).to.be.equal(2);
    });
  });
});
