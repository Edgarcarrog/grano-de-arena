import axios from "axios";

const baseURL = 'http://localhost:3000'

const project = axios.create({
    baseURL,
    withCredentials: true
})

const DataService = {
    createProject: data => {
        return project.post("/project", data)
    },
    getProject: user => {
        const proj = project.get('/project', user)
        console.log(user)
        return proj
    },
    getUser: () => {
        return project.get('/profile')
    },
    logout: () => {
        return project.get('/logout')
    }
}

export default DataService