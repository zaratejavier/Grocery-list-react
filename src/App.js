import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import List from './List';
import GroceryForm from './GroceryForm';

class App extends Component {
  state = {
    groceries: [
      {id: 1, name: "Milk", complete: false },
      {id: 2, name: "Bread", complete: true },
      {id: 3, name: "Butter", complete: false },
    ]
  }

  addItem = (itemName) => {
    const newItem = { id: `${Math.random()}`,name: itemName, complete: false }
    const newItems = [newItem, ...this.state.groceries]
    this.setState({
      groceries: newItems,
    })
  }

  renderGroceries = () => {
    const {groceries} = this.state
    return groceries.map(item =>
        <li key={item.id}>{item.name}</li>
      )
  }
  
  handleClick = (id) => {
    console.log("click")
    console.log(id)
    const { groceries } = this.state
    const newItems = groceries.map((item) => {
      if(item.id !== id) return item
      return { ...item, complete: !item.complete}
    }) 
    this.setState({
      groceries: newItems,
    })
  }
  //   const { groceries } = this.state
  //   this.setState({
  //     groceries: groceries.map( item => {
  //       if (item.id === id ) {
  //         return {
  //           ...item,
  //           complete: !item.complete
  //         }
  //       }
  //       return item
  //     })
  //   })
  // }


  render(){
  const {groceries} = this.state
  
  return (
    <div>
      <h1>Grocery List</h1>
      <GroceryForm addItem={this.addItem} />
        <List
        itemClick={this.handleClick}
        items={groceries} />
    </div>
  );
}

}

export default App;
