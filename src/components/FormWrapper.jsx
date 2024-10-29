import React from "react";

const FormWrapper = ({children}) => {
    return (
        <div className="w-96 h-auto p-5 rounded-md border border-gray-200">
            <div className="flex flex-col space-y-4">
                {children}
            </div>
        </div>
    )
}

export default FormWrapper;