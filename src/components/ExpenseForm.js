import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
const now = moment();
export default class ExpenseForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            description: props.expense?props.expense.description: '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        };
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>({description}));
    };
    onChangeAmount =(e)=>{
      const amount = e.target.value;
      if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
        this.setState(()=>({amount}))
    };
    onNoteChange=(e)=>{
        const note = e.target.value;
        this.setState(()=>({note}));
    };

    onDateChange =(createdAt)=>{
        if(createdAt)
            this.setState(()=>({ createdAt }));
    };
    onDateFocusChange = ({focused}) => {
        this.setState(() => ({
            calenderFocused:focused
        }));
    };
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.amount || !this.state.description){
            this.setState(() => ({error: "Please provide description and amount"}));
        } else{
            this.setState(()=>({error:''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };
 render(){
    return (
        <div>
            <h1>Expense form</h1>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                 />
                <input 
                    type = "text" 
                    value ={this.state.amount} 
                    onChange={this.onChangeAmount} 
                    placeholder ="amount" />
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused ={this.state.calenderFocused}
                    onFocusChange={this.onDateFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>{return false}}
                />
                    
                <textarea 
                    value ={this.state.note} 
                    placeholder="add note for your expense" 
                    onChange={this.onNoteChange}>
                    note
                </textarea>
                <button>Submit</button>
            </form>           
        </div>
    ) 
 }     
}