import React, { createContext, useContext, useEffect } from 'react'

import { useState } from 'react'
import axios from 'axios'

const GenreContext = createContext({})

export const GenreProvider = ({ children }) => {
  const [genreList, setGenreList] = useState([])
  
  useEffect(() => {
    async function getGenre() {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/genre/movie/list?api_key=84029d900d2e11bcb76ccdc09aec7fd7&language=pt-BR'
        )
        
        setGenreList(response.data.genres)
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.genres)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
      }
    }
    getGenre()
  }, [])

  return (
    <GenreContext.Provider value={{ genreList }}>
      {children}
    </GenreContext.Provider>
  )
}

export const useGenre = () => {
  const context = useContext(GenreContext)
  if (!context) {
    throw new Error('Use genre must be used iseder genre provider!')
  }
  return context
}
