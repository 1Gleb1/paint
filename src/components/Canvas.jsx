import React, { useEffect, useRef } from "react";
import "../styles/canvas.scss";
import { observer } from "mobx-react-lite";
import Brush from "../tools/Brush";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";

const Canvas = observer(() => {
  const canvasRef = useRef();

  const mouseDownHendler = () => {
    canvasState.pushToUndo(canvasRef.current.toDataURL());
  };

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  return (
    <div className="canvas">
      <canvas
        onMouseDown={() => {
          mouseDownHendler();
        }}
        ref={canvasRef}
        width={600}
        height={400}
      />
    </div>
  );
});

export default Canvas;
