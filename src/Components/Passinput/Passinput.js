import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './Passinput.css';

function Passinput(){
    return(
        <>
            <Input.Password
                placeholder="input password"
                iconRender={visible => (
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                )}
            />
        </>
    );
}

export default Passinput;