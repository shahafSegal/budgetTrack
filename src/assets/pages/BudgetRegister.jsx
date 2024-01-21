import { useEffect, useState } from "react";
import BudgetForm from "../components/budgetForm";
import BudgetCard from "../components/BudgetCard";
import "../styles/BudgetRegister.css"
import { db } from "../../config/firebaseconfig";
import { addDoc, collection, deleteDoc, doc, getDocs} from "firebase/firestore";

function BudgetRegister(){
    const[BudgetCards,SetBudgetCards]=useState([]);
    const docRef=collection(db,"budgetData")

    useEffect(()=>{
        initialBcards()
        },
        []
    )


    async function initialBcards(){
        const docData=await getDocs(docRef)
        const filteredDoc=docData.docs.map((fDoc)=>{
            return {...fDoc.data(),id:fDoc.id}
        })
        SetBudgetCards(filteredDoc);
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        await addDoc(docRef,formProps);
        e.target.reset()
        initialBcards()
    }

    const deleteBudgetCard=async (bCardId)=>{
        const singleDocRef=doc(db,'budgetData',bCardId)
        await deleteDoc(singleDocRef)
        initialBcards()
    }

    
    
    return(
        <div>
            <BudgetForm subFunc={handleSubmit}></BudgetForm>
            <div className="bCardContainer">
                {BudgetCards.map((budCard)=>(<BudgetCard deletFunc={deleteBudgetCard} bCard={budCard}></BudgetCard>))}
            </div>
           
        </div>
      
    )
}

export default BudgetRegister;

  

