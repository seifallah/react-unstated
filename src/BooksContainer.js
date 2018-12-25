import {Container} from 'unstated'

class BooksContainer extends Container {
  state = {
    books: [],
    isFetching: false
  }
  async fetchbooks() {
    this.setState({
      isFetching: true
    })
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
      console.log('data container:', data);
      const json = await data.json()
      console.log('json container:', json);
      this.setState({
        books: json,
        isFetching: false
      })

    } catch (err) {
      console.log('error: ', err)
    }
  }
}


export {
  BooksContainer
}