type Product = {
  id: number,
  name: string,
}

function newProduct(product: Product) {
} newProduct({ id: 1, name: 'Product x' })

type SelectResponse = Product[] | null
function selectProducts(): SelectResponse {
  return null
}