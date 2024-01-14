import { useState } from "react";
function getOption(anyStr){
    return(
        <option value={anyStr}>{anyStr}</option>
    )
}

function SpecSelect()
{
    const expenseCategories = ["Transportation", "Groceries", "Utilities", "Entertainment", "Housing", "Healthcare", "Miscellaneous"];
    const incomeCategories = ["Salary", "Freelance", "Side Hustle", "Gifts", "Investments", "Other"];
    const [selectedType, setSelectedType] = useState("Expense");
    let newSelect=[];
    
    const changeType=(event)=>{
        setSelectedType(event.target.value);
    }

    if(selectedType=="Expense"){
        newSelect= expenseCategories.map((cat)=>{return getOption(cat)})
    }
    if(selectedType=="Income"){
        newSelect= incomeCategories.map((cat)=>{return getOption(cat)})
    }
    
    return(
        <>
            <label>Type:</label>
            <select name="Type" id="typeSel" onChange={changeType} value={selectedType}>
                <option value='Expense'>Expense</option>
                <option value='Income'>Income</option>
            </select>

            <label>Category:</label>
            <select name="categories" id="categSel">
                    {newSelect}
            </select>
        </>
    )

}

export default SpecSelect;
