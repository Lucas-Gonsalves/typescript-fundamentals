interface Product {
  id: number
  name: string
}

const productA: Product = { id: 1, name: 'product A' }

const productB: typeof productA = { id: 2, name: 'product B' }