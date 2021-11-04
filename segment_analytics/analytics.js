const { get_ip_details } = require('../routes/get_ip_details')
var useragent = require('useragent');
// useragent(true); // Always keep the RegExp library up to date
var Analytics = require('analytics-node');

var analytics = new Analytics(process.env.SEGMENTKEY || process.env.SEGMENTKEYDEV);

const track = (req, event, url) => {
    var agent = useragent.parse(req.headers['user-agent']);

    analytics.track({
        anonymousId: req.sessionID,
        event: event,
        properties: {
            url: url,
            env: process.env.WEBENV,
            os: agent?.toAgent(),
            // browser: agent?.os.toString(),
            // device: agent?.device.toString(),
            ...get_ip_details(req)
        },
    })
}

module.exports.analytics = analytics
module.exports.track = track