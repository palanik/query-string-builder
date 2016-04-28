var expect = require('chai').expect;
var builder = require('../index');



describe("Alias", function() {

  describe("set", function() {
    it("original once", function(done) {
      var qsb = new builder({
        "q": {
          "method": "set",
          "alias": "query"
        }
      });
      qsb.q('google');
      expect(qsb.valueOf()).to.deep.equal({q:'google'});
      expect(qsb.toString()).to.equal('q=google');
      done();
    });

    it("alias once", function(done) {
      var qsb = new builder({
        "q": {
          "method": "set",
          "alias": "query"
        }
      });
      qsb.query('google');
      expect(qsb.valueOf()).to.deep.equal({q:'google'});
      expect(qsb.toString()).to.equal('q=google');
      done();
    });

    it("twice", function(done) {
      var qsb = new builder({
        "q": {
          "method": "set",
          "alias": "query"
        }
      });
      qsb.query('google');
      qsb.query('bing');
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
          "alias": "query"
        }
      });
      qsb.query('google');
      expect(qsb.valueOf()).to.deep.equal({q:['google']});
      expect(qsb.toString()).to.equal('q=google');
      done();
    });

    it("double", function(done) {
      var qsb = new builder({
        "q": {
          "method": "add",
          "alias": "query"
        }
      });
      qsb.query('google').q('bing');
      expect(qsb.valueOf()).to.deep.equal({q:['google', 'bing']});
      expect(qsb.toString()).to.equal('q=google&q=bing');
      done();
    });
    
    it("multi", function(done) {
      var qsb = new builder({
        "q": {
          "method": "add",
          "alias": "query"
        }
      });
      qsb.query('google').q('bing').query('yahoo');
      expect(qsb.valueOf()).to.deep.equal({q:['google', 'bing', 'yahoo']});
      expect(qsb.toString()).to.equal('q=google&q=bing&q=yahoo');
      done();
    });
  });

});

