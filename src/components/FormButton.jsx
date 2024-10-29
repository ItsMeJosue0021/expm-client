import React from "react";

const FormButton = ({label}) => {
    return (
        <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2">{label}</button>
    )
}

export default FormButton;