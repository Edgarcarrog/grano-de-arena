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
        return project.post('/myProjects', user)
    },
    allProjects: user => {
        return project.post('/allProjects', user)  
    },
    joinProject: data => {
        return project.post('/joinProject', data)  
    },
    joinedProjects: data => {
        return project.post('/joinedProjects', data)  
    },
    createComment: data => {
        return project.post("/comment", data)
    }
}

export default DataService