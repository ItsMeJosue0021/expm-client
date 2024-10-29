import React from "react";

const FormInput = ({label, type, placeholder}) => {
    return (
        <div className="flex flex-col items-start space-y-1">
            <span className="text-sm">{label}</span>
            <input type={type} placeholder={placeholder} className="w-full text-sm border border-gray-200 rounded-md px-4 py-2"/>
        </div>
    )
}

export default FormInput;