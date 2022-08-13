import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => axios.get(baseUrl);

const create = (newObj) => axios.post(baseUrl, newObj);

const personService = { getAll, create };

export default personService;
