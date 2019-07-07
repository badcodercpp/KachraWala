import React, { useState, useEffect } from 'react';

import produce from 'immer';

function DummyButton({name}) {
    return (
        <button>
            {name}
        </button>
    )
}

export default DummyButton;