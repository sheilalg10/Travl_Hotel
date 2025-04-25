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
        <>
            <Container> 
                <div className="container">

                    <h1>Login</h1>
                    <form action="post" onSubmit={handleSubmit}>
                        <div className="inputContainer">
                            <input id="username" type="text" placeholder=" " onChange={(e) => setUsername(e.target.value)} />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="inputContainer">
                            <input id="password" type="password" placeholder=" " onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="password">Password</label>
                        </div>
                        <Button type='solid' text='Login' />
                    </form>
                </div>
            </ Container>
        </>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`
