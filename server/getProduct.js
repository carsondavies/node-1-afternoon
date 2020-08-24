const products = require('../products.json')

const getProduct = (req, res) => {
  const product = products.find(element => element.id === parseInt(req.params.id))
  if (!product) {
    return res.status(500).send('Item not on list')
  }
  res.status(200).send(product)
}

module.exports = getProduct