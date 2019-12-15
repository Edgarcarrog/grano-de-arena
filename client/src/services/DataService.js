
const baseURL = 'http://localhost:3000'

const project = axios.create({
    baseURL,
    withCredentials: true
})

const DataService = {
    createProject: data => {
        return project.post("/createProject", data)
    },
    login: data => {
        return service.post('/login', data)
    },
    getUser: () => {
        return service.get('/profile')
    },
    logout: () => {
        return service.get('/logout')
    }
}

export default DataService