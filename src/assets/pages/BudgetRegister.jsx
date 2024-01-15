import { useEffect, useState } from "react";
import BudgetForm from "../components/budgetForm";


function BudgetRegister(){
    const[BudgetCards,SetBudgetCard]=useState([]);

    useEffect(
        ()=>{
            const BCardData=JSON.parse(localStorage.getItem("budgetCards"))
            if(BCardData){
                SetBudgetCard(BCardData)
            }
        },
        []
    )

    useEffect(
        ()=>{
            localStorage.setItem("budgetCards",JSON.stringify(BudgetCards))
        },
        [BudgetCards]
    )
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        SetBudgetCard([...BudgetCards, formProps])
        e.target.reset()
      }
    
    return(
        <BudgetForm subFunc={handleSubmit}>
            
        </BudgetForm>
    )
}

export default BudgetRegister;

  

