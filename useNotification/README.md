# @c-hooks/use-notification

React Hook to make any element go Fullscreen


## Installation

#### yarn

`yarn add @c-hooks/use-notification`

#### npm

`npm i @c-hooks/use-notification`

## Usage

```js
import {React} from "react";
import useFullscreen from "@c-hooks/use-notification";

export default function App() {
  const triggerNotif = useNotification("Can I Steal Your Kimchi?", {
    body: "I Love Kimchi Dont you?",
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
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

