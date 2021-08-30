import axios from "axios";

const API_KEY = '84029d900d2e11bcb76ccdc09aec7fd7'
const URL = 'https://api.themoviedb.org/3'
const NOW_PLAYING_URL= `${URL}/movie/now_playing`

export const fecthMovies = async () => {
  try {
    const {data} = await axios.get(NOW_PLAYING_URL, {
      params: {
        api_key: API_KEY,
        language: 'pt-BR',
        page: 1
      }
    })

    const posterUrl = 'https://image.tmdb.org/t/p/original/'
    
    const modifiedData = data['results'].map((m) =>({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      rating: m['vote_average'],
    }))

    return modifiedData
  } catch (error) {}
}