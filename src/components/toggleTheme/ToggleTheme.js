import React, { useState, useContext } from "react";
import StyleContext from "./../../context/style/StyleContext";

export default function ToggleTheme() {
  const styleContext = useContext(StyleContext);
  const { toggle, isLight, light, dark } = styleContext;
  const theme = isLight ? light : dark;
  return (
    <div>
      <button
        type="button"
        className={`btn btn-sm btn-${theme.btnBg}`}
        onClick={toggle}
      >
        {theme.name}
      </button>
    </div>
  );
}
