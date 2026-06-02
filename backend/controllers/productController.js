import Product from "../models/Product.js"

export const getProducts = async (req, res) => {
  try {

    const search = req.query.search || ""
    const category = req.query.category || ""

    let query = {}

    if (search) {
      query.name = {
        $regex: search,
        $options: "i"
      }
    }

    if (category && category !== "All") {
      query.category = category
    }

    const products = await Product.find(query)

    res.json(products)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
}

export const createProduct = async (req, res) => {
  try {

    const product = await Product.create(req.body)

    res.status(201).json(product)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
}

export const deleteProduct = async (req, res) => {
  try {

    await Product.findByIdAndDelete(req.params.id)

    res.json({
      message: "Product deleted successfully"
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })
  }
}