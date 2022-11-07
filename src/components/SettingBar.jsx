import React from "react";
import toolState from "../store/toolState";
import "../styles/toolbar.scss";

const SettingBar = () => {
  return (
    <div className="setting-bar">
      <label htmlFor="line-width">Толщина</label>
      <input
        style={{ margin: "0 10px" }}
        id="line-width"
        type="number"
        defaultValue={1}
        min={1}
        max={50}
        onChange={(e) => toolState.setLineWidth(e.target.value)}
      />
      <label htmlFor="strokeColor">Цвет обводки</label>
      <input
        style={{ margin: "0 10px" }}
        id="strokeColor"
        type="color"
        onChange={(e) => toolState.setStrokeColor(e.target.value)}
      />
    </div>
  );
};

export default SettingBar;
