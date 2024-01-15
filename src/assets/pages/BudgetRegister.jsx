import { useState } from "react";
import BudgetForm from "../components/budgetForm";


function BudgetRegister(){
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps)
        e.target.reset()
      }
    
    return(
        <form onSubmit={(e)=>handleSubmit(e)}>
            <BudgetForm></BudgetForm>
        </form>
    )
}

export default BudgetRegister;

  

