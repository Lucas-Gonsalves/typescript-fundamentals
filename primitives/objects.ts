let user: { name: string, age: number, avatarUrl?: string } = {
  name: 'Lucas',
  age: 20,
}

/*
function signIn(email: string, password: string) {
  // logic to authenticate
} signIn('lucasg@gmail.com', "123456")
*/

function signIn({ email, password }: {email: string, password: string}) {
  // logic to authenticate
}

signIn({ email: 'lucasg@gmail.com', password: "123456"})
