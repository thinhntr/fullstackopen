import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => axios.get(baseUrl);

const create = (newObj) => axios.post(baseUrl, newObj);

const remove = (id) => axios.delete(`${baseUrl}/${id}`);

const personService = { getAll, create, remove };

export default personService;
