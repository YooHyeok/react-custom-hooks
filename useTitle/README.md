# @c-hooks/use-title

React Hook to change your document's title.

## Installation

#### yarn

`yarn add @c-hooks/use-title`

#### npm

`npm i @c-hooks/use-title`

## Usage

```js
import React from "react";
import useTitle from "@c-hooks/use-title";

export default function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 1000); //1초마다 title text 변경
  return (
    <div className="App">
      <input
        onChange={(e) => {
          titleUpdater(e.target.value); //변경(입력)될때마다 title text 변경
        }}
      />
    </div>
  );
}
```

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| initialTitle | any | The initial Title  changes to title element innerText | yes      |

### Returns

| Return | Type   | Description                                | Default value |
| -------- | ------ | ------------------------------------------ | -------- |
| setTitle | function | The setTitle function to be changeed states of title element innerText | null      |