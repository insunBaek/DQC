import styled from 'styled-components'
import Router from './Router'
import './assets/global.css'

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`

const App = () => {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  )
}

export default App
