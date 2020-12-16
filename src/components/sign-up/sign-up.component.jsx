import React, { useState } from 'react';
import {connect} from 'react-redux';

import FormImput from '../form-input/form-input.component';
import CustomButtom from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("Passowrds don't match!");
            return;
        }

        signUpStart({ displayName, email, password });
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormImput 
                    type='text' 
                    name='displayName' 
                    value={displayName} 
                    onChange={handleChange} 
                    label='Display Name' 
                    required />
                <FormImput 
                    type='email' 
                    name='email' 
                    value={email} 
                    onChange={handleChange} 
                    label='Email' 
                    required />
                <FormImput 
                    type='password' 
                    name='password' 
                    value={password} 
                    onChange={handleChange} 
                    label='Password' 
                    required />
                <FormImput 
                    type='password' 
                    name='confirmPassword' 
                    value={confirmPassword} 
                    onChange={handleChange} 
                    label='Confirm Password' 
                    required />
                <CustomButtom type='submit'>SIGN UP</CustomButtom>
            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);