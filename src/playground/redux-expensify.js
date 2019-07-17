import {
    createStore,
    combineReducers
} from 'redux';
import uuid from 'uuid';



//actions we are going to have
//ADD_EXPENSE
const addExpense = ({
    description = "",
    note = "",
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})
//REMOVE_EXPENSE
const removeExpense = ({
    id = ""
} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})
//SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});
//SORTBY_DATE
const sortByDate = (sortByValue) => ({
    type: "SORTBY_DATE",
    sortByValue
});

//SORTBY_AMOUNT
const sortByAmount = (sortByValue) => ({
    type: "SORTBY_AMOUNT",
    sortByValue
});

//SET_START_DATE
const setStartDate = (startDate = 0) => ({
    type: "SET_START_DATE",
    startDate,
});
//SET_END_DATE
const setEndDate = (endDate = 0) => ({
    type: "SET_END_DATE",
    endDate

})
const expenseReducerDefaultstate = [];
const expenseReducer = (state = expenseReducerDefaultstate, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        case "REMOVE_EXPENSE":
            const id = action.id;
            return state.filter((expense) => {
                if (id !== expense.id)
                    return true;
            });
        default:
            return state;
    }
};
const filterReducerDefaultSate = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerDefaultSate, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate,
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            };
        case "SORTBY_DATE":
            return {
                ...state,
                sortBy: "date"
            };
        case "SORTBY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            };
        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, {
    text,
    sortBy,
    startDate,
    endDate
}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text);
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date")
            return a.createdAt < b.createdAt ? 1 : -1;
        else
            return a.amount < b.amount ? 1 : -1;
    });
};

const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
}));
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expOne = store.dispatch(addExpense({
    description: "rent",
    amount: 3800,
    createdAt: -2100
}));
const expTwo = store.dispatch(addExpense({
    description: "coffee",
    amount: 450,
    createdAt: 2000
}));

// store.dispatch(removeExpense({
//     id: expOne.expense.id
// }));
// store.dispatch(editExpense(expTwo.expense.id, {
//     description: "coffee for rupali",
//     note: "Anniversary",
//     amount: 600
// }));
// store.dispatch(setTextFilter("coffee"));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
// store.dispatch(setStartDate(900));
// store.dispatch(setEndDate(2001));
// console.log(expOne);
const demoState = {
    expenses: [{
        id: "dnfjdee",
        description: "january rent",
        note: "last payment for the address",
        amount: 34500,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount", //date or amount
        startDate: undefined,
        endDate: undefined
    }
}