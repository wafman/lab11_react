import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Counter - React</h1>
    </header>
  )
}

class Counter extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleCounter = e => {
    let count = e.target.value;
    this.setState({count});
    console.log(this.state);
  }
  
  handlePositiveClick = e => {
    e.preventDefault();
    let count = this.state.count;
    count += 1;
    this.setState({count}); 
  }
  
  handleNegativeClick = e => {
    e.preventDefault();
    let count = this.state.count;
    count -= 1;
    this.setState({count});
  }

  render(){
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handlePositiveClick}>+ADD+</button>
        <button onClick={this.handleNegativeClick}>-SUBTRACT-</button>
      </div>
    );
  }

}

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;
