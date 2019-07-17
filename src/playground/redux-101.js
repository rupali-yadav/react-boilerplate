import {
    createStore
} from 'redux';



const countReducer = ((state = {
count: 0
}, action) => {
switch (action.type) {
    case "INCREMENT":
        const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
        return {
            count: state.count + incrementBy
        };
    case "DECREMENT":
        const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
        return {
            count: state.count - decrementBy
        };
    case "SET":
        const count = typeof action.count === "number" ? action.count : 0;
        return {
            count: count
        };
    case "RESET":
        return {
            count: 0
        };
    default:
        return {
            count: 0
        };
}

});

const store = createStore(countReducer);

const incrementCount = ({
    incrementBy = 1
} = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({
    decrementBy = 1
} = {}) => ({
    type: "DECREMENT",
    decrementBy
});
const setCount = ({
    count = 0
} = {}) => ({
    type: "SET",
    count
});
const resetCount = () => ({
    type: "RESET",
});




const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(incrementCount({
    incrementBy: 5
}));
store.dispatch(decrementCount({
    decrementBy: 2
}));
store.dispatch(setCount());

store.dispatch(resetCount());
// unsubscribe();