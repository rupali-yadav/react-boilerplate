import React from 'react';
import { connect } from "react-redux";
import selectExpenses from './../selectors/expenses'
import selectedExpenseTotal from "./../selectors/expenses-total";
import numeral from 'numeral';

const ExpensesSummary=({expensesCount, expensesTotal}) => {
    
 const formattedExpenseTotal = numeral(expensesTotal).format('0.000');
    
    return(
            <div>
                <p>No. of expenses selected- {expensesCount}</p>
                <p>The total expenditure is Rs. {formattedExpenseTotal}</p>
            </div>
    );
}
   

const mapStateToComponentProps = (state)=>{   
 return {
     expensesCount: selectExpenses(state.expenses, state.filters).length,
     expensesTotal: selectedExpenseTotal(state.expenses)
    
 }
};
export default connect(mapStateToComponentProps)(ExpensesSummary);