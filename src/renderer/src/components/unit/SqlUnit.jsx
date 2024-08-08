import styled from 'styled-components'

const SqlUnitStyled = styled.div`
  width: 150px;
  height: 150px;
  background-color: RED;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 0.9em;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`

const Id = styled.div`
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`

const Description = styled.div`
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`

const Detail = styled.div`
  font-size: 0.8em;
  margin-bottom: 2px;
  text-align: center;
`

const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: #ffd700;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  justify-content: center;
`

// eslint-disable-next-line react/prop-types
const SqlUnit = ({ id, description, sql, onClick, onDelete }) => {
  return (
    <SqlUnitStyled onClick={onClick}>
      <DeleteButton
        onClick={(event) => {
          event.stopPropagation()
          onDelete()
        }}
      >
        x
      </DeleteButton>
      <Id>{id}</Id>
      <Description>{description}</Description>
      <Detail>{sql}</Detail>
    </SqlUnitStyled>
  )
}

export default SqlUnit
