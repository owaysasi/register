import React, { useEffect,useState  } from 'react';
import 'antd/dist/antd.css';
import './Signup.css';
import Coma from '../../Pics/Coma.png';
import { Button, Input, Checkbox } from 'antd';
import Title from '../../Components/Title/Title';
import Paragraph from '../../Components/Paragraph/Paragraph';
import Google from '../../Pics/google.png';
import Logo from '../../Pics/icon-signup.png';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

    const signupSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
        confirmPassword: yup.string().required(),
    });

    const initialErrors = {
        email: '',
        password: '',
        confirmPassword: '',
    }

function Signup(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
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

    const data={ email, password, confirmPassword };

    useEffect(() => {
        if(submitted){
            validateForm(data);
        }
    },[email, password,confirmPassword]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        validateForm(data);
    }

    const settersObj = {
        email : setEmail,
        password : setPassword,
        confirmPassword : setConfirmPassword,
    };

    /**
     const handleChange = (e) => {
         const { value,name } = e.target;
         console.log(value,name);
         switch(name) {
             case "email":
               setEmail(value);
               break;
             case "password":
               setPassword(value);
               break;
             case "confirmPassword":
               setConfirmPassword(value);
           }
         // settersObj[name](value);
     }
     * 
     * 
     */
     const history = useHistory();

    function handleClick() {
        window.location.href ='/signin';
    }

    return(
        <div className="signup-cont">
            <div className="left-signup-cont">
                <div className="mini-left-signup-cont">
                    <div className="logo-signup-cont"><img src={Logo} className="logo-signup"/>Gamers</div>
                    <img className="coma-signup" src={Coma}/>
                    <div className="parag-signup">
                        I always observe the people who 
                        pass by when I ride an escalator. 
                        I'll never see most of them again, 
                        so I imagine a lot of things about 
                        their lives... about the day ahead of them.
                    </div>
                </div>
            </div>
            <div className="right-signup-cont">
                <div className="mini-right-signup-cont">
                    <Title/>
                    <Paragraph/>
                    <form autoComplete="none" onSubmit={handleSubmit}>
                        <label className={`label-signup ${errors.email && " error"}`}>Email Address *</label>
                        <Input
                        type="text" 
                        placeholder="Enter an email" 
                        style={{height:`40px`, borderRadius:`5px`}}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                        />
                        {errors.email && <div className="error-show">{errors.email}</div>}
                        <label className={`label-signup${errors.password && " error"}`}>Create Password *</label>
                        <Input
                        className={`field${errors.password && " error"}`}
                        type="password" 
                        placeholder="Choose a password" 
                        style={{height:`40px`, borderRadius:`5px`}}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                        />
                        {errors.password && <div className="error-show">{errors.password}</div>}
                        <label className={`label-signup${errors.confirmPassword && " error"}`}>Repeat Password *</label>
                        <Input
                        className={`field-signup${errors.confirmPassword && " error"}`}
                        type="password" 
                        placeholder="Repeat your password" 
                        style={{height:`40px`, borderRadius:`5px`}}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                        value={confirmPassword}
                        />
                        {errors.confirmPassword && <div className="error-show">{errors.confirmPassword}</div>}
                        <Checkbox style={{float:`left`, marginTop:`15px`}} onChange={(e) => {
                            console.log(`checked = ${e.target.checked}`);
                        }}>I agree to terms & conditions</Checkbox>
                        <Button htmlType="submit" block style={{height:`40px`, borderRadius:`5px`, marginTop:`15px`}} type="primary">Register</Button>
                    </form>
                    <div className="hr-or-parent">
                        <hr className="hr-line"/>
                        <label className="or">or</label>
                    </div>

                    <Button
                    onClick={() => {
                        window.location.href='/signin';
                    }} 
                    style={{boxShadow:`2px 3px 5px 1px #888888`, height:`40px`}} 
                    block><img className="google-img" 
                    src={Google} ></img>Login</Button
                    >
                </div>
            </div>
        </div>
    );
}

export default Signup;