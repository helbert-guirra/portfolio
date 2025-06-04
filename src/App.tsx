import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/sobre'
import EstiloGlobal, { Container } from './styles'
import { lightTheme } from './themes/themes'
import { darkTheme } from './themes/themes'
import { useState } from 'react'

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false)

  const alternarTema = () => {
    setTemaEscuro(!temaEscuro)
  }

  return (
    <ThemeProvider theme={temaEscuro ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={alternarTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
