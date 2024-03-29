# @c-hooks/use-prevent-leave

React Hook to prompt the user for confirmation before leaving the page. Useful when changes haven't been saved.


## Installation

#### yarn

`yarn add @nooks/use-prevent-leave`

#### npm

`npm i @c-hooks/use-prevent-leave`

## Usage

```js
import React from "react";
import usePreventLeave from "@c-hooks/use-preventLeave";

export default function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const sendToApi = () => {
    // Save changes 버튼 클릭시 해당 함수가 종료되기 전에 페이지가 종료되면 알림이 뜬다.
  }
  const saveChanges = async () => {
    enablePrevent(); // 
    await sendToApi();
    disablePrevent();
  };
  return <button onClick={saveChanges}>Save changes</button>;
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