import React from 'react';

function FormField({ label, type, value, name, onChange }) {
    return (
        <div>
            <label>
                {label}
            </label>
            <input 
                type={type}
                value={value}
                name={name}
                onChange={onChange}
            />
        </div>
    )
}

export default FormField;