import { DEFAULT_VOTES } from './defaults';

class Diagram {
  constructor(canvas = null, votes = DEFAULT_VOTES) {
    this.canvas = canvas || document.createElement('canvas');
    this.votes = votes;

    this._init();
  }

  _getGradientHeights(startAngle, endAngle) {
    const startHeight = (Math.sin(startAngle) + 1) / 2;
    const endHeight = (Math.sin(endAngle) + 1) / 2;

    let top = startHeight > endHeight ? endHeight : startHeight;
    const topAxis = -0.5 * Math.PI;
    if (startAngle > topAxis && endAngle < topAxis) top = -1;

    let bot = startHeight > endHeight ? startHeight : endHeight;
    const botAxis = -1.5 * Math.PI;
    if (startAngle > botAxis && endAngle < botAxis) bot = 1;

    return [top, bot];
  }

  _getAngles(count) {
    const arkLength = (count / this.votesTotal) * (Math.PI * 2);
    const endAngle = this.currentStartAngle - arkLength + this.sizes.gap;

    return [this.currentStartAngle, endAngle];
  }

  _drawArc(startAngle, endAngle, gradient) {
    const { innerRadius, outerRadius, strokeWidth } = this.sizes;
    this.context.beginPath();
    this.context.arc(
      outerRadius,
      outerRadius,
      innerRadius,
      startAngle,
      endAngle,
      true
    );
    this.context.lineWidth = strokeWidth;
    this.context.strokeStyle = gradient;
    this.context.stroke();
  }

  _makeGradient(startAngle, endAngle, colors) {
    const [gradientTop, gradientBot] = this._getGradientHeights(
      startAngle,
      endAngle
    );
    const [topColor, botColor] = colors;
    const gradient = this.context.createLinearGradient(
      0,
      0,
      0,
      this.sizes.diameter
    );
    gradient.addColorStop(gradientTop, topColor);
    gradient.addColorStop(gradientBot, botColor);

    return gradient;
  }

  _appendCaption() {
    const caption = document.createElement('caption');
    caption.className = 'room-details__rate-counter';
    caption.innerText = this.votesTotal;
    this.canvas.parentElement.append(caption);
  }

  _init() {
    this.context = this.canvas.getContext('2d');

    this.voteCounts = this.votes.map(({ count }) => count);
    this.votesTotal = this.voteCounts.reduce((a, b) => a + b);

    this.sizes = {
      outerRadius: 60,
      strokeWidth: 4,

      gap: Math.PI / 60,
    };

    this.sizes.innerRadius = this.sizes.outerRadius - this.sizes.strokeWidth;
    this.sizes.diameter = this.sizes.outerRadius * 2;

    this.initialAngle = 0 - Math.PI / 2 - this.sizes.gap;
    this.currentStartAngle = this.initialAngle;

    this.votes.forEach(({ count, colors }) => {
      const [startAngle, endAngle] = this._getAngles(count);

      const gradient = this._makeGradient(startAngle, endAngle, colors);

      this._drawArc(startAngle, endAngle, gradient);

      this.currentStartAngle = endAngle - this.sizes.gap;
    });

    this._appendCaption();
  }
}

export default Diagram;
