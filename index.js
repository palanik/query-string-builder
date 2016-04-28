'use strict';

function Query(methods, options) {
  this._qs = {};
  this.options = options || {};

  var self = this;

  for (var m in methods) {
    (function (name, method) {
      self[name] = function(val) {
        // val could be `false`
        val = (method.default && val == undefined) ? method.default : val;
        var q = method.param || name;
        if ('add' === method.method) {  // Array
          if (!self._qs[q]) {
            self._qs[q] = [val];
          }
          else {
            self._qs[q].push(val);
          }
        }
        else {
          self._qs[q] = val;
        }
        return self;  // Fluent
      };

      // Alias?
      if (method.alias) {
        self[method.alias] = self[name];
      }
    })(m, methods[m]);  // iife

  } // for

}

Query.prototype.valueOf = function() {
  var qs = {};
  for (var q in this._qs) {
    qs[q] = this._qs[q];
    // if (Array.isArray(qs[q]) && this.options.arrayJoiner) {
    //   qs[q] = qs[q].join(this.options.arrayJoiner);
    // }
  }

  return qs;
};

Query.prototype.toString = function() {
  return require('querystring').stringify(this.valueOf());
}

module.exports = Query;
