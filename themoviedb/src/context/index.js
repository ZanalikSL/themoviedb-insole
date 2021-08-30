import React from 'react'

import { GenreProvider } from './genre'

const AppProvider = ({ children }) => {
  return <GenreProvider>{children}</GenreProvider>
}

export default AppProvider
