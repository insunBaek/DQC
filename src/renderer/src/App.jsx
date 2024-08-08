import { RecoilRoot } from 'recoil'

import styled from 'styled-components'
import Router from './Router'
import GlobalStyle from './assets/style/globalStyles'

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
`

const App = () => {
  return (
    <RecoilRoot>
      <AppContainer>
        <GlobalStyle />
        <Router />
      </AppContainer>
    </RecoilRoot>
  )
}

export default App
