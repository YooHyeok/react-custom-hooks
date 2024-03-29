# @c-hooks/use-confirm

React Hook to handle your document's event.

## Installation

#### yarn

`yarn add @c-hooks/use-confirm`

#### npm

`npm i @c-hooks/use-confirm`

## Usage

```js
import React from "react";
import useEvent from "@c-hooks/use-confirm";

export default function App() {

  const confirm = useConfirm(
    "Are You Sure?",
    (msg) => console.log(msg),
    (msg) => console.log(msg)
  );
  return (
    <div className="App">
      <button onClick={confirm}>Confirm Btn</button>
    </div>
  );

}
```

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| message | string | The Message to show the user on the confirmation propmt  | yes      |
| onConfirm | function | Function to be executed when the user confirms  | yes      |
| onCancel | function | Function to be executed when the user cancels  | yes      |

### Returns

| Return | Type   | Description                                | Default value |
| -------- | ------ | ------------------------------------------ | -------- |
| confirmAction | function | Function wrapped around the confirmation logic | null      |