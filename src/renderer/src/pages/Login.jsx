import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ErrorMsg from '../components/msg/ErrorMsg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`

const Title = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

const Login = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
  const navi = useNavigate();

  const handleErrorOpenModal = () => {
    setIsErrorModalOpen(true)
  }

  const handleErrorCloseModal = () => {
    setIsErrorModalOpen(false)
  }

  useEffect(() => {
    const handleConnectDBResponse = (event, result) => {
      if (result.success) {
        navi('/home')
      } else {
        handleErrorOpenModal()
      }
    }

    window.electron.ipcRenderer.on('db-auth-response', handleConnectDBResponse)

    return () => {
      window.electron.ipcRenderer.removeListener('db-auth-response', handleConnectDBResponse)
    }
  }, [navi])

  const handleSubmit = (event) => {
    event.preventDefault()
    window.electron.ipcRenderer.send('db-auth', id, password)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Sign In</Button>
      </Form>

      {isErrorModalOpen && (
        <ErrorMsg message="ID or Password가 틀립니다." onClose={handleErrorCloseModal} />
      )}
    </Container>
  )
}

export default Login
