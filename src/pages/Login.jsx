import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLogin } from '../context/loginContext';
import styled from 'styled-components'


export default function Login() {
  const { login, isAuthenticated  } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const success = login(username, password);
  
    if (success) {
      navigate('/dashboard');
    } else {
      alert('Credenciales incorrectas');
    }
  };

    return (
    <Wrapper>
      <FormContainer>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <StyledInput
              id="username"
              type="text"
              placeholder=" "
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <StyledLabel htmlFor="username">Username</StyledLabel>
          </InputContainer>
          <InputContainer>
            <StyledInput
              id="password"
              type="password"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <StyledLabel htmlFor="password">Password</StyledLabel>
          </InputContainer>
          <StyledButton type="submit">Login</StyledButton>
        </form>
      </FormContainer>
    </Wrapper>
  );
}

// Styled components
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f6fa;
`;

const FormContainer = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: #333;
  }
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: none;
  outline: none;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    border-color: #0077ff;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -10px;
    left: 10px;
    font-size: 0.75rem;
    background: white;
    padding: 0 5px;
    color: #0077ff;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  background-color: #0077ff;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #005fcc;
  }
`;
