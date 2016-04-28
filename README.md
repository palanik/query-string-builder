# query-string-builder

  Create a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) query string builder.

[![NPM version](https://img.shields.io/npm/v/query-string-builder.svg?style=flat)](https://www.npmjs.org/package/query-string-builder)
[![Build Status](https://img.shields.io/travis/palanik/query-string-builder.svg?style=flat)](https://travis-ci.org/palanik/query-string-builder)
[![Coverage Status](https://coveralls.io/repos/palanik/query-string-builder/badge.svg?service=github)](https://coveralls.io/github/palanik/query-string-builder)

## Installation
```bash
    $ npm install query-string-builder
```

## Example
```js
var qsb = require('query-string-builder');

var twitter_qs = {
  "q": {
    "method": "set"
  },
  "geo": {
    "method": "set",
    "param": "geocode"
  },
  "language": {
    "method": "set",
    "param": "lang"
  },
  "locale": {
    "method": "set",
    "default": "ja"
  },
  "result_type": {
    "method": "set"
  },
  "count": {
    "method": "set"
  },
  "callback": {
    "method": "set"
  }
};

var twitterQuery = new qsb(twitter_qs);

// Use the builder
var qs = twitterQuery
      .q("#happy")
      .language("en")
      .result_type("popular")
      .count(100)
      .toString();

// qs == "q=happy&lang=en&result_type=popular&count=100"
```

## License

  [MIT](LICENSE)