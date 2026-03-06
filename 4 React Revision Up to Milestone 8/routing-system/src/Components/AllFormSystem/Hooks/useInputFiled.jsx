import React, { useState } from 'react';

const useInputFiled = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    const handleOnChangeValue = (e) => {
        setValue(e.target.value);
    }
    return [value, handleOnChangeValue];
};

export default useInputFiled;