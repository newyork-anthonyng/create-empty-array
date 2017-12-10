[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Travis build status](https://travis-ci.org/newyork-anthonyng/create-empty-array.svg?branch=master)
[![Codecov branch](https://img.shields.io/codecov/c/github/newyork-anthonyng/create-empty-array/master.svg)](https://codecov.io/gh/newyork-anthonyng/create-empty-array)

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
