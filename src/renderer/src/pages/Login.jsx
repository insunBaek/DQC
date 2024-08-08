import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ErrorMsg from '../components/msg/ErrorMsg'
import { TextField } from '@mui/material'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 20px;
  gap: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
`

const Title = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`

const Button = styled.button`
  padding: 10px;
  background-color: var(--color-info);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  /* font-family: ; */

  &:hover {
    background-color: var(--color-info-cursor);
  }
`

const Login = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
  const navi = useNavigate()

  const handleErrorOpenModal = () => {
    setIsErrorModalOpen(true)
  }

  const handleErrorCloseModal = () => {
    setIsErrorModalOpen(false)
  }

  useEffect(() => {
    const handleConnectDBResponse = (event, result) => {
      if (!result.success) {
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
        <TextField
          id="outlined-basic"
          label="ID"
          variant="outlined"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button type="submit">Sign In</Button>
      </Form>

      {isErrorModalOpen && (
        <ErrorMsg message="ID/Password가 틀립니다." onClose={handleErrorCloseModal} />
      )}
    </Container>
  )
}

export default Login
