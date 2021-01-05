import React, { useEffect,useState  } from 'react';
import 'antd/dist/antd.css';
import './Signin.css';
import { Button, Input, Checkbox, Row, Col } from 'antd';
import Title from '../../Components/Title/Title';
import Paragraph from '../../Components/Paragraph/Paragraph';
import Google from '../../Pics/google.png';
import Logo from '../../Pics/icon-signup.png';
import Joystick from '../../Pics/joystick.png';
import Coma from '../../Pics/Coma.png';
import * as yup from 'yup';
import {FaLinkedinIn as Linkedin} from 'react-icons/fa';
import {FaTwitter as Twitter} from 'react-icons/fa';
import {FcGoogle as Gmail} from 'react-icons/fc';
import { EyeInvisibleOutlined, EyeTwoTone, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const signupSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
});

const initialErrors = {
    email: '',
    password: '',
}

function Signin(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(initialErrors);
    const [submitted, setSubmitted] = useState(false);

    const validateForm = (data) => {
        signupSchema
        .validate(data, { abortEarly: false })
        .then((data) => {
            setErrors(initialErrors);
        })
        .catch((err) => {
            const newErrors = err.inner.reduce((acc, curr) => {
                acc[curr.path] = curr.message;
                return acc;
            }, {});
            setErrors(newErrors);
        });
    };

    const data={ email, password };

    useEffect(() => {
        if(submitted){
            validateForm(data);
        }
    },[email, password]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        validateForm(data);
    }

    return(
        <div className="signin-cont">
            <div className="left-signin-cont">
                <div className="mini-left-signin-cont">
                    <div className="logo-name"><img src={Logo}/>Gamers</div>
                    <img className="coma-signin" src={Coma}/>
                    <div className="parag-signin">
                    I always observe the people who 
                    pass by when I ride an escalator. 
                    I'll never see most of them again, 
                    so I imagine a lot of things about 
                    their lives... about the day ahead of them.
                    </div>
                    <img className="joy-signin" src={Joystick}/>
                </div>
            </div>
            <div className="right-signin-cont">
                <div className="mini-right-signin-cont">
                    <Title/>
                    <Paragraph/>
                    <Row className="set-btns" justify="center">
                        <Col span={4}><Button style={{width:`50px`, height:`50px`, border:`none`, boxShadow:`1px 1px 5px 1px #888888`}} icon={<GithubOutlined /> } /></Col>
                        <Col span={4}><Button style={{width:`50px`, height:`50px`, border:`none`, boxShadow:`1px 1px 5px 1px #888888`}} icon={<Linkedin /> } /></Col>
                        <Col span={4}><Button style={{width:`50px`, height:`50px`, border:`none`, boxShadow:`1px 1px 5px 1px #888888`}} icon={<Twitter/> } /></Col>
                        <Col span={4}><Button style={{width:`50px`, height:`50px`, border:`none`, boxShadow:`1px 1px 5px 1px #888888`}} icon={<Gmail/> } /></Col>
                    </Row>
                    <div className="hr-or-parent">
                        <hr className="hr-line"/>
                        <label className="or">or</label>
                    </div>
                    <form autoComplete="none" onSubmit={handleSubmit}>
                        <label className={`label-signin ${errors.email && " error"}`}>Your Email</label>
                        <Input
                        type="text" 
                        placeholder="Email" 
                        style={{height:`40px`, borderRadius:`5px`}}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                        />
                        {errors.email && <div className="error-show">{errors.email}</div>}
                        <label className={`label-signin${errors.password && " error"}`}>Your Password</label>
                        <Input.Password
                        className={`field${errors.password && " error"}`}
                        
                        placeholder="Password" 
                        style={{height:`40px`, borderRadius:`5px`}}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        {errors.password && <div className="error-show">{errors.password}</div>}
                        
                        <Checkbox style={{float:`left`, marginTop:`15px`}} onChange={(e) => {
                            console.log(`checked = ${e.target.checked}`);
                        }}>I agree to terms & conditions</Checkbox>
                        <Button htmlType="submit" block style={{height:`40px`, borderRadius:`5px`, marginTop:`15px`}} type="primary">Login</Button>
                        <p className="have-account">Don’t have an account?
                        <Button onClick={() => {
                            window.history.back();
                        }} 
                        style={{color:`blue`, border:`none`}}>Register</Button></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signin;