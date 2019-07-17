import moment from 'moment';

const filterReducerDefaultSate = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
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
export default filterReducer;