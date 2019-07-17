import moment from 'moment';
import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate
} from "../../actions/filters";



test('set sortbyDate action obj', () => {
    const action = setTextFilter("rent");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text:"rent"
    });
});
test('set sortbyDate action obj', () => {
    const action = setTextFilter("");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});
test('set sortbyDate action obj', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORTBY_DATE",
    });
});
test('set sortbyamt action obj', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORTBY_AMOUNT",
    });
});
test('set startdate action obj', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0),
    });
});
test('set endDate action obj', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0),
    });
});