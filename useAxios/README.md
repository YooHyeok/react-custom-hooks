# @c-hooks/use-axios

React Hook to request API

## Installation

#### yarn

`yarn add @c-hooks/use-axios`

#### npm

`npm i @c-hooks/use-axios`

## Usage

```js
import React from "react";
import useAxios from "@c-hooks/use-axios";

export default function App() {
  const { loading, data, error, refetch } = useAxios({
    method: 'get'
    url: "https://yts.mx/api/v2/list_movies.json",
  });

  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading ? "Loading" : "loading"}</h2>
      <button onClick={refetch}>Hello</button>
    </div>
  );
}
```

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| config | Object | The requests can be made by passing the relevant config to axios  | yes      |


### Returns

| Return | Type   | Description                                | Default value |
| -------- | ------ | ------------------------------------------ | -------- |
| state | Object | { loading, error, data } info | null      |
| refetch | function | Function wrapped around the confirmation logic | null      |
