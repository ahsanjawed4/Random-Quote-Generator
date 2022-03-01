/*import React, { useState, useReducer, createContext } from "react";
import { reducer } from "./contextReducer";
export const quoteContext = createContext();
export const Provider = ({ children }) => {
  let [fname, setFName] = useState("ahsan");
  let [initilaizing, setInitializing] = useState(0);
  let [lname, setLName] = useState("Jawed");
  const btn = () => {
    setFName("Ashoo");
  };
  const [editing, dispatch] = useReducer(reducer, initilaizing);
  const inc = () => {
    dispatch({ type: "inc" });
  };
  const dec = () => {
    dispatch({ type: "dec" });
  };
  const typing = () => {
    dispatch({ type: "string" });
  };
  let abc = {
    editing,
    inc,
    dec,
    typing,
    lname,
    fname,
    btn,
  };
  return <quoteContext.Provider value={abc}>{children}</quoteContext.Provider>;
};
*/