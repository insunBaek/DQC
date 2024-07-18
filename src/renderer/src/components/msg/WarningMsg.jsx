import styled from 'styled-components'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 80%;
  text-align: center;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 1rem;
`

const Button = styled.button`
  padding: 12px 20px;
  background-color: var(--color-warning);
  color: #ffffff;
  border: none;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-warning-cursor);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5);
  }
`

const Title = styled.h2`
  color: var(--color-warning);
  font-size: 24px;
  margin-bottom: 20px;
`

const MsgBlock = styled.p`
  font-weight: 300;
  color: #333;
`

// eslint-disable-next-line react/prop-types
const WarningMsg = ({ message, onClose }) => {
  const handleOkClick = () => {
    console.log('OK button pressed.')
    onClose()
  }

  const handleYesClick = () => {
    console.log('YES button pressed.')
    onClose()
  }

  const handleNoClick = () => {
    console.log('NO button pressed.')
    onClose()
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>Warning</Title>
        <MsgBlock>{message}</MsgBlock>
        <ButtonContainer>
          <Button onClick={handleOkClick}>OK</Button>
          <Button onClick={handleYesClick}>YES</Button>
          <Button onClick={handleNoClick}>NO</Button>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  )
}

export default WarningMsg
