import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Admin from './apps/Admin'

ReactDOM.render(
  <ThemeProvider theme={{mode: 'admin'}}>
    <Router>
      <Admin />
    </Router>
  </ThemeProvider>, document.getElementById('app'))