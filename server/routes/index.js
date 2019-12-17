const router = require('express').Router()
const passport = require('passport')
const {
  signup,
  login,
  logout,
  getUser
} = require('../controllers/auth.controller')

const {
  createProject,
  getProjects,
  allProjects
} = require('../controllers/data.controller')

router.post('/signup', signup)
router.post('/login', passport.authenticate('local'), login)
router.get('/profile', getUser)
router.get('/logout', logout)

router.post('/project', createProject)
router.post('/myProjects', getProjects)
router.post('/allProjects', allProjects)
//router.get('/project/:id', getMyProjects)

module.exports = router