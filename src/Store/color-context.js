import React, { useState } from "react";

const ColorContext = React.createContext({
  isNight: false,
  onToggle: () => {},
});

export const ColorContextProvider = (props) => {
  const [isNight, setIsNight] = useState(false);

  const ToggleHandler = () => {
    setIsNight(!isNight);
  };

  return (
    <ColorContext.Provider
      value={{
        isNight: isNight,
        onToggle: ToggleHandler,
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
