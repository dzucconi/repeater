import parameters from 'queryparams';
import fps from 'frame-interval';

import randomColor from './lib/random_color';
import times from './lib/times';

window.parameters = parameters;

const DOM = {
  app: document.getElementById('app'),
};

const CONFIG = parameters({
  size: 2,
  gap: 2,
  axes: ['x', 'y'],
});

const init = () => {
  const width = DOM.app.width = window.innerWidth;
  const height = DOM.app.height = window.innerHeight;

  const ctx = DOM.app.getContext('2d');

  const nY = Math.floor(height / (CONFIG.size * CONFIG.gap));
  const nX = Math.floor(width / (CONFIG.size * CONFIG.gap));

  const map = i => CONFIG.size * i * CONFIG.gap;

  const yMapping = times(nY)(map);
  const xMapping = times(nX)(map);

  fps(requestAnimationFrame)(60, (i) => {
    if (CONFIG.axes.includes('y')) {
      const y = yMapping[i % yMapping.length];
      ctx.fillStyle = randomColor();
      ctx.fillRect(0, y, width, CONFIG.size);
    }

    if (CONFIG.axes.includes('x')) {
      const x = xMapping[i % xMapping.length];
      ctx.fillStyle = randomColor();
      ctx.fillRect(x, 0, CONFIG.size, height);
    }
  })();
};

export default init;
