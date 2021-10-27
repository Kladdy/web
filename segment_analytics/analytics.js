var Analytics = require('analytics-node');
var analytics = new Analytics(process.env.SEGMENTKEY || process.env.SEGMENTKEYDEV);

module.exports.analytics = analytics