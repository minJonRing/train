import * as React from "react";
import { Box, Button } from "@mui/material";
import { useState, useReducer } from "react";

import createContext from "./context";
const [ContextProvider, useContext] = createContext({
  strict: true,
  name: "input",
});
export const SelectList = ({ children, ...argum }) => {
  const [show, setShow] = useState(false);
  const { value, onChange, onInput, onSelect } = argum;
  return (
    <Box sx={{ p: 1 }}>
      <ContextProvider value={{ show, setShow }}>
        <input
          value={value}
          onInput={(e) => onInput?.(e)}
          onFocus={() => setShow(true)}
        />
        {show ? (
          <div>
            {["鸡蛋仔", "大憨包", "白茶", "蛋糕", "曼丹了"].map((i) => (
              <div
                onClick={(e) => {
                  onSelect(i);
                  setShow(false);
                }}
                key={i}
              >
                {i}
              </div>
            ))}
          </div>
        ) : null}
      </ContextProvider>
    </Box>
  );
};

//
const reducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case "NAME":
      return {
        ...state,
        name: value,
      };
    case "AGE":
      return {
        ...state,
        age: value,
      };
  }
};
export const Users = () => {
  const [state, dispatch] = useReducer(reducer, { name: "123", age: "22" });
  const { name, age } = state;
  const setName = () => {
    dispatch({
      type: "NAME",
      value: [1, 2]
        .map(
          (i) =>
            ["快", "额", "礼", "大", "湖", "另", "惠"][
              Math.floor(Math.random() * 7)
            ]
        )
        .join()
        .replace(/\,/g, ""),
    });
  };

  const setAge = () => {
    dispatch({
      type: "AGE",
      value: Math.floor(Math.random() * 100),
    });
  };

  return (
    <div>
      <Button onClick={setName}>{name}</Button>
      <Button onClick={setAge}>{age}</Button>
    </div>
  );
};
