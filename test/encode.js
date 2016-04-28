var expect = require('chai').expect;
var builder = require('../index');

describe("Encoding", function() {

//  describe("set", function() {
    it("space", function(done) {
      var qsb = new builder({
        "q": {
          "method": "set"
        }
      });
      qsb.q('Fluent Interface');
      expect(qsb.valueOf()).to.deep.equal({q:'Fluent Interface'});
      expect(qsb.toString()).to.equal('q=Fluent%20Interface');
      done();
    });

    it("question", function(done) {
      var qsb = new builder({
        "q": {
          "method": "set"
        }
      });
      qsb.q('?what');
      expect(qsb.valueOf()).to.deep.equal({q:'?what'});
      expect(qsb.toString()).to.equal('q=%3Fwhat');
      done();
    });

    it("hash", function(done) {
      var qsb = new builder({
        "q": {
          "method": "set"
        }
      });
      qsb.q('#happy');
      expect(qsb.valueOf()).to.deep.equal({q:'#happy'});
      expect(qsb.toString()).to.equal('q=%23happy');
      done();
    });

    it("ampersand", function(done) {
      var qsb = new builder({
        "q": {
          "method": "set"
        }
      });
      qsb.q('happy & healthy');
      expect(qsb.valueOf()).to.deep.equal({q:'happy & healthy'});
      expect(qsb.toString()).to.equal('q=happy%20%26%20healthy');
      done();
    });
//  });

});