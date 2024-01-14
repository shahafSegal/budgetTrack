import SpecSelect from "../components/SpecSelect";




function BudgetForm(){
   return(
    <div>
        <SpecSelect></SpecSelect> 
        <label htmlFor="title">Specified transaction:</label>
        <input type="text" name="title" id="titleInp" />
        <label htmlFor="title">Amount:</label>
        <input type="number" name="amount" id="amountInp" />
        <button>submit</button>

    </div>
    )

}

export default BudgetForm;