import React from "react";
import { Link } from 'react-router-dom';
import moment from "moment";
import numeral from "numeral";
const ExpenseListItem = ({dispatch,description, note, amount,id, createdAt}) =>(
    <div>
      <Link to={"/edit/"+id}><h1>{description}</h1></Link>
      <p> 
          <span>Rs. {numeral(amount).format('0.000')}</span> 
          -
           <span>{moment(createdAt).format('MMMM Do, YYYY')}</span>
      </p>
      {note && <p>note- {note}</p>}
    </div>
);
// no need of mapstatetoprops function coz we just want to access disptach method off the store

export default ExpenseListItem;