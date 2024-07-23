import React, {useState} from 'react';

const InputValue = () => {

    const [value, setValue] = useState('')

    return (
        <div>
            <h2>{!value ? 'Тут вводимый текст' : value}</h2>
            <input type="text"
                   value={value}
                   placeholder="Введите что-то..."
                   onChange={(ev) => setValue(ev.target.value)} />
        </div>
    );
};

export default InputValue;
