var expect = require('chai').expect;
var builder = require('../index');


describe("default", function() {

  describe("set", function() {
    it("once", function(done) {
      var qsb = new builder({
        "q": {
          "method": "set",
           "default": "google"
        }
      });
      qsb.q();
      expect(qsb.valueOf()).to.deep.equal({q:'google'});
      expect(qsb.toString()).to.equal('q=google');
      done();
    });

    it("twice", function(done) {
      var qsb = new builder({
        "q": {
          "method": "set",
          "default": "google"
        }
      });
      qsb.q();
      qsb.q('bing');
      expect(qsb.valueOf()).to.deep.equal({q:'bing'});
      expect(qsb.toString()).to.equal('q=bing');
      done();
    });
  });

  describe("add", function() {
    it("single", function(done) {
      var qsb = new builder({
        "q": {
          "method": "add",
          "default": "google"
        }
      });
      qsb.q();
      expect(qsb.valueOf()).to.deep.equal({q:['google']});
      expect(qsb.toString()).to.equal('q=google');
      done();
    });

    it("double", function(done) {
      var qsb = new builder({
        "q": {
          "method": "add",
          "default": "google"
        }
      });
      qsb.q().q('bing');
      expect(qsb.valueOf()).to.deep.equal({q:['google', 'bing']});
      expect(qsb.toString()).to.equal('q=google&q=bing');
      done();
    });
    
    it("multi", function(done) {
      var qsb = new builder({
        "q": {
          "method": "add",
          "default": "google"
        }
      });
      qsb.q().q('bing').q('yahoo');
      expect(qsb.valueOf()).to.deep.equal({q:['google', 'bing', 'yahoo']});
      expect(qsb.toString()).to.equal('q=google&q=bing&q=yahoo');
      done();
    });
  });

});

