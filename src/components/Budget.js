import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
//import Currency from './Currency';

const Budget = () => {
    const { budget,expenses, Currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpense = expenses.reduce((total,item) =>{
        return (total += item.cost);
    },0);
    const handleBudgetChange = (event) => {
        if(event.target.value >= totalExpense){
            setNewBudget(event.target.value);
        }else{
            alert("You Cannot reduce the budget value lower than spending");
        }
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {Currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
