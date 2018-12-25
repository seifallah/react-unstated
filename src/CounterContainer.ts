import {Container} from 'unstated';

type CounterState = {
    count: number,
    books:any,
};

export default class CounterContainer extends Container<CounterState> {

    state = {
        count:2,
        books: [
            {"title": "t1"},
            {"title": "t2"},
            {"title": "t3"}
        ]
    };
    
    increment() {
        this.setState({count: this.state.count+3})
    }
    addBook = (book:string) => {
        const books = [... this.state.books, book];
        this.setState({books});
    }


    fetch = async (url:string) => {
        try {
          const books = await fetch(url).then(r => r.json());
          await this.setState({ books});
        } catch(error) {
            console.log('error');
        }
      }

    loadBooks () {
        //const result = getLocalServer(12);
       fetch('https://jsonplaceholder.typicode.com/todos/')
       .then(function(response) {
        return response.json();
      })
      .then((myJson)=>{
        console.log('result0', myJson);
        this.setState({books:myJson})
      })

      return null;
    }


}

