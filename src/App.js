// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Counters from './components/counters'
import Navbar from './components/navbar'



class APP extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) =>{
    //   console.log("increment is working", counter);
    const counters=[...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]= {...counter};
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({counters:counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {counter.value= 0 ; return counter;});
    this.setState({ counters: counters });
  };

  handleDelete = (counterId) => {
    // console.log("Event HAndler called" , counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() { 
    return (<React.Fragment>
      <Navbar totalCounter={this.state.counters.filter(c=> c.value>0).length} />
          
          <main className='container'>
            <Counters
            counters = {this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            />
      
          </main>
        </React.Fragment>);
  }
}
 
export default APP;
