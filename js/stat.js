'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var FONT_GAP = 15;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var LEFT_GAP = 50;
var TOP_GAP = 25;
var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var FONT_COLOR = '#000';
var MAIN_USER_COLOR = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderHeading = function (ctx) {
  ctx.fillStyle = FONT_COLOR;
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Ура вы победили!', CLOUD_X + LEFT_GAP, CLOUD_Y + TOP_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + LEFT_GAP, CLOUD_Y + TOP_GAP + FONT_GAP);
};

var renderBarChart = function (ctx, names, times) {
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'hsl(240,' + Math.random() * 100 + '%, 50%)';

    if (names[i] === 'Вы') {
      ctx.fillStyle = MAIN_USER_COLOR;
    }

    var barHeight = MAX_BAR_HEIGHT * times[i] / maxTime;
    var barX = CLOUD_X + LEFT_GAP + i * (BAR_WIDTH + BAR_GAP);
    var barY = CLOUD_HEIGHT - 30 - barHeight;

    ctx.fillRect(barX, barY, BAR_WIDTH, barHeight);
    ctx.fillStyle = FONT_COLOR;
    ctx.fillText(names[i], barX, CLOUD_HEIGHT - 10);
    ctx.fillText(Math.round(times[i]).toString(), barX, barY - 10);
  }
};

var getMaxElement = function (array) {
  if (!array.length) {
    return 0;
  }

  var maxElement = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  renderHeading(ctx);
  renderBarChart(ctx, names, times);
};
