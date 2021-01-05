import React from 'react';
import './Buttons.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';

function Buttons(){
    return(
        <>
            <Button block style={{boxShadow:`2px 3px 5px 1px #888888`, height:`40px`}} >Primary Button</Button>
        </>
    );
}

export default Buttons;