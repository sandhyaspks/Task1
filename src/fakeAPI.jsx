// src/fakeAPI.js
const fakeMoviesData = [
    { id: 1, title: 'The Witcher', genre: 'Fantasy', rating: '8.2', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Stranger Things', genre: 'Horror', rating: '8.7', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Breaking Bad', genre: 'Crime', rating: '9.5', image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Money Heist', genre: 'Action', rating: '8.3', image: 'https://via.placeholder.com/150' },
  ];
  
  export const getMovies = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(fakeMoviesData), 1000);
    });
  };
  