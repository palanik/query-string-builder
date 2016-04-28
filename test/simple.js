var expect = require('chai').expect;
var builder = require('../index');

describe("Simple Single", function() {

  describe("set", function() {
    it("once", function(done) {
      var qsb = new builder({
        "q": {
          "method": "set"
        }
      });
      qsb.q('google');
      expect(qsb.valueOf()).to.deep.equal({q:'google'});
      expect(qsb.toString()).to.equal('q=google');
      done();
    });

    it("twice", function(done) {
      var qsb = new builder({
        "q": {
          "method": "set"
        }
      });
      qsb.q('google');
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
          "method": "add"
        }
      });
      qsb.q('google');
      expect(qsb.valueOf()).to.deep.equal({q:['google']});
      expect(qsb.toString()).to.equal('q=google');
      done();
    });

    it("double", function(done) {
      var qsb = new builder({
        "q": {
          "method": "add"
        }
      });
      qsb.q('google').q('bing');
      expect(qsb.valueOf()).to.deep.equal({q:['google', 'bing']});
      expect(qsb.toString()).to.equal('q=google&q=bing');
      done();
    });

    it("multi", function(done) {
      var qsb = new builder({
        "q": {
          "method": "add"
        }
      });
      qsb.q('google').q('bing').q('yahoo');
      expect(qsb.valueOf()).to.deep.equal({q:['google', 'bing', 'yahoo']});
      expect(qsb.toString()).to.equal('q=google&q=bing&q=yahoo');
      done();
    });
  });

});

describe("Simple Multi", function() {

  describe("set", function() {
    it("one", function(done) {
      var qsb = new builder({
        "q": {
          "method": "set"
        },
        "num": {
          "method": "set"
        },
        "start": {
          "method": "set"
        }
      });
      qsb.q('google');
      expect(qsb.valueOf()).to.deep.equal({q:'google'});
      expect(qsb.toString()).to.equal('q=google');
      done();
    });

    it("two", function(done) {
      var qsb = new builder({
        "q": {
          "method": "set"
        },
        "num": {
          "method": "set"
        },
        "start": {
          "method": "set"
        }
      });
      qsb.q('google')
        .start(1);
      expect(qsb.valueOf()).to.deep.equal({q:'google',start:1});
      expect(qsb.toString()).to.equal('q=google&start=1');
      done();
    });

    it("all", function(done) {
      var qsb = new builder({
        "q": {
          "method": "set"
        },
        "num": {
          "method": "set"
        },
        "start": {
          "method": "set"
        }
      });
      qsb.q('google')
        .start(1)
        .num(10);
      expect(qsb.valueOf()).to.deep.equal({q:'google',num:10,start:1});
      expect(qsb.toString()).to.equal('q=google&start=1&num=10');
      done();
    });
  });

});