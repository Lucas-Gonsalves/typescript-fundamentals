interface User {
  id: number
  name: string
  email: string
}

const newUser: User = { id: 1, name: 'Lucas', email: 'lucas@gmail.com' }

const updatedUser: Partial<User> = { name: 'John Doe' }  // Enable to turn optional all properties