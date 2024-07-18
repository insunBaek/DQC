import styled from 'styled-components'
import Router from './Router'
import GlobalStyle from './assets/style/globalStyles'

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c3e0e0;
  width: 100%;
  height: 100%;
`

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Router />
    </AppContainer>
  )
}

export default App
