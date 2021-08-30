export const goToHome = (history) => {
  history.push('/')
}

export const goToMovieDetail = (history, id) => {
  history.push(`/movie/${id}`)
}