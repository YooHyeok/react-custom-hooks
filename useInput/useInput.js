export const useInput = (initialValue, validator) => {

  const [value, setValue] = useState(initialValue);
  
  const onChange = (event) => {
    const {
      target: { value },
    } = event; // event.target.value를 구조분해 할당

    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) setValue(value);
  };
  return { value, onChange };
};