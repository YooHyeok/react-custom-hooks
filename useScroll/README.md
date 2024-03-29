# @c-hooks/use-scroll

React Hook to get X/Y coordinates of current position of the scroll.


## Installation

#### yarn

`yarn add @c-hooks/use-scroll`

#### npm

`npm i @c-hooks/use-scroll`

## Usage

```js
import React from "react";
import useFadeIn from "@c-hooks/use-scroll";

export default function App() {
  const { scrollY } = useScroll();
  const pStyleProps = { height: "1000vh" }; //드래그하면 스크롤 생성됨 - viewport height약자, 높이 비율 1000% - 동적 크기 조정
  const h1StyleProps = {
    position: "fixed",
    color: scrollY > 100 ? "red" : "blue",
  };

  return (
    <div className="App" style={pStyleProps}>
      <h1 style={h1StyleProps}>Hi</h1>
    </div>
  );
}
```

### Return
`useFadeIn` returns an object containing the following:
| Return | Type   | Description                                | Default value |
| -------- | ------ | ------------------------------------------ | -------- |
| Coords | Object | An object containing the x/y coordinates of the current scroll position | `{x:0, y:0}`      |

