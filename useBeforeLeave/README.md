# @c-hooks/use-before-leave

React Hook to execute a function when the mouse leaves the page. Useful to show a popup or for analytics.

## Installation

#### yarn

`yarn add @c-hooks/use-before-leave`

#### npm

`npm i @c-hooks/use-before-leave`

## Usage

```js
import React from "react";
import useBeforeLeave from "@nooks/use-before-leave"; // body 최상단 위로 벗어났을 경우 기능 동작

export default function App() {
  const beforeLeave = () => console.log("User is leaving...");
  useBeforeLeave(beforeLeave); // 컴포넌트에서 훅을 단순 호출하고 해당 컴포넌트기준 mouse levae 함으로써 동작됨
  return <h1>Hello Nooks</h1>;
}
```

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| onBeforeLeave | function | Function to be called when the mouse leaves the document  | yes      |