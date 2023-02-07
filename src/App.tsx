/* eslint-disable prettier/prettier */
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GithubProvider } from './contexts/GitHubContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <GithubProvider>
        <Router />
      </GithubProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
