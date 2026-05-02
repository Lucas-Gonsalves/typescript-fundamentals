interface Product {
  id: number
  name: string
}

function newProduct(product: Product) {
  console.log(product.id)
}

newProduct({ id: 1, name: 'Lucas' })