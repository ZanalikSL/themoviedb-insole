import { Route, Switch } from 'react-router-dom'

import './App.css'

import AppProvider from './context'

import { Home } from './pages/home/Home'
import { MovieDetail } from './pages/movieDetail/MovieDetail'

export function App() {
  return (
    <AppProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </AppProvider>
  )
}

export default App
