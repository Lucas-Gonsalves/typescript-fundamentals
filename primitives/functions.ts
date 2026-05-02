function sum(x: number, y: number): number {
  const result = x + y
  console.log(result)

  return result
}

const test = sum(1, 2)

const showMessage = (name: string): string => {
  console.log(name)
  return `Hello ${name}!`
}
