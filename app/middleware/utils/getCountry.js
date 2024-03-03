const getCountry = ({ headers }) =>
  headers['cf-ipcountry'] ? headers['cf-ipcountry'] : 'XX'

module.exports = { getCountry }
