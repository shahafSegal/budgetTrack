

function BudgetCard(props){
    const BCard=props.bCard;
    const isExpense=BCard.type=="Expense"
    return(
        <div className={isExpense?"budgetCard expense":"budgetCard income"}> 
            <h2>title: {BCard.title} </h2>
            <h3>{BCard.type}: {BCard.categories}</h3>
            <h3>Amount:{isExpense?"-":''}{BCard.amount}</h3>
            <button onClick={()=>props.deletFunc(BCard.id)}>Delete</button>
        </div>
       
    )
}

export default BudgetCard;