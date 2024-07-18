import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightgrey;
  position: relative;
`

const ContextMenu = styled.ul`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  border: 1px solid black;
  list-style: none;
  padding: 10px;
  margin: 0;
  box-shadow:
    0 15px 35px rgba(50, 50, 90, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  z-index: 999999;
`

const ContextMenuItem = styled.li`
  border-left: 3px solid transparent;
  transition: ease 0.2s;

  &:hover {
    background: #ce93d8;
    border-left: 3px solid #9c27b0;
  }

  & > a {
    display: block;
    padding: 10px;
    color: #b0bec5;
    text-decoration: none;
    transition: ease 0.2s;

    &:hover {
      color: #ffffff;
    }
  }
`

const Work = () => {
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })
  const [showMenu, setShowMenu] = useState(false)

  const handleContextMenu = (event) => {
    event.preventDefault()

    setMenuPosition({ x: event.clientX, y: event.clientY })
    setShowMenu(true)
  }

  const handleClick = () => {
    setShowMenu(false)
  };

  return (
    <Container onContextMenu={handleContextMenu} onClick={handleClick}>
      우클릭해보세요!
      <ContextMenu show={showMenu} style={{ top: menuPosition.y, left: menuPosition.x }}>
        <ContextMenuItem>
          <a href="#">우클릭메뉴 항목 1</a>
        </ContextMenuItem>
        <ContextMenuItem>
          <a href="#">우클릭메뉴 항목 2</a>
        </ContextMenuItem>
      </ContextMenu>
    </Container>
  );
};

export default Work;
