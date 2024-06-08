import './App.css'
import {RandomUser} from './components/random/RandomUser/RandomUser'
import {Header} from './components/Header/Header'
import {FakeStore} from './components/fake/FakeStore/FakeStore'
import { PokeApi } from './components/poke/PokeApi/PokeApi'
import { createContext, useState } from 'react'

export const ApiContext = createContext()

function App() {

  const [page , setPage] = useState(1)

  return (
    <>
      <ApiContext.Provider value={{page , setPage}}>
      <Header/>
      <RandomUser/>
      <FakeStore/>
      <PokeApi/>  
      </ApiContext.Provider>
    </>
  )
}

export default App
