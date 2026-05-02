interface Book {
  title: string
  pages: number
  author: string
  description: string
}

interface BookPreview {
  title: string
}

const book1: Book = { title: 'JavaScript', author: 'Lucas', pages: 275, description: '...' }
const book2: BookPreview = { title: 'TypeScript' }
const book3: Pick<Book, 'title' | 'author'> = { title: 'TypeScript', author: 'Jhon Doe'} // choose a property to pick and do whatever