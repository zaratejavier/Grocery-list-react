import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import List from './List';

class App extends Component {
  state = {
    groceries: [
      {id: 1, name: "Milk", complete: false },
      {id: 2, name: "Bread", complete: true },
      {id: 3, name: "Butter", complete: false },
    ]
  }

  renderGroceries = () => {
    const {groceries} = this.state
    return groceries.map(item =>
        <li key={item.id}>{item.name}</li>
      )
  }
  

  render(){
  const {groceries} = this.state
  
  return (
    <div>
      <ul>
        <List name="Grocery List" items={groceries}/>
      </ul>
    </div>
  );
}

}

export default App;
