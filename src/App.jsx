import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero'
import Layout from './layouts/layout'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Routes>
          <Route
          path='/' element=
          {<Layout>
            <Hero />
          </Layout>}
            />
          <Route
          path='/Projects' element=
          {<Layout>
            <Projects />
          </Layout>}
            />
          <Route
          path='/Skills' element=
          {<Layout>
            <Skills />
          </Layout>}
            />
          <Route
          path='/Contact' element=
          {<Layout>
            <Contact />
          </Layout>}
            />
      </Routes>
   </React.Fragment>
  )
}

export default App
