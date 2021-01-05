import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

import './Inputs.css';

function Inputs(){
    return(
        <>
            <Input placeholder="Basic usage" style={{height:`40px`, borderRadius:`5px`}}/>
        </>
    );
}

export default Inputs;