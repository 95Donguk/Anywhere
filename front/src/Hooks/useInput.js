import { useState, useCallback } from "react";

export default (initialState = null) => {
  const [state, setState] = useState(initialState);
  const handler = useCallback((e) => {
    setState(e.target.value);
  }, []);
  return [state, handler, setState];
};