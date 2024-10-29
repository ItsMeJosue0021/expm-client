import React, { useEffect } from "react";
import { useState } from "react";
import FormInput from "../components/FormInput";
import FormWrapper from "../components/FormWrapper";
import FormButton from "../components/FormButton";

const ExpenseForm = ({ onExpenseAdded }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
    const [expenseCategoryId, setExpenseCategoryId] = useState('');
    
    const [expenseCategories, setExpenseCategories] = useState([]);
    // const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpenseCategories();
        // fetchExpenses();
    }, []);

    const fetchExpenseCategories = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/categories');
            const data = await response.json();
            setExpenseCategories(data);
        } catch (err) {
            console.log(err)
        }
    }

    // const fetchExpenses = async () => {
    //     try {
    //         const response = await fetch('http://localhost:8080/api/expenses');
    //         const data = await response.json();
    //         setExpenses(data);
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    const addExpense = async () => {
        const expenseData = {
            description,
            amount,
            date,
            expenseCategoryId: Number(expenseCategoryId)
        };

        try {
            const response = await fetch('http://localhost:8080/api/expenses', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(expenseData),
            });
            // const data = await response.json();
            // setExpenses((prev) => [...prev, data]);
            onExpenseAdded();
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <FormWrapper>
            {/* <FormInput label="Amount" type="number" placeholder="00.00" onChange={(e) => setAmount(e.target.value)} /> */}
            <div className="flex flex-col items-start space-y-1">
                <span className="text-sm">Amount</span>
                <input onChange={(e) => setAmount(e.target.value)} type="number" placeholder="00.00" className="w-full text-sm border border-gray-200 rounded-md px-4 py-2"/>
            </div>
            <div className="flex flex-col items-start space-y-1">
                <span className="text-sm">Description</span>
                <textarea onChange={(e) => setDescription(e.target.value)} id="description" placeholder="Description.." className="w-full h-20 text-sm border border-gray-200 rounded-md px-4 py-2">
                </textarea>
            </div>
            {/* <FormInput label="Date" type="date" placeholder="YYYY/MM/DD"  onChange={(e) => setDate(e.target.value)} /> */}
            <div className="flex flex-col items-start space-y-1">
                <span className="text-sm">Amount</span>
                <input onChange={(e) => setDate(e.target.value)} type="date" placeholder="YYYY/MM/DD" className="w-full text-sm border border-gray-200 rounded-md px-4 py-2"/>
            </div>
            <div className="flex flex-col items-start space-y-1">
                <span>Expense Category</span>
                <select value={expenseCategoryId} onChange={(e) => setExpenseCategoryId(e.target.value)} id="expenseCategory" className="w-full text-sm border border-gray-200 rounded-md px-4 py-2">
                    <option value="">Select a category</option>
                    {expenseCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={addExpense} className="text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2">Save</button>
            {/* <FormButton label="Save" onClick={addExpense} /> */}
        </FormWrapper>
    )
}

export default ExpenseForm;