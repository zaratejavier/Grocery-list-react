import React from 'react'

const Item = ({ id, name, complete, itemClick1 }) => (
  <li
  style ={ complete ? {...styles.item, ...styles.complete } : styles.item }
  onClick={ () => itemClick1(id) }
  />
)

export default Item
