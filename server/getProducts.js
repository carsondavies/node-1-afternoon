const products = require('../products.json')
// const { get } = require('http')

const getProducts = (req, res) => {
  const { price } = req.query
  if (price) {
    const items = products.filter(e => e.price >= parseInt(price))
    return res.status(200).send(items)
  }
  // const filteredProducts = products.filter(element => {
  //   return element.price.includes(price)
  // })


  res.status(200).send(products)
}

module.exports = getProducts

// module.exports = {
//   getProducts: (req, res) => {
//     const getProducts = app.get('/api/products', (req, res) => {
//       res.status(200).send(products)
//     })
//   }
// }