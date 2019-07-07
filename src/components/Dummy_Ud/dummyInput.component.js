import React, { useState, useEffect } from 'react';

import produce from 'immer';
import Handler from '../../util/Dummy_Ud/DummyInput/onChange';

function DummyInput({placeholder}) {
    const [inputValue, setInputValue] = useState("");
    return (
        <input type="text" placeholder={placeholder} value={inputValue} onChange={Handler.changeHandler.bind({handlers:[setInputValue],argument:[]})} />
    )
}

export default DummyInput;