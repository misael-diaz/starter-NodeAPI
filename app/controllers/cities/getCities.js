const City = require('../../models/city')
const { checkQueryString, getItems } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')

const getCities = async (req, res) => {
  try {
    const query = await checkQueryString(req.query)
    res.status(200).json(await getItems(req, City, query))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getCities }
