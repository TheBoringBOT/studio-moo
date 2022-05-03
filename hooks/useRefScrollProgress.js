import { useState, useRef, useEffect } from "react";

//? Hook from https://cole.codes/posts/framer-motion-useviewportscroll-element-scroll

export default function useRefScrollProgress(inputRef) {
  const ref = inputRef || useRef();
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop;
    setStart(offsetTop / document.body.clientHeight);
    setEnd((offsetTop + rect.height) / document.body.clientHeight);
  });
  return { ref, start, end };
}
