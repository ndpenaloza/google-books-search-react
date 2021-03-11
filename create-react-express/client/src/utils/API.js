import axios from 'axios';

export default {
  getBooks: () => {
    return axios.get('/api/books');
  },
  getBook: () => {
    return axios.get('/api/books' + id)
  },
  saveBook: () => {
    return axios.post('/api/books', bookData);
  },
  deleteBook: () => {
    return axios.delete('/api/books/' + id);
  }
}