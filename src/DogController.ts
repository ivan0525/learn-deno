interface Dog {
  name: string
  age: number
}

const dogs: Array<Dog> = [
  {
    name: 'Jack',
    age: 2
  },
  {
    name: 'Cindy',
    age: 1
  }
]

export const getDogs = ({response}:{response: any}) => {
  response.body = dogs
}