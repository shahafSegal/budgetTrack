import { useEffect, useState } from "react";
import BudgetForm from "../components/budgetForm";
import BudgetCard from "../components/BudgetCard";


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

    const deleteBudgetCard=(bCard)=>{
        console.log(bCard)
        const newBudgetCard= BudgetCards.filter((el)=>{return !(el===bCard) });
        console.log(newBudgetCard)
        SetBudgetCard(newBudgetCard)
    }

    
    
    return(
        <div>
            <BudgetForm subFunc={handleSubmit}></BudgetForm>
            {BudgetCards.map((budCard)=>(<BudgetCard deletFunc={deleteBudgetCard} bCard={budCard}></BudgetCard>))}
        </div>
      
    )
}

export default BudgetRegister;

  

