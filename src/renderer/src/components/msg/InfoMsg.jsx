import styled from 'styled-components'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`

const OkButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: var(--color-info);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`

const Title = styled.h2`
  color: var(--color-info);
`

const MsgBlock = styled.p`
  font-weight: bold;
`

// eslint-disable-next-line react/prop-types
const InfoMsg = ({ message, onClose }) => {
  const handleOkClick = () => {
    console.log('OK button pressed.')
    onClose()
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>Info</Title>
        <MsgBlock>{message}</MsgBlock>
        <OkButton onClick={handleOkClick}>OK</OkButton>
      </ModalContent>
    </ModalOverlay>
  )
}

export default InfoMsg
