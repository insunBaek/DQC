import { useState } from 'react'
import styled from 'styled-components'
import WorkUnit from '../components/unit/WorkUnit'
import Modal from '../components/Modal'

const WorkWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

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
`

const ContextMenu = styled.ul`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  list-style: none;
  padding: 10px;
  margin: 0;
  box-shadow:
    0 15px 35px rgba(50, 50, 90, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  z-index: 9;
`

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

const Work = () => {
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })
  const [showMenu, setShowMenu] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentWorkUnit, setCurrentWorkUnit] = useState(null)
  const [workUnits, setWorkUnits] = useState([
    { description: 'Task 1', interval: 10, sqlID: 101, programID: 201 },
    { description: 'Task 2', interval: 20, sqlID: 102, programID: 202 },
    { description: 'Task 3', interval: 30, sqlID: 103, programID: 203 },
    { description: 'Task 4', interval: 40, sqlID: 104, programID: 204 },
    { description: 'Task 5', interval: 50, sqlID: 105, programID: 205 },
    { description: 'Task 6', interval: 60, sqlID: 106, programID: 206 },
    { description: 'Task 7', interval: 70, sqlID: 107, programID: 207 },
    { description: 'Task 8', interval: 80, sqlID: 108, programID: 208 },
    { description: 'Task 9', interval: 90, sqlID: 109, programID: 209 },
    { description: 'Task 1', interval: 10, sqlID: 101, programID: 201 },
    { description: 'Task 2', interval: 20, sqlID: 102, programID: 202 },
    { description: 'Task 3', interval: 30, sqlID: 103, programID: 203 },
    { description: 'Task 4', interval: 40, sqlID: 104, programID: 204 },

  ])

  const handleContextMenu = (event) => {
    event.preventDefault()
    setMenuPosition({ x: event.clientX, y: event.clientY })
    setShowMenu(true)
  }

  const handleClick = () => {
    setShowMenu(false)
  }

  const handleWorkUnitClick = (index) => {
    setCurrentWorkUnit(index)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setWorkUnits((prevWorkUnits) => {
      const newWorkUnits = [...prevWorkUnits]
      newWorkUnits[currentWorkUnit] = {
        ...newWorkUnits[currentWorkUnit],
        [name]: value
      }
      return newWorkUnits
    })
  }

  const handleDelete = (index) => {
    setWorkUnits((prevWorkUnits) => prevWorkUnits.filter((_, i) => i !== index))
  }

  const handleSave = () => {
    setIsModalOpen(false)
  }

  return (
    <WorkWrapper>
      <Container onContextMenu={handleContextMenu} onClick={handleClick}>
        <ContextMenu show={showMenu} style={{ top: menuPosition.y, left: menuPosition.x }}>
          <ContextMenuItem>
            <a href="#">작업추가</a>
          </ContextMenuItem>
        </ContextMenu>
        {workUnits.map((workUnit, index) => (
          <WorkUnit
            key={index}
            description={workUnit.description}
            interval={workUnit.interval}
            sqlID={workUnit.sqlID}
            programID={workUnit.programID}
            onClick={() => handleWorkUnitClick(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2>작업내용 수정</h2>
          {currentWorkUnit !== null && (
            <>
              <label>
                ID:
                <input
                  type="text"
                  name="description"
                  value={workUnits[currentWorkUnit].description}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  value={workUnits[currentWorkUnit].description}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Interval:
                <input
                  type="number"
                  name="interval"
                  value={workUnits[currentWorkUnit].interval}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                SQL ID:
                <input
                  type="text"
                  name="sqlID"
                  value={workUnits[currentWorkUnit].sqlID}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Program ID:
                <input
                  type="text"
                  name="programID"
                  value={workUnits[currentWorkUnit].programID}
                  onChange={handleInputChange}
                />
              </label>
              <button onClick={handleSave}>저장</button>
              <button onClick={handleCloseModal}>닫기</button>
            </>
          )}
        </Modal>
      </Container>
    </WorkWrapper>
  )
}
export default Work
