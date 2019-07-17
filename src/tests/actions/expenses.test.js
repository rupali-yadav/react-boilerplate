import {
    addExpense,
    editExpense,
    removeExpense
} from '../../actions/expenses';

//addexpense
test('should create addExpense action object', () => {
    const action = addExpense({
        description: "rent",
        note: "note",
        amount: 1000,
        createdAt: 88990
    });
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id:expect.any(String),
            description: "rent", 
            note: "note",
            amount: 1000,
            createdAt: 88990
        }
    });
});
test('should create addExpense action object', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        }
    });
});

//editExpense
test('should create remove action object', () => {
    const action = editExpense("123abc", {
        note: "new note value"
    });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {
            note: "new note value"
        }
    });
});
removeExpense
test('should create remove action object', () => {
    const action = removeExpense({
        id: "123abc"
    });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

