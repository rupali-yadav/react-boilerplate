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
export default expenseReducer; 