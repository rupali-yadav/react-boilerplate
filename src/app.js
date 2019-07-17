import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from './store/configureStore.js';
import {
    addExpense,
    editExpense,
    removeExpense
} from './actions/expenses.js';
import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate
} from './actions/filters.js';
import expenses from './selectors/expenses.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';

const store = configureStore();

store.dispatch(addExpense({
    description: "gas bill",
    amount: 300,
    createdAt: 7000
}));
store.dispatch(addExpense({
    description: "water bill",
    amount: 400,
    createdAt: 2000
}));
store.dispatch(addExpense({
    description: "Rent",
    amount: 800,
    createdAt: 1000
}));
// store.dispatch(setTextFilter("gas"));

// setTimeout(()=>{
//    store.dispatch(setTextFilter("bill"));
// },5000);

// store.subscribe(() => {
const state = store.getState();
const visibleExpenses = expenses(state.expenses, state.filters);
console.log(visibleExpenses);
// });

const jsx = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
);
ReactDOM.render( jsx , document.getElementById('app'));