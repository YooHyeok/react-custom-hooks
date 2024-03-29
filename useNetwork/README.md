# @c-hooks/use-network

React Hook to listen when the user goes online or offline.


## Installation

#### yarn

`yarn add @c-hooks/use-network`

#### npm

`npm i @c-hooks/use-network`

## Usage

```js
import React from "react";
import useNetwork from "@c-hooks/use-network";

function App() {
  const onNetworkChange = isOnline =>
    console.log(isOnline ? "We are back online" : "We just got offline");
  const isOnline = useNetwork(onNetworkChange);
  return <h1>{isOnline ? "We are online" : "We are offline"}</h1>;
}
```

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| onNetworkChange | function | Function to be called when the network status changes  | no      |

### Returns

| Return | Type   | Description                                | Default value |
| -------- | ------ | ------------------------------------------ | -------- |
| isOnline | Boolean | A boolean representing if the user is online or not | true      |