const scores: Record<string, number> = {
  'Lucas': 10,
  'mayk': 15,
  'anna': 12,
}

const scoresNumberExemple: Record<number, string> = {
  10: 'Lucas',
  15: 'mayk',
  12: 'anna',
}

// restrict values
type Profile = 'admin' | 'user' | 'guest'

const user: Record<Profile, number> = {
  admin: 1,
  guest: 2,
  user: 3,
}

// personalized objects
interface User {
  name: string
  email: string
}

const users: Record<number, User> = {
  1: { name: 'Lucas', email: 'lucas@email.com' },
  2: { name: 'Test', email: 'tes@email.com' }
}