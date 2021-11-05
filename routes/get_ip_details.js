const { lookup } = require('geoip-lite');

const get_ip_details = (req) => {
    try {
        ip = extract_ip(req);
        details = lookup(ip)
        return details
    } catch (error) {
        return null
    }
}

const extract_ip = (req) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    return ip;
}

module.exports.get_ip_details = get_ip_details