import { useState, useCallback } from "react";

export default (initialState = null) => {
  const [state, setState] = useState(initialState);
  const handler = useCallback((e) => {
    setState(e.target.value);
  }, []);
  return [state, handler, setState];
};
//입력과 변환 동시에 해주는 Hooks