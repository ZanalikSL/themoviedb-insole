import Router from './Routes/Router'

import './App.css'

import AppProvider from './context'

import { Home } from './pages/home/Home'
import { MovieDetail } from './pages/movieDetail/MovieDetail'

export function App() {
  return (
    <AppProvider>
      <Router/>
    </AppProvider>
  )
}

export default App
