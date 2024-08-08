import { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import SqlUnit from "../components/unit/SqlUnit";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { SqlState } from "../recoil/state";

const SqlWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightgrey;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 10px;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  align-items: center;
  justify-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContextMenu = styled.ul`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  list-style: none;
  padding: 10px;
  margin: 0;
  box-shadow: 0 15px 35px rgba(50, 50, 90, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  z-index: 9;
`;

const ContextMenuItem = styled.li`
  border-left: 3px solid transparent;
  transition: ease 0.2s;
  border-radius: 8px;
  &:hover {
    background: #ffd700;
    border-left: 3px solid #ffd700;
  }

  & > a {
    display: block;
    padding: 10px;
    color: black;
    text-decoration: none;
    transition: ease 0.2s;
    border-radius: 1rem;

    &:hover {
      color: #ffffff;
    }
  }
`

const ModalContent = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  max-width: 500px;
  margin: auto;
`

const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  background: ${({ primary }) => (primary ? '#4CAF50' : '#f44336')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ primary }) => (primary ? '#45a049' : '#d32f2f')};
  }
`

const Sql = () => {
  const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSqlUnit, setCurrentSqlUnit] = useState(null);
  const [sqlUnits, setSqlUnits] = useState([
    { id: "IDA", description: "dA", sql: "SELECT * FROM MEMBER;" },
    { id: "IDB", description: "dB", sql: "SELECT * FROM MEMBER;" },
    { id: "IDC", description: "dC", sql: "SELECT * FROM MEMBER;" },
  ]);

  const setSqlQuery = useSetRecoilState(SqlState)
  const sqlQuery = useRecoilValue(SqlState)

  useEffect(() => {
    setSqlQuery(sqlUnits)
  }, [])

  const handleContextMenu = (event) => {
    event.preventDefault()
    setMenuPos({ x: event.clientX, y: event.clientY })
    setShowMenu(true)
  }

  const handleClick = () => {
    setShowMenu(false)
  }

  const handleSqlUnitClick = (index) => {
    setCurrentSqlUnit(index)
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setSqlUnits((prevSqlUnits) => {
      const newSqlUnits = [...prevSqlUnits]
      newSqlUnits[currentSqlUnit] = {
        ...newSqlUnits[currentSqlUnit],
        [name]: value
      }
      return newSqlUnits
    });
  };

  const handleDelete = (index) => {
    setSqlUnits((prevSqlUnits) => prevSqlUnits.filter((_, i) => i !== index))
  }

  const handleSave = () => {
    setIsModalOpen(false)
  }

  return (
    <SqlWrapper>
      <Container onContextMenu={handleContextMenu} onClick={handleClick}>
        <ContextMenu show={showMenu} style={{ top: menuPos.y, left: menuPos.x }}>
          <ContextMenuItem>
            <a href="https://naver.com">작업추가</a>
          </ContextMenuItem>
        </ContextMenu>
        {sqlQuery.map((sqlUnit, index) => (
          <SqlUnit
            key={index}
            id={sqlUnit.id}
            description={sqlUnit.description}
            sql={sqlUnit.sql}
            onClick={() => handleSqlUnitClick(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ModalContent>
            <h2>작업내용 수정</h2>
            {currentSqlUnit !== null && (
              <>
                <FormGroup>
                  <label>ID:</label>
                  <input
                    type="text"
                    name="id"
                    value={sqlUnits[currentSqlUnit].id}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Description:</label>
                  <input
                    type="text"
                    name="description"
                    value={sqlUnits[currentSqlUnit].description}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>SQL:</label>
                  <input
                    type="text"
                    name="sql"
                    value={sqlUnits[currentSqlUnit].sql}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <ButtonGroup>
                  <Button primary onClick={handleSave}>저장</Button>
                  <Button onClick={handleCloseModal}>닫기</Button>
                </ButtonGroup>
              </>
            )}
          </ModalContent>
        </Modal>
      </Container>
    </SqlWrapper>
  )
}

export default Sql;
