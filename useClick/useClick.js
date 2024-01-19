const useClick = (event, handler) => {
  if (typeof handler !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    const current = element.current;
    if (current) current.addEventListener(event, handler);

    return () => {
      if (current) current.removeEventListener(event, handler);
    };
  }, []);
  return element;
};