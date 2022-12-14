import React from "react";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import "../styles/toolbar.scss";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Line from "../tools/Line";
import Eraser from "../tools/Eraser";

const Toolbar = () => {
  const changeColor = (value) => {
    toolState.setFillColor(value);
    toolState.setStrokeColor(value);
  };
  return (
    <div className="toolbar">
      <button
        className="toolbar__btn brush"
        onClick={() => {
          toolState.setTool(new Brush(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn rect"
        onClick={() => {
          toolState.setTool(new Rect(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn circle"
        onClick={() => {
          toolState.setTool(new Circle(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn line"
        onClick={() => {
          toolState.setTool(new Line(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn eraser"
        onClick={() => {
          toolState.setTool(new Eraser(canvasState.canvas));
        }}
      ></button>
      <input type="color" onChange={(e) => changeColor(e.target.value)} />
      <button
        className="toolbar__btn undo"
        onClick={() => {
          canvasState.undo();
        }}
      ></button>
      <button
        className="toolbar__btn redo"
        onClick={() => {
          canvasState.redo();
        }}
      ></button>
    </div>
  );
};

export default Toolbar;
