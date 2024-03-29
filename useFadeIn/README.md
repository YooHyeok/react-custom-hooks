# @c-hooks/use-fade-in

React Hook to fade in any element.


## Installation

#### yarn

`yarn add @c-hooks/use-fade-in`

#### npm

`npm i @c-hooks/use-fade-in`

## Usage

```js
import React from "react";
import useFadeIn from "@c-hooks/use-fade-in";

export default function App() {
  const fadeIn = useFadeIn(5, 10);
  return <h1 {...fadeIn}>This will fade in.</h1>;
}
```

### Arguments

| Argument | Type   | Description                                | Required | Default value |
| -------- | ------ | ------------------------------------------ | -------- | ------------- |
| duration | number | Sets the duration of the transition. In seconds  | yes      | 1      |
| delay | number | Delays of transition's start. In seconds  | yes      | 0      |

### Return
`useFadeIn` returns an object containing the following:
| Return | Type   | Description                                | Default value |
| -------- | ------ | ------------------------------------------ | -------- |
| ref | React Ref | A ref created to fadeIn the element | null      |
| style | object | Style object containing {opacity:0} to give to the element as a default | null      |

