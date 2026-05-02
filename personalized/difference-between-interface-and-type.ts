// Interface x Type

interface IBaseProduct {
  price: number
}

interface IProduct extends IBaseProduct {
  id: number
  name: string
}

interface IProduct {
  quantity: number
}

type TBaseProduct = {
  price: number
}

type TProduct = TBaseProduct & {
  id: number
  name: string
}

let product1: IProduct = { id: 1, name: 'Product a', price: 500 }

let product2: TProduct  = { id: 2, name: 'Product b', price: 1000 }

type TypeString = string
type TypeNumber = number

interface x extends number