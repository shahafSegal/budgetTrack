import SpecSelect from "./SpecSelect";

function BudgetForm(){
    return(
     <>
         <SpecSelect></SpecSelect> 
         <label>
             Specified transaction:
             <input type="text" name="title" id="titleInp" />
         </label>
         <label >
             Amount:<input type="number" name="amount" id="amountInp" />
         </label>
         <button >submit</button>
 
     </>
     )
 
 }
 
 export default BudgetForm;