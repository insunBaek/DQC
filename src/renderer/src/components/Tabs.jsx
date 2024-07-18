/* eslint-disable react/prop-types */
// Tabs.js
import React, { useState } from 'react'
import styled from 'styled-components'

const TabList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

const TabContainer = styled.div`
  width: 90%;
  height: 90%;
  margin: 0 auto;
`

const TabButton = styled.button`
  padding: 12px 20px;
  margin: 0 5px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &.active {
    border-color: var(--color-info);
    /* font-weight: bold; */
    color: var(--color-info);
  }

  &:hover {
    color: var(--color-info);
  }

  &:focus {
    outline: none;
  }
`

const TabContent = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  padding: 20px;
  height: calc(100% - 144px); /* Adjust height based on tab button height */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const Tab = ({ label, onClick, isActive }) => (
  <TabButton onClick={onClick} className={isActive ? 'active' : ''}>
    {label}
  </TabButton>
)

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleTabClick = (index) => {
    setActiveIndex(index)
  }

  const tabs = React.Children.toArray(children)

  return (
    <TabContainer>
      <TabList>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.props.label}
            isActive={index === activeIndex}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </TabList>
      <TabContent>{tabs[activeIndex]}</TabContent>
    </TabContainer>
  )
}

const TabPanel = ({ children }) => <>{children}</>

export { Tabs, TabPanel }
