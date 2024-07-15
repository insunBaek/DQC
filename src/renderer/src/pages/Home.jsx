import { useState } from 'react'
import styled from 'styled-components'
import ErrorMsg from '../components/msg/ErrorMsg'
import WarningMsg from '../components/msg/WarningMsg'
import InfoMsg from '../components/msg/InfoMsg'

// 스타일 컴포넌트 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`

const ErrorButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: var(--color-error);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-error);
  }
`

const WarningButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: var(--color-warning);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-warning);
  }
`

const InfoButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: var(--color-info);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-info);
  }
`

const Home = () => {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)

  const handleErrorOpenModal = () => {
    setIsErrorModalOpen(true)
  }

  const handleErrorCloseModal = () => {
    setIsErrorModalOpen(false)
  }

  const handleWarningOpenMocal = () => {
    setIsWarningModalOpen(true)
  }

  const handleWarningCloseModal = () => {
    setIsWarningModalOpen(false)
  }

  const handleInfoOpenModal = () => {
    setIsInfoModalOpen(true)
  }

  const handleInfoCloseModal = () => {
    setIsInfoModalOpen(false)
  }

  return (
    <Container>
      <Title>Welcome to Home</Title>
      <ErrorButton onClick={handleErrorOpenModal}>Error</ErrorButton>
      {isErrorModalOpen && (
        <ErrorMsg message="This is an error message." onClose={handleErrorCloseModal} />
      )}
      <WarningButton onClick={handleWarningOpenMocal}>Warning</WarningButton>
      {isWarningModalOpen && (
        <WarningMsg message="This is an warning message." onClose={handleWarningCloseModal} />
      )}
      <InfoButton onClick={handleInfoOpenModal}>Info</InfoButton>
      {isInfoModalOpen && (
        <InfoMsg message="This is an Info message." onClose={handleInfoCloseModal} />
      )}
    </Container>
  )
}

export default Home
