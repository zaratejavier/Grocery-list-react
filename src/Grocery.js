import React from 'react'

const Grocery = ({ id, name, complete, itemClick1 }) => (
  <li
    style={ complete ? {...styles.item, ...styles.complete } : styles.item }
    onClick={ () => itemClick1(id) }>
      { name }
    </li>
)

const styles = {
  item: { cursor: 'pointer' },
  complete: { color: 'red', textDecoration: 'line-through'}
}

export default Grocery
