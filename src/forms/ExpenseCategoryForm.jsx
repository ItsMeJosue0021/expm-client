import React from "react";
import FormInput from "../components/FormInput";
import FormWrapper from "../components/FormWrapper";
import FormButton from "../components/FormButton";

const ExpenseCategoryForm = () => {
    return (
        <FormWrapper>
             <FormInput label="Name" type="text" placeholder="Name.." />
            <div className="flex flex-col items-start space-y-1">
                <span className="text-sm">Description</span>
                <textarea id="description" placeholder="Description.." className="w-full h-20 text-sm border border-gray-200 rounded-md px-4 py-2">
                </textarea>
            </div>
            <FormButton label="Save" />
        </FormWrapper>
    )
}

export default ExpenseCategoryForm; 