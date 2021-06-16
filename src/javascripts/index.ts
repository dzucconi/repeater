import { configure } from "queryparams";
import { FrameInterval } from "frame-interval";

const randomColor = () =>
  "#" + ("000000" + ((Math.random() * 0xffffff) << 0).toString(16)).slice(-6);

const times = (n: number) => (fn: (i: number) => number) =>
  Array(n)
    .fill(undefined)
    .map((_, i) => fn(i));

const map = (i: number) => params.size * i * params.gap;

const ROOT = document.getElementById("root") as HTMLCanvasElement;

const { params } = configure({
  size: 2,
  gap: 2,
  axes: ["x", "y"],
});

const width = (ROOT.width = window.innerWidth);
const height = (ROOT.height = window.innerHeight);

const ctx = ROOT.getContext("2d");

const nY = Math.floor(height / (params.size * params.gap));
const nX = Math.floor(width / (params.size * params.gap));

const yMapping = times(nY)(map);
const xMapping = times(nX)(map);

const fi = new FrameInterval(60, ({ frame }) => {
  if (params.axes.includes("y")) {
    const y = yMapping[frame % yMapping.length];
    ctx.fillStyle = randomColor();
    ctx.fillRect(0, y, width, params.size);
  }

  if (params.axes.includes("x")) {
    const x = xMapping[frame % xMapping.length];
    ctx.fillStyle = randomColor();
    ctx.fillRect(x, 0, params.size, height);
  }
});

fi.start();
