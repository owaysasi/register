import React from 'react';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';

import './Checkin.css';

function Checkin(){
    return(
        <>
            <Checkbox style={{float:`left`, marginTop:`15px`}} onChange={(e) => {
                console.log(`checked = ${e.target.checked}`);
            }}>Checkbox</Checkbox>
        </>
    );
}

export default Checkin;