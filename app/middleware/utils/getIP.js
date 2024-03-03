const requestIp = require('request-ip')
const getIP = (req) => requestIp.getClientIp(req)

module.exports = { getIP }
