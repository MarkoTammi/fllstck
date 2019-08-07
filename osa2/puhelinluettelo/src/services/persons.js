import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () => {
  return axios.get(baseUrl)
}

const createPerson = newObject => {
  return axios.post(baseUrl, newObject)
}

const updatePerson = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { 
  getAllPersons: getAllPersons, 
  createPerson: createPerson, 
  updatePerson: updatePerson 
}