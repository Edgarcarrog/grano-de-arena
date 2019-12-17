import React, { Component, createContext } from 'react'
import AUTH_SERVICE from './services/AuthService'
import DataService from './services/DataService'
import Swal from 'sweetalert2'

export const MyContext = createContext()

class MyProvider extends Component {
  state = {
    loggedUser: false,
    formSignup: {
      name: '',
      email: '',
      password: ''
    },
    loginForm: {
      email: '',
      password: ''
    },
    projectForm:{
      title: "",
      description: "",
      category: "Campaña Ecológica",
      authorId: ""
    },
    user: {},
    projects: [],
    allProjects: []
  }

  componentDidMount() {
    if (document.cookie) {
      AUTH_SERVICE.getUser()
        .then(({ data }) => {
          this.setState({ 
            loggedUser: true, 
            user: data.user,
            projectForm:{authorId: data.user._id} 
          })
          this.viewProjects().then(()=>{
          })
          this.allProjects().then(()=>{
            //console.log(this.state)
            })
            //console.log(this.state.projects)
          //Swal.fire(`Welcome back ${data.user.name} `, '', 'success')
        })
        .catch(err => console.log(err))
    }
  }

  handleProject = async e => {
    e.preventDefault()
    await DataService.createProject(this.state.projectForm)
    this.setState({ projectForm: { title: "", description: "", category: "Campaña Ecológica"}})
    Swal.fire('Proyecto creado')
  }

  viewProjects = async () => {
    const {data: {projects}} = await DataService.getProject(this.state.user)
    //console.log(projects)
    this.setState({...this.state, projects})
  }

  allProjects = async () => {
    const {data: {projects}} = await DataService.allProjects(this.state.user)
    const allProjects = projects
    //console.log(projects)
    this.setState({...this.state, allProjects})
  }

  handleInput = (e, obj) => {
    const a = this.state[obj]
    const key = e.target.name
    a[key] = e.target.value
    this.setState({ obj: a })
    //console.log(this.state.projectForm)
  }

  handleSelect = (e, obj) => {
    const a = this.state[obj]
    a["category"] = e
    this.setState({ obj: a })
    //console.log(obj)
  }


  handleSignup = async e => {
    e.preventDefault()
    const { data } = await AUTH_SERVICE.signup(this.state.formSignup)
    Swal.fire(`Welcome ${data.user.name}`, 'User created', 'success')
  }

  handleLogin = (e, cb) => {
    e.preventDefault()
    AUTH_SERVICE.login(this.state.loginForm)
      .then(({ data }) => {
        this.setState({ loggedUser: true, user: data.user })
        cb()
      })
      .catch(err => {
        Swal.fire(`Usuario o password incorrectos`, '', 'error')
      })
  }

  handleLogout = async cb => {
    await AUTH_SERVICE.logout()
    window.localStorage.clear()
    this.setState({ loggedUser: false, user: {} })
    cb()
  }

  render() {
    //console.log(this.state)
    return (
      <MyContext.Provider
        value={{
          loggedUser: this.state.loggedUser,
          formSignup: this.state.formSignup,
          loginForm: this.state.loginForm,
          handleInput: this.handleInput,
          handleSignup: this.handleSignup,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          handleSelect: this.handleSelect,
          user: this.state.user,
          handleProject: this.handleProject,
          projectForm: this.state.projectForm,
          viewProjects: this.viewProjects,
          projects: this.state.projects,
          allProjects: this.state.allProjects
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider