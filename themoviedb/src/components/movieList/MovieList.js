import MovieCard from '../movieCard/MovieCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const MovieList = (props) => {
  const { movieData = [] } = props
  const movieDataResults = movieData.results

  console.log('movieDataResults', movieDataResults)
  return (
    <Container style={{ margin: '50px 0 0 0' }}>
      {/* <Row xs={'auto'} md={'auto'} className="g-4">
        {movieDataResults.map((movie) => (
          <MovieCard data={movie} />
        ))}
      </Row> */}
    </Container>
  )
}

export default MovieList
