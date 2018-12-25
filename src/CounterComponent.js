import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import CounterContainer from './CounterContainer'

class CounterComponent extends Component {

  render() {
    return (
        <Subscribe to={[CounterContainer]}>
          {counterC => (
            <div>
              {
               //    counterC.loadBooks() 
              }
              <h2>{counterC.state.count}</h2>
              <button onClick={() => counterC.loadBooks()}>+</button>
              <hr/>
              <button onClick={() => counterC.addBook({"title":"c1"})}>Add new bppk</button>
              

                {
                  counterC.state.books.map(function(item, index) {
                      return <li key={index}>{item.title}</li> 
                  } 
                  
                  )
                }
            </div>
          )}
        </Subscribe>
    );
  }
}

export default CounterComponent;
