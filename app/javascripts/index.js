import parameters from 'queryparams';
import fps from 'frame-interval';

import randomColor from './lib/random_color';

window.parameters = parameters;

const DOM = {
  app: document.getElementById('app'),
};

const CONFIG = parameters({
  size: 2,
  gap: 2,
});

const init = () => {
  const width = DOM.app.width = window.innerWidth;
  const height = DOM.app.height = window.innerHeight;

  const ctx = DOM.app.getContext('2d');

  const nY = Math.floor(height / (CONFIG.size * CONFIG.gap));
  const nX = Math.floor(width / (CONFIG.size * CONFIG.gap));

  const yMapping = Array(nY).fill(undefined).map((_, i) => CONFIG.size * i * CONFIG.gap);
  const xMapping = Array(nX).fill(undefined).map((_, i) => CONFIG.size * i * CONFIG.gap);

  fps(requestAnimationFrame)(60, (i) => {
    const y = yMapping[i % yMapping.length];

    ctx.fillStyle = randomColor();
    ctx.fillRect(0, y, width, CONFIG.size);

    const x = xMapping[i % xMapping.length];

    ctx.fillStyle = randomColor();
    ctx.fillRect(x, 0, CONFIG.size, height);
  })();
};

export default () => {
  init();
};
