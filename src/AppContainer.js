import React from 'react'

export default class AppContainer extends React.Component {

  componentDidMount() {
    console.log('props: ', this.props)
    this.props.bookStore.fetchbooks()
  }
 

  render() {
    console.log('bookStore: ', this.props.bookStore)
    const { state : {books} } = this.props.bookStore
   console.log('books: ', books)
    return (
      <ol className="list">
        {
         books.map((book, index) => {
            return (
              <li key={index}>
                <span>{book.title}</span>
              </li>
            )
          })
        }
     
      </ol>
    )
  }
}
