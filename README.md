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

# Usage with React
With React, there are times when you have a number and want to iterate over it. This utility creates an array for you which you can then use `map` with.

```jsx
import React from "react";
import createEmptyArray from "create-empty-array";

class MyList extends React.Component {
  render() {
    return (
      <ul>
        {createEmptyArray(10).map((_, index) => <li key={index}>Hi</li>}
      </ul>
    );
  }
}
```

# Performance
See this [performance test on jsperf](https://jsperf.com/create-empty-arrays/).
