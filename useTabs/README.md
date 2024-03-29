# @c-hooks/use-tabs

React Hook to change your document's tabs.

## Installation

#### yarn

`yarn add @c-hooks/use-tabs`

#### npm

`npm i @c-hooks/use-tabs`

## Usage

```js
import React from "react";
import useTabs from "@c-hooks/use-tabs";

const content = [
  { tab: "Section 1", content: "I'm the content of the Section 1" },
  { tab: "Section 2", content: "I'm the content of the Section 2" },
];

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button
          onClick={() => {
            changeItem(index);
          }}
        >
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
```

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| initialTab | Number | The initial Tab before changes | yes      |
| allTabs | Array | The all Tabs you want to change on your document | yes      |

### Returns

| Return | Type   | Description                                | Default value |
| -------- | ------ | ------------------------------------------ | -------- |
| currentItem | any | The tab element corresponding to the currently selected index in the passed parameter 'allTabs' array. | null      |
| changeItem | Array | The set function that changes the index state used as the selected tab. | null      |