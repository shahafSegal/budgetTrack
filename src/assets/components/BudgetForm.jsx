import SpecSelect from "./SpecSelect";

function BudgetForm(props){
    return(
     <form onSubmit={(e)=>props.subFunc(e)}>
         <SpecSelect></SpecSelect> 
         <label>
             Specified transaction:
             <input type="text" name="title" id="titleInp" />
         </label>
         <label >
             Amount:<input type="number" name="amount" id="amountInp" />
         </label>
         <button >submit</button>
 
     </form>
     )
 }
 
 export default BudgetForm;