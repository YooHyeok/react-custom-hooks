# @c-hooks/use-tabs

React Hook to change and valid your document's input.

## Installation

#### yarn

`yarn add @c-hooks/use-input`

#### npm

`npm i @c-hooks/use-input`

## Usage

```js
import React from "react";
import useInput from "@c-hooks/use-input";


export default function App() {
  
  const maxLen = value => value.length < 10;
  const name = useInput("Mr.", maxLen );

  const includesAt = value => value.includes("@");
  const email = useInput(null, includesAt);
  
  return (
    <div className="App">
      <input 
        {...name} /* value={name.value} onChange={name.onChange} */ 
      />
      <input 
        {...email} /*value={email.value} onChange={email.onChange}*/ 
      /> 
    </div>
  );
}
```

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| initialValue | any | The initial Value before changes to input | yes      |
| validator | function | The validator you want to check your input change value | yes      |

### Returns

| Return | Type   | Description                                | Default value |
| -------- | ------ | ------------------------------------------ | -------- |
| value | any | The value after changes to input | null      |
| onChange | Array | The onChange to be registered in the onchange event listener of input | null      |