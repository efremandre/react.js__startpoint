import React from 'react';

const Select = ({
                    defaultValue,
                    value,
                    options,
                    onChange
}) => {
    return (
        <select
        value={value}
        onChange={ev => onChange(ev.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default Select;
