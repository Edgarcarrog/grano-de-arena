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
    commentForm:{
      description: "",
      rate: 5,
      authorId: ""
    },
    user: {},
    projects: [],
    myJoinedProjects: [],
    allProjects: []
  }

  componentDidMount() {
    if (document.cookie) {
      AUTH_SERVICE.getUser()
        .then(({ data }) => {
          this.setState({ 
            loggedUser: true, 
            user: data.user,
            projectForm:{...this.state.projectForm, authorId: data.user._id},
            commentForm:{...this.state.commentForm, authorId: data.user._id} 
          })
          this.viewProjects().then(()=>{
          })
          this.allProjects().then(()=>{
          })
          this.joinedProjects().then(()=>{
          })
        })
        .catch(err => console.log(err))
    }
  }

  handleProject = async e => {
    e.preventDefault()
    await DataService.createProject(this.state.projectForm)
    this.setState({ projectForm: { title: "", description: "", category: "Campaña Ecológica"}})
    Swal.fire('Proyecto creado')
    this.viewProjects().then(()=>{
    })
  }

  createComment = async e => {
    e.preventDefault()
    await DataService.createComment(this.state.commentForm)
    this.setState({ commentForm: { description: ""}})
    Swal.fire('Comentario creado')
    this.viewProjects().then(()=>{
    })
  }

  viewProjects = async () => {
    const {data: {projects}} = await DataService.getProject(this.state.user)
    this.setState({...this.state, projects})
    this.state.allProjects = []
  }

  allProjects = async () => {
    const {data: {projects}} = await DataService.allProjects(this.state.user)
    const allProjects = projects
    console.log(allProjects)
    this.setState({...this.state, allProjects})
  }

  joinedProjects = async () => {
    const {data: {projects}} = await DataService.joinedProjects(this.state.user)
    const myJoinedProjects = projects
    console.log(myJoinedProjects)
    this.setState({...this.state, myJoinedProjects})
  }

  joinProject = async (e, id) => {
    e.preventDefault()
    await DataService.joinProject({id})
    this.joinedProjects().then(()=>{
    })
    Swal.fire('Te uniste al proyecto')
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
        this.viewProjects().then(()=>{
        })
        this.allProjects().then(()=>{
        })
        this.joinedProjects().then(()=>{
        })
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
          allProjects: this.state.allProjects,
          myJoinedProjects: this.state.myJoinedProjects,
          projectForm: this.state.projectForm,
          projects: this.state.projects,
          user: this.state.user,
          handleInput: this.handleInput,
          handleSignup: this.handleSignup,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          handleSelect: this.handleSelect,
          handleProject: this.handleProject,
          viewProjects: this.viewProjects,
          joinProject: this.joinProject,
          joinedProjects: this.joinedProjects,
          createComment: this.createComment,
          commentForm: this.state.commentForm
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider