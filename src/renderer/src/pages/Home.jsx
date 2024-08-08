import styled from 'styled-components'
import { Tabs, TabPanel } from '../components/Tabs'

import Work from './Work'
import Sql from './Sql'
import Program from './Program'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f6f6f6;
`

const Home = () => {
  return (
    <HomeContainer>
      <Tabs>
        <TabPanel label="Work">
          <Work></Work>
        </TabPanel>
        <TabPanel label="SQL">
          <Sql></Sql>
        </TabPanel>
        <TabPanel label="Program">
          <Program></Program>
        </TabPanel>
      </Tabs>
    </HomeContainer>
  )
}

export default Home
