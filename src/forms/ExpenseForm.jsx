import React, { useEffect } from "react";
import { useState } from "react";

const ExpenseForm = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
    const [expenseCategoryId, setExpenseCategoryId] = useState('');
    
    const [expenseCategories, setExpenseCategories] = useState([]);
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpenseCategories();
        fetchExpenses();
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

    const fetchExpenses = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/expenses');
            const data = await response.json();
            setExpenses(data);
        } catch (err) {
            console.log(err)
        }
    }

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
            const data = await response.json();
            setExpenses((prev) => [...prev, data]);
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="w-96 h-auto p-5 rounded-md border border-gray-200">
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col items-start space-y-1">
                    <span className="text-sm">Amount</span>
                    <input onChange={(e) => setAmount(e.target.value)} type="number" placeholder="00.00" className="w-full text-sm border border-gray-200 rounded-md px-4 py-2"/>
                </div>
                <div className="flex flex-col items-start space-y-1">
                    <span className="text-sm">Description</span>
                    <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" className="w-full text-sm border border-gray-200 rounded-md px-4 py-2"/>
                </div>
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
            </div>

            <div className="mt-5">
                <span className="text-sm font-semibold">LIVE INPUT VALUE</span>
                <p className="text-sm">Description: {description}</p>
                <p className="text-sm">Amount: {amount}</p>
                <p className="text-sm">Date: {date}</p>
                <p className="text-sm">Selected Category ID: {expenseCategoryId}</p>
            </div>

            <div className="mt-5">
                {expenses.map((expense) => (
                    <div key={expense.id} className="flex items-center justify-between text-sm mt-2 border-b border-gray-200">
                        <p>{expense.amount}</p>
                        <p>{expense.date}</p>
                        <p>{expense.expenseCategory.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExpenseForm;