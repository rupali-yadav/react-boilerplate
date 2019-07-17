import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
const expenses = [{
        id: 1,
        description: 'gum',
        note: '',
        amount: 195,
        createdAt: 0
    },
    {
        id: 2,
        description: 'rent',
        note: '',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: 3,
        description: 'creditCard',
        note: '',
        amount: 4500,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
]
//startdate
test("should filter by startdate", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[2],
        expenses[0]
    ]);
});
//enddate
// test("should filter by end date", () => {
//     const filters = {
//         text: '',
//         sortBy: 'date',
//         startDate: undefined,
//         endDate: moment(0).add(2,'days').valueOf()
//     };
//     const result = selectExpenses(expenses, filters);
//     expect(result).toEqual([
//         expenses[0],
//         expenses[1]
//     ]);
// });

//text
test("should flter by text value", () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[2],
        expenses[1]
    ]);
});