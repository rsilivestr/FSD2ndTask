import 'Components/form/--type/booking/booking';
import Header from 'Components/header/Header';

new Header();

const UIwrap = document.querySelector('.room-details__rate-canvas-wrap'),
  UIgraphCanvas = document.querySelector('.room-details__rate-canvas');

if (UIwrap) {
  drawGraph(130, 65, 65, 10);
}

function drawGraph(great = 0, good = 0, avg = 0, poor = 0) {
  if (UIgraphCanvas.getContext) {
    // define canvas rendering context
    const ctx = UIgraphCanvas.getContext('2d');

    const p2 = Math.PI * 2;

    // gap between arcs
    const gap = (p2 / 360) * 2,
      hgap = gap / 2;

    // total votes count
    const total = great + good + avg + poor;

    // start draw from top
    let startAngle = 0 - p2 / 4 - hgap,
      endAngle;

    // great reviews arc
    if (great) {
      // current arc length in radian
      const greatArc = (great / total) * p2;
      endAngle = startAngle - greatArc + gap;

      // get top and bottom points of an arc
      let h1 = gradHeight(startAngle, endAngle).top;
      let h2 = gradHeight(startAngle, endAngle).bot;

      // set gradient, color stops
      const greatColor = ctx.createLinearGradient(0, 0, 0, 120);
      greatColor.addColorStop(h1, '#ffe39c');
      greatColor.addColorStop(h2, '#ffba9c');

      // draw an arc
      drawArc(ctx, startAngle, endAngle, greatColor);
    }

    // good reviews arc
    if (good) {
      const goodArc = (good / total) * p2;
      startAngle = endAngle - gap;
      endAngle = startAngle - goodArc + gap;

      let h1 = gradHeight(startAngle, endAngle).top;
      let h2 = gradHeight(startAngle, endAngle).bot;

      const goodColor = ctx.createLinearGradient(0, 0, 0, 120);
      goodColor.addColorStop(h1, '#6fcf97');
      goodColor.addColorStop(h2, '#66d2ea');

      drawArc(ctx, startAngle, endAngle, goodColor);
    }

    // average reviews arc
    if (avg) {
      const avgArc = (avg / total) * p2;
      startAngle = endAngle - gap;
      endAngle = startAngle - avgArc + gap;

      let h1 = gradHeight(startAngle, endAngle).top;
      let h2 = gradHeight(startAngle, endAngle).bot;

      const avgColor = ctx.createLinearGradient(0, 0, 0, 120);
      avgColor.addColorStop(h1, '#bc9cff');
      avgColor.addColorStop(h2, '#8ba4f9');

      drawArc(ctx, startAngle, endAngle, avgColor);
    }

    // poor reviews arc
    if (poor) {
      const poorArc = (poor / total) * p2;
      startAngle = endAngle - gap;
      endAngle = startAngle - poorArc + gap;

      let h1 = gradHeight(startAngle, endAngle).top;
      let h2 = gradHeight(startAngle, endAngle).bot;

      const poorColor = ctx.createLinearGradient(0, 0, 0, 120);
      poorColor.addColorStop(h1, '#909090');
      poorColor.addColorStop(h2, '#3d4975');

      drawArc(ctx, startAngle, endAngle, poorColor);
    }

    // display total vote counter
    const rateCount = document.createElement('span');
    rateCount.className = 'room-details__rate-counter';
    rateCount.innerText = total;
    UIwrap.appendChild(rateCount);
  }
}

function drawArc(ctx, start, end, color) {
  const strokeWidth = 4,
    radius = 60 - strokeWidth;

  ctx.beginPath();
  ctx.arc(60, 60, radius, start, end, true);
  ctx.lineWidth = strokeWidth;
  ctx.strokeStyle = color;
  ctx.stroke();
}

// get arc top and bottom points to set gradient color stops
function gradHeight(start, end) {
  let startHeight = (Math.sin(start) + 1) / 2,
    endHeight = (Math.sin(end) + 1) / 2,
    topGradient = startHeight > endHeight ? endHeight : startHeight,
    botGradient = startHeight > endHeight ? startHeight : endHeight;

  // check if arc crosses y axis, if it does - set bottomGradient = 1
  let axis = -1.5 * Math.PI;
  if (start > axis && end < axis) {
    botGradient = 1;
  }

  const grad = { top: topGradient, bot: botGradient };
  return grad;
}
