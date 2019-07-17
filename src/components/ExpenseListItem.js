import React from "react";
import { Link } from 'react-router-dom';

const ExpenseListItem = ({dispatch,description, note, amount,id, createdAt}) =>(
    <div>
      <Link to={"/edit/"+id}><h1>{description}</h1></Link>
      <p>{amount}</p>
      <span>{createdAt}</span>
      <p>{note}</p>
    </div>
);
// no need of mapstatetoprops function coz we just want to acess disptach method off the store

export default ExpenseListItem;