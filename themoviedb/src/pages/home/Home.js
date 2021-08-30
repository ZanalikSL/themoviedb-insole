import { useEffect } from 'react'
import { useState } from 'react'

import axios from 'axios'

import MovieCard from '../../components/movieCard/MovieCard'
import NavBar from '../../components/NavBar/Navbar'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export function Home() {
  const [nowPlaying, setNowPlaying] = useState([])
  const [filteredMovie, setFilteredMovie] = useState('')
  const [searchBoolean, setSearchBoolean] = useState(false)

  const [pagination, setPagination] = useState('1')

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=84029d900d2e11bcb76ccdc09aec7fd7&language=pt-BR&page=${pagination}`
        )
        setNowPlaying(response.data.results)
      } catch (error) {
        if (error.response) {
          console.log(error.response.data)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
      }
    }
    getUser()
  }, [])

  useEffect(() => {
    async function getFilteredMovie() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=84029d900d2e11bcb76ccdc09aec7fd7&language=pt-BR&query=${filteredMovie}&page=1&include_adult=false`
        )
        console.log(response.data)
        setNowPlaying(response.data.results)
      } catch (error) {
        if (error.response) {
          console.log(error.response.data)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
      }
    }
    if (searchBoolean) {
      getFilteredMovie()
    }
    setSearchBoolean(false)
  }, [searchBoolean])

  console.log(nowPlaying)

  const handleInput = (e) => {
    console.log(e)
    setFilteredMovie(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchBoolean(true)
  }

  return (
    <>
      <NavBar />
      <Container>
        <form onSubmit={handleSubmit}>
          <label>
            Movie:{' '}
            <input type="text" value={filteredMovie} onChange={handleInput} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
        <Container style={{ margin: '50px 0 0 0' }}>
          <Row xs={'auto'} md={'auto'} className="g-4">
            {!!nowPlaying.length &&
              nowPlaying.map((movie) => <MovieCard data={movie} />)}
          </Row>
        </Container>
      </Container>
    </>
  )
}
