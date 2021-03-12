import axios from 'axios';

export default {
  getBooks: (url) => {
    return axios.get(url);
  },
  getBook: (id) => {
    return axios.get('/api/books' + id)
  },
  saveBook: (bookData) => {
    return axios.post('/api/books', bookData);
  },
  deleteBook: (id) => {
    return axios.delete('/api/books/' + id);
  }
}