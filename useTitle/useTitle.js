import {useEffect, useState} from "react"
const useTitle = (initialTitle) => {

  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    console.log(htmlTitle);
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);
  
  return setTitle;
};