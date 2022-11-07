import Tool from "./Tool";

export default class Brush extends Tool {
  constructor(canvas) {
    super(canvas);
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHendler.bind(this);
    this.canvas.onmousedown = this.mouseDownHendler.bind(this);
    this.canvas.onmouseup = this.mouseUpHendler.bind(this);
  }

  mouseUpHendler(e) {
    this.mouseDown = false;
    ///////////////////////////////
  }

  mouseDownHendler(e) {
    this.mouseDown = true;
    this.ctx.beginPath();
    this.ctx.moveTo(
      e.pageX - e.target.offsetLeft,
      e.pageY - e.target.offsetTop
    );
    //////////////
  }
  mouseMoveHendler(e) {
    if (this.mouseDown) {
      this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
    }
  }
  draw(x, y) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    console.log("draw");
  }
}
