export class PaperSvg {
  constructor(el) {
    this.el = el;
    this.path = el.querySelector("path");

    const resizeObserver = new ResizeObserver(this.onResize.bind(this));
    resizeObserver.observe(this.el);
    this.onResize();
  }

  onResize() {
    const w = this.el.clientWidth;
    const h = this.el.clientHeight;
    this.el.setAttribute("viewBox", `0 0 ${w} ${h}`);
    this.el.setAttribute("width", w);
    this.el.setAttribute("height", h);
    this.draw();
  }

  draw() {
    const ark = 13;
    const w = this.el.clientWidth;
    const h = this.el.clientHeight;
    const top = 5;
    const left = 5;
    const path = `M${left + ark} ${top}L${w - left - ark} ${top}L${w - left} ${
      top + ark
    }L${w - left} ${h - top - ark}L${w - left - ark} ${h - top}L${left + ark} ${
      h - top
    }L${left} ${h - top - ark}L${left} ${top + ark}Z`;
    this.path.setAttribute("d", path);
  }
}
