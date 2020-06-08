import React from 'react'

class GroceryForm extends React.Component {
  state = { itemName: "" }
  
  handleChange = (e) => {
    this.setState({ itemName: e.target.value })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.addItem(this.state.itemName)
    this.setState({ itemName: "" })
  }

  render() {
    const { itemName } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={itemName}
          name = "itemName"
          onChange={this.handleChange}
          required 
          placeholder="Add An Item" 
          />
          <button type="submit">Add</button>
      </form>
    )
  }
} 

export default GroceryForm;
