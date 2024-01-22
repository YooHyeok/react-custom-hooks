import {useState} from "react"
/**
 * useTabs의 useState 에 의해 값이 변경되면 useTabs훅을 직접적으로 사용하는 컴포넌트가 rerender된다.    
 * 이는, useTabs라는 커스텀 훅이 단순히 App컴포넌트 소속의 참조형 모듈로서의 훅으로 사용되기 때문이다.
 */
export const useTabs = (initialTab, allTabs) => {

  if (!allTabs || !Array.isArray(allTabs)) return; //2번째 arg가 undefined이거나 배열이 아닌경우 종료

  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentItem: allTabs[currentIndex], //현재 index에 대한 tab
    changeItem: setCurrentIndex, //index state를 변경할 set함수
  };
};