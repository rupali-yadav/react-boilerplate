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
const jsx = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
);
ReactDOM.render( jsx , document.getElementById('app'));