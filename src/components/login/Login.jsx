import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation and authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
    navigate("/todo");
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyleContent>
          <label>Email:</label>
          <StyleInput 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </StyleContent>
        <div>
          <label>Password:</label>
          <StyleInput 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </StyledForm>
      
    </StyledContainer>
  );
};

export default Login;


const StyleInput = styled.input`
  width: 300px;
  height: 40px;
`
const StyleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`

const StyledContainer = styled.div`
  width: 30rem;
  height: 20rem;
  border: 2px solid black;
  display: flex;
  justify-content: center;
`

const StyledForm = styled.form`
display: flex;
flex-direction: column;
`