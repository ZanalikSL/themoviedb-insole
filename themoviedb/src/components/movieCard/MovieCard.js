import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

import { useGenre } from '../../context/genre'

const MovieCard = (props) => {
  const { data } = props
  const { genreList } = useGenre()
  console.log(data.id)

  return (
    <Card style={{ width: '18rem', margin: '1%' }}>
      <button>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt="Poster Filme"
        />
      </button>
      <Card.Body>
        <Card.Title>{data['original_title']}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {data['title']}
        </Card.Subtitle>
        <Card.Header>Genres: </Card.Header>
        <ListGroup className="list-group-flush">
          {data.genre_ids.map((id) => {
            const [genre] = genreList.filter((item) => item.id === id)
            return <ListGroupItem>{genre?.name}</ListGroupItem>
          })}
        </ListGroup>
        <Card.Footer>
          <small className="text-muted">Score: {data['vote_average']}</small>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default MovieCard
