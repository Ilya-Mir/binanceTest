import React from 'react'
import styled from 'styled-components'
import { Reset } from 'styled-reset'
import Widget from './widget'

import './App.css'

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100vh;
  width: 100%;
  background-color: #d0bbbb;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <>
      <Reset />
      <Container>
        <Widget />
      </Container>
    </>
  )
}

export default App
