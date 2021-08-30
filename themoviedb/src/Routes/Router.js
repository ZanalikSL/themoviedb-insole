import React from 'react'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import { Home } from '../pages/home/Home'
import { MovieDetail } from '../pages/movieDetail/MovieDetail'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
