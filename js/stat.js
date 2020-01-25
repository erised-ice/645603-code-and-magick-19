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
var LEFT_GAP = 20;
var TOP_GAP = 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  if (!arr.length) {
    return 0;
  }

  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  ctx.fillText('Ура вы победили!', CLOUD_X + LEFT_GAP, CLOUD_Y + TOP_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + LEFT_GAP, CLOUD_Y + TOP_GAP + FONT_GAP);
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
  }
  ctx.fillStyle = 'pink';

  for (i = 0; i < 4; i++) {
    ctx.fillStyle = 'hsl(240,' + Math.random() * 100 + '%, 50%)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(CLOUD_X + LEFT_GAP + i * (BAR_WIDTH + BAR_GAP), CLOUD_Y + 50 + MAX_BAR_HEIGHT - (MAX_BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, MAX_BAR_HEIGHT * times[i] / maxTime);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + LEFT_GAP + i * (BAR_WIDTH + BAR_GAP), CLOUD_Y + 50 + MAX_BAR_HEIGHT + 20);
    ctx.fillText(Math.round(times[i]), CLOUD_X + LEFT_GAP + i * (BAR_WIDTH + BAR_GAP), CLOUD_Y + 50 + MAX_BAR_HEIGHT - (MAX_BAR_HEIGHT * times[i] / maxTime) - 20);
  }
};
