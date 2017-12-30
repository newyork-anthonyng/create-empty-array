[![Travis build status][travis-badge]][travis-build]
[![Codecov branch][codecov-badge]][codecov]
[![npm][npm-badge]][npm-version]
[![downloads][downloads-badge]][npmcharts]
[![MIT License][license-badge]][license]

[![gzip size][gzip-badge]][unpkg]
[![size][size-badge]][unpkg]

[![Maintainability][code-climate-badge]][code-climate]
[![PRs Welcome][pull-request-badge]](http://makeapullrequest.com)

# Why?
In React, there are times when you have a `number` and want to iterate over it.

You might do something like this:
```jsx
import React from "react";

const MyList = ({ length }) => {
  let temporaryArray = [];
  let i = 0;
  while (i < length) {
    temporaryArray.push(undefined);
    i++;
  }

  return (
    <ul>
      {temporaryArray.map((_, index) => {
        <li key={index}>Another one</li>
      })}
    </ul>  
  );
};
```

This utility creates an empty array with length `number` which you can then `map` over.

```jsx
import React from "react";
import createEmptyArray from "create-empty-array";

const MyList = ({ length }) => {
  return (
    <ul>
      {createEmptyArray(length).map((_, index) => {
        <li key={index}>Another one</li>
      })}
    </ul>  
  );
};
```

# Getting started
```shell
npm install --save create-empty-array
```

# Usage
```javascript
import createEmptyArray from "create-empty-array";

const emptyArray = createEmptyArray(3);
// [undefined, undefined, undefined]

const mapOverEmptyArray = emptyArray.map(() => "hi");
// ["hi", "hi", "hi"]
```

# Performance
See this [performance test on jsperf](https://jsperf.com/create-empty-arrays/).

[codecov]: https://codecov.io/gh/newyork-anthonyng/create-empty-array
[codecov-badge]: https://img.shields.io/codecov/c/github/newyork-anthonyng/create-empty-array/master.svg
[code-climate]: https://codeclimate.com/github/newyork-anthonyng/create-empty-array/maintainability
[code-climate-badge]: https://api.codeclimate.com/v1/badges/faefec967ef40a030c3e/maintainability
[downloads-badge]: https://img.shields.io/npm/dm/create-empty-array.svg?style=flat-square
[license]: https://github.com/newyork-anthonyng/create-empty-array/blob/master/LICENSE
[license-badge]: https://img.shields.io/npm/l/create-empty-array.svg?style=flat-square
[npmcharts]: https://npmcharts.com/compare/create-empty-array
[npm-version]:https://www.npmjs.com/package/create-empty-array
[npm-badge]: https://img.shields.io/npm/v/create-empty-array.svg?style=flat-square
[pull-request-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[travis-badge]: https://travis-ci.org/newyork-anthonyng/create-empty-array.svg?branch=master
[travis-build]: https://travis-ci.org/newyork-anthonyng/create-empty-array
[gzip-badge]: http://img.badgesize.io/https://unpkg.com/create-empty-array?compression=gzip&label=gzip%20size&style=flat-square
[size-badge]: http://img.badgesize.io/https://unpkg.com/create-empty-array?label=size&style=flat-square
[unpkg]: https://unpkg.com/create-empty-array
