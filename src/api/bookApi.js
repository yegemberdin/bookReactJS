export const getBooks = () => (
    fetch(
      'https://api.myjson.com/bins/sbybi',
      {
        method: 'GET',
      }
    )
  )