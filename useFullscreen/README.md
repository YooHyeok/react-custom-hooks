# @c-hooks/use-fullscreen

React Hook to make any element go Fullscreen


## Installation

#### yarn

`yarn add @c-hooks/use-fullscreen`

#### npm

`npm i @c-hooks/use-fullscreen`

## Usage

```js
import {React, useCallback} from "react";
import useFullscreen from "@c-hooks/use-fullscreen";

export default function App() {
  const onFullS = useCallback((isFull) => {
    console.log(isFull ? "We are full" : "We are exit");
  }, []);
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App">
      <div ref={element}>
        <button onClick={exitFull}>Exit FullScreen</button>
      </div>
      <button onClick={triggerFull}>Make FullScreen</button>
    </div>
  );
}

```

### Arguments

| Argument | Type   | Description                                | Arguments | Required | Default value |
| -------- | ------ | ------------------------------------------ | -------- | -------- | ------------- |
| onChange | function | Function to be called when the screen goes Fullscreen or exits is  | isFull:Boolean      | no      | null      |

### Return
`useFullscreen` returns an object containing the following:
| Return | Type   | Description                                | Default value |
| -------- | ------ | ------------------------------------------ | -------- |
| element | React Ref | Ref to add to the element that you want to make fullscreen | null      |
| triggerFull | Function | Function to make the element enter fullscreen | null      |
| exitFull | Function | Function to make the element exit fullscreen | null      |

