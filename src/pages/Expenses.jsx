import React, { useState } from "react";
import ExpenseForm from "../forms/ExpenseForm";
import ExpenseCategoryForm from "../forms/ExpenseCategoryForm";
import ExpenseList from "../components/ExpenseList";

const Expenses = () => {

    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => {
        setRefresh(!refresh);
    }
    return (
        <div className="flex items-start space-x-10">
            <ExpenseForm onExpenseAdded={handleRefresh} />
            <ExpenseCategoryForm/>
            <ExpenseList refresh={refresh}/>
        </div>
    );
}

export default Expenses;