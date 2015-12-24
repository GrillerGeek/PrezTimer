describe('Service: prezService', function() {
  var prez;
  beforeEach(module('prezTimer'));
  beforeEach(inject(function(_prezService_) {
  prez = _prezService_;
  }));

  it('should attach a list of awesomeThings to the service', function() {
    expect(prez.awesomeThings.length).toBe(3);
  });

});
