import React from "react";
import Grocery from './Grocery'

const List = (props) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      {props.items.map( (i) => (
         <Grocery key={i.id} name={i.name} id={i.id} complete={i.complete}
         itemClick1={props.itemClick}
         />
      ))}
    </ul>
  </div>
)



export default List;
