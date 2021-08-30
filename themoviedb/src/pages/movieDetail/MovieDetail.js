import React, { useEffect, useState } from 'react'

import axios from 'axios'

import NavBar from '../../components/NavBar/Navbar'

import { useParams } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

import { useGenre } from '../../context/genre'
import { Container } from 'react-bootstrap'

export function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState({})
  const [id, setId] = useState('')

  const { genreList } = useGenre()

  const param = useParams()

  useEffect(() => {
    async function getMovieDetail() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${param.id}?api_key=84029d900d2e11bcb76ccdc09aec7fd7&language=pt-BR`
        )
        setMovieDetail(response.data)
        setId(response.data.id)
        console.log(movieDetail)
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
    getMovieDetail()
  }, [id])

  return (
    <>
      <NavBar />
      <Container>
        <Card style={{ width: '18rem', margin: '1%' }}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
            alt="Poster Filme"
          />
          <Card.Body>
            <Card.Title>{movieDetail['original_title']}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {movieDetail['title']}
            </Card.Subtitle>
            <Card.Text>{movieDetail['overview']}</Card.Text>
            <Card.Footer>
              <small className="text-muted">
                Score: {movieDetail['vote_average']}
              </small>
            </Card.Footer>
          </Card.Body>
        </Card>
        {/* Eu não achei o endpoint para listagem do elenco principal,
         então impletei somente uma parte visual que represntaria isso */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  )
}
