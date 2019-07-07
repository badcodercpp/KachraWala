import React, { useState, useEffect } from 'react';
import produce from 'immer';
import DummyInput from './dummyInput.component';
import DummyButton from './dummyButton.component'

function DummyUd(props) {
    return (
        <div>
            <DummyInput placeholder="type here" />
            <DummyButton name="ajay" />
        </div>
    )
}

export default DummyUd;