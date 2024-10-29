import React, { useState, useEffect } from "react";

const ExpenseList = ({refresh}) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpenses();
    }, [refresh]);

    const fetchExpenses = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/expenses');
            const data = await response.json();
            setExpenses(data);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="mt-5">
            {expenses.map((expense) => (
                <div key={expense.id} className="flex items-center justify-between text-sm mt-2 border-b border-gray-200">
                    <p>{expense.amount}</p>
                    <p>{expense.date}</p>
                    <p>{expense.expenseCategory.name}</p>
                </div>
            ))}
        </div> 
    )
}

export default ExpenseList;