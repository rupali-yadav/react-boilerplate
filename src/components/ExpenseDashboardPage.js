import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ConnectedExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        hi this is the dashboard page
        <ConnectedExpenseListFilters/>
        <ConnectedExpenseList/>
    </div>
);
export default ExpenseDashboardPage;