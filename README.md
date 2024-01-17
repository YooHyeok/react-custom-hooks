# react-custom-hooks
##  react custom hooks 구현 및 NPM publish 

# `리액트 훅이란?`
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

