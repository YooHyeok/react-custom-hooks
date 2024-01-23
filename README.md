# react-custom-hooks
##  react custom hooks 구현 및 NPM publish 
## Each hook has its own pacakge

| Hook              | Description                                               | Documentation                                                                               | NPM Page                                                              |
| ----------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| useTitle          | Update your document's title.                             | [Documentation](https://github.com/YooHyeok/react-custom-hooks/tree/main/useTitle)          | [NPM Page](https://www.npmjs.com/package/@c-hooks/use-title)            |
| useConfirmation   | Prompt a confirmation before executing a function.        | [Documentation](https://github.com/YooHyeok/react-custom-hooks/tree/main/useConfirm)        | [NPM Page](https://www.npmjs.com/package/@c-hooks/use-confirm)          |
| useRefEventHandle | Detect a event on any React Element.                      | [Documentation](https://github.com/YooHyeok/react-custom-hooks/tree/main/useRefEventHandle) | [NPM Page](https://www.npmjs.com/package/@c-hooks/use-ref-event-handle) |
| useBeforeLeave    | Execute a function when the mouse leaves the document.    | [Documentation](https://github.com/YooHyeok/react-custom-hooks/tree/main/useBeforeLeave)    | [NPM Page](https://www.npmjs.com/package/@c-hooks/use-before-leave)     |
| useNetwork        | Listen when the user goes online or offline.              | [Documentation](https://github.com/YooHyeok/react-custom-hooks/tree/main/useNetwork)        | [NPM Page](https://www.npmjs.com/package/@c-hooks/use-network)          |
| useScroll         | Get X/Y coordinates of current position of the scroll.    | [Documentation](https://github.com/YooHyeok/react-custom-hooks/tree/main/useScroll)         | [NPM Page](https://www.npmjs.com/package/@c-hooks/use-scroll)           |
| usePreventLeave   | Prompt the user for confirmation before leaving the page. | [Documentation](https://github.com/YooHyeok/react-custom-hooks/tree/main/usePreventLeave)   | [NPM Page](https://www.npmjs.com/package/@c-hooks/use-prevent-leave)    |
| useFadeIn         | Fade in any element.                                      | [Documentation](https://github.com/YooHyeok/react-custom-hooks/tree/main/useFadeIn)         | [NPM Page](https://www.npmjs.com/package/@c-hooks/use-fade-in)          |
| useFullscreen     | Make any element go Fullscreen                            | [Documentation](https://github.com/YooHyeok/react-custom-hooks/tree/main/useFullScreen)     | [NPM Page](https://www.npmjs.com/package/@c-hooks/use-fullscreen)       |
| useAxios          | to request API                                            | [Documentation](https://github.com/YooHyeok/react-custom-hooks/tree/main/useAxios)          | [NPM Page](https://www.npmjs.com/package/@c-hooks/use-axios)       |

# 리액트 훅이란?
결론적으로 말하면 함수형 프로그래밍을 접목한 함수형 컴포넌트에서 state를 관리할 수 있게 해준다.   
hooks를 지원하기 전까지 함수형 컴포넌트에서는 state를 사용할 수 없었다.   
함수형 컴포넌트는 단순히 props값을 전달받아 렌더링해주는 역할로써만 사용되었었다.   
react가 꾸준히 업데이트 되면서 함수형 컴포넌트에서도 state를 사용,관리 할 수 있게 되었는데, 이때 사용하는것이 바로 훅이다.    
훅의 역사는 recompose 라는 라이브러리에서 시작되었다.   
해당 라이브러리는 리액트 팀에 의하여 인수되었다.    
recompose + react의 결합이 바로 react hook 이라고 할 수 있다.   


```javascript
import Component from "react"

export default class App extends Component {
  state = {count:0}

  render() {
    const { count } = this.state
    return 
    (<>
      <div>{count}</div>
      <button onClick={()=> this.setState({count:count+1})}>Increment</button>
    </>)
  }
}
```
위와같이 클래스형 컴포넌트에는    
react로부터 Component를 상속받고,   
state, function 등에 접근하기 위해서는 this와 같은 문법이 필요하고,   
라이프사이클에 필요한 많은 함수(constructor, render, componentDidMount)등 여러 가지를 필요로 한다.
클래스에서 벗어나 this를 사용하지 않는 함수형 프로그래밍으로 바꾸는 방법이 있다.

그것이 바로 리액트 훅이다.

아래 예시코드를 통해 클래스형 컴포넌트를 함수형 컴포넌트로 변환하고
useState라는 리액트 훅을 사용하여 state를 관리해 본다.
```javascript
import {useState} from "react"

export default function App {
  const [count, setCount] = useState(0)
  modify = n => {setCount({count:n})}

  return (<>
    <div>{count}</div>
    <button onClick={()=> modify(count+1)}>Increment</button>
  </>)
}
```
useState는 state로 사용할 value와 변경하는 함수 2개를 array로 제공해준다.     
이것을 임의로 우리가 별칭을 부여하여 사용한다.  
(위 코드에서 value는 count라는 별칭으로, 변경하는 함수는 setCount라는 별칭으로 선언했으며 개발자는 이를 변수명, 함수명 처럼 사용하게 된다.)

Hook 즉, 특정한 기능을 끌어당기거나 연결한다는 의미론적인 해석을 토대로
useState 훅은 리액트 state의 관리 아래서 사용되는 setState의 기능을 함수형 컴포넌트로 끌어당긴 것이라 말할 수 있다.
(함수형 컴포넌트에서도 클래스형 컴포넌트의 상태값 state를 갖고, setState처럼 업데이트 할 수 있도록 도와주는것이 기능적인 부분을 끌어 왔으나, 클래스와 함수형프로그래밍의 내부적인 매커니즘이 다르기 때문에 React 내부적으로도 구현된 코드와 매커니즘은 전혀 다르다.)

이러한 Hook 중에는 ComponentDidMount 혹은 componentDidUpdate와 같은 컴포넌트의 생명주기를 관리할 수 있는
useEffect라는 Hook도 존재한다.
<hr/>

# 커스텀 훅과 이벤트
자신만의 Hook을 만들면 컴포넌트 로직을 함수로 뽑아내어 재사용 할 수 있다.
즉, 커스텀 훅을 통해 다른 function에서 이벤트를 처리할 수도 있게 된다.
즉, 이벤트를 분리된 파일, 다른 entity에 연결하여 처리한다.
이렇게되면 여러 컴포넌트에서 해당 훅의 기능을 공유하여 사용할 수 있게 된다.

## useInput
```javascript
import {useState} from "react"
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {target: {value}} = event // event.target.value를 구조분해 할당

  };
  return { value, onChange };
};
export default userInput
```

```javascript
import useInput from "./userInput"
export default function App() {
  const name = useInput("Mr.");

  return (
    <div className="App">
      <h1>Hello </h1>
      <input
        type="text"
        placeholder="Name"
        // onChange={name.onChange}
        // value={name.value}
        {...name} 
        //{value, onChange}객체를 ES6의 전개식과 단축 속성명을 통해 unpack 및 input 속성에 바인딩한다.
      />
    </div>
  );
}
```
<hr/>

# ES6 객체 전개 연산 및 단축 속성명을 통한 props전달

```javascript
export default function example () {
  const name = useState
  return
    <input
        type="text"
        placeholder="Name"
        {...name} 
      />
}
```

```javascript
const name = {
    value: 3,
    onChange: (e) => {
      name.value = e.target.value;
    },
  };
```
만약 위와같은 name 객체가 존재한다고 가정했을 때 이를 전개식과, 단축명을 통해 풀어낸것과 같다.

```javascript
const spread = {...name}
console.log(spread)
```

```text/plain
> {value:3, onChange: function(){~~~}}
```
형태이다.

JSX에서의 props는 객체 그 자체로 따졌을 때 단축속성명 문법을 반영할 수 있다.    
예를들어 jsx에서 읽어들이는 props 이름과 일치한다면   
`{value:value}` 와 `{onChange:onChange}`를 `{value}` 혹은 `{onChange}`와 같이 단축시킬 수 있다.   


따라서
```html
<input {name.value} />
<input value = {name.value}/>

<input {name.onChange} />
<input onChange = {name.onChange} />

<input {...name} />
<input value = {name.value} onChange = {name.onChange} />
```
위와같이 적용된다.
<hr/>

## 모듈 관리 및 export
index.js에서 아래와 같이 훅을 구현한 js파일을 다시한번 더 export한다.
```javascript
export { useInput as default } from "./useInput";
```
이는 추후 npm에 publish할 때 npm패키지 모듈을 디렉토리 폴더 단위로 배포하게 되는데,    
해당 패키지를 다운받았을 때 일반적으로 해당 패키지의 기본 (entry)파일로 사용되는 것이 바로 `index.js`파일 이기 때문이다.

useInput의 package.json
```json
{
  "name": "@c-hooks/use-input",
  "version": "1.0.0",
  "description": "React Hook to onchange input data initialize and validate",
  "main": "index.js",
}
```
위와 같이 useInput에 대한 package.json의 "main"필드를 "index.js"로 설정한다면, 

사용자들은 
```textplain
> npm i @c-hooks/use-input
```
위 명령을 실행하여 패키지모듈을 다운받았을 때 자동으로 index.js파일을 참조하게 된다.    
아래와 같이 import하여 사용한다.

```javascript
/* ES6 문법 (빌드 요구사항: babel) */
import useInput from '@c-hooks/use-input'
/* 혹은 commonJS 방식 */
const useInput = require('@c-hooks/use-input')
```
위와같이 package.json에 설정한 패키지 이름을 통해 접근(import)하여 사용할 수 있도록 export 해준것이다.
index.js파일을 기본적으로 참조한 뒤 해당 파일의 export문을 통해 한번 더 useInput.js 모듈을 참조하게 된다.  

 --기본 참조--> `index.js` --참조--> `useInput.js`

 # React DOM요소 접근 - ref & useRef

1) useRef훅을 이용하여 dom요소와 연결할 ref객체를 생성한다.
 ```javascript
 import {useRef} from "react"
const ref = useRef(null)

 ```
2) useRef훅을 이용하여 만든 ref객체를 아래와 같이 ref속성에 주입함으로써 dom요소에 연결한다.    
ref 객체의 .current가 해당 Dom요소를 참조하게 된다.
  ```javascript
   return (
    <input ref={ref}/>
   )
 ```
3) .current를 통해 ref객체를 접근한다.
  ```javascript
 import {useRef} from "react"
 export default App = () => {

   const ref = useRef(null)
  useEffect(()=>{
    console.log(ref)
    console.log(ref.current) //dom객체 접근
    const {current} = ref // 구조분해 할당
    console.log(current) //dom객체 접근
  },[])

   return (
    <input ref={ref}/>
   )
 }
 ```

## Notification

## Axios

## NPM에 PUBLISH

배포하려는 훅이 존재하는 디렉토리에서 node 패키지를 초기화 한다.

```text/plain
> npm init
```

아래와 같은 문구가 뜨면 
```
package name: (usetitle) @c-hooks/use-title
```
예를들어 위와같이 패키지명을 입력해주고 엔터를 누른다.

이어서 description과 git repository를 각각 입력후 엔터   
Keywords: react, react hooks, custom hooks, title 입력 후 엔터
author: 닉네임 혹은 이름 <이메일주소>
license: MIT

```
PS C:\~> npm init

...설명 중략

Press ^C at any time to quit.
package name: (usetitle) @c-hooks/use-title [입력 후 Enter] 
version: (1.0.0) [Enter] 

description: React Hook to change your document's title.
entry point: (indexjs)

test command: [Enter]

git repository: https://github.com/YooHyeok/react-custom-hooks [입력 후 Enter] 
keywords: react, react hooks, react custom hooks, title, hooks [입력 후 Enter] 
author: YooHyeok School <webdevyoo@gmail.com> [입력 후 Enter] 
license: (ISC) MIT [입력 후 Enter] 

About to write to C:\Programming\workspace_vs\nomad\react-custom-hooks\useTitle\package.json:

... 생성된 package.json 내용 생략
```

새로 생성된 package.json에서 script를 제외하고 중복 keywords를 제거한다.

```
npm i react react-dom
```

react 패키지 모듈을 단일로 설치 후 package.json의 dependency속성을 peerDependency로 변경한다.    
이는 요구사항이다.    
따라서 사용자가 설치 되지 않았다면 설치해주고 이미 react가 있다면 중복으로 설치되지 않는다.


@c-hooks의 c-hooks는 npm의 범위(스코프) 이다.

npm 회원가입 후 Organization을 추가한다
https://www.npmjs.com/org/create

name에 c-hooks를 입력하면 https://npmjs.com/org/c-hooks 와 같은 url이 생성된다.   
unlimited public packages free 의 Create버튼을 클릭하여 생성한다.
(초대 창은 skip 한다)

```
npm publish --access public
```
위 명령어를 입력할 경우 npm에 퍼블리시되며
변경내용을 수정하고 다시 위 명령어를 입력할 때는 패키지 version을 변경해야 한다.