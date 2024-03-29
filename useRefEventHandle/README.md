# @c-hooks/use-ref-event-handle

React Hook to handle your document's event.

## Installation

#### yarn

`yarn add @c-hooks/use-ref-event-handle`

#### npm

`npm i @c-hooks/use-ref-event-handle`

## Usage

```js
import React from "react";
import useRefEventHandle from "@c-hooks/use-ref-event-handle";

export default function App() {

  const handler = () => {
    alert("is Clicked!");
  };

  const title = useRefEventHandle("click", handler);
  return (
    <div className="App">
      <h1 ref={title}> Hi </h1>
    </div>
  );
}
```

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| event | event | The handler function is registered to the event listener of the ref element along with the event object.  | yes      |
| handler | function | The event object is registered to the event listener of the ref element along with the handler function.  | yes      |

### Returns

| Return | Type   | Description                                | Default value |
| -------- | ------ | ------------------------------------------ | -------- |
| element | HTMLHeadingElement | The element is referenced to element of useRef function returned | null      |