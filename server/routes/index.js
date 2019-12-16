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
  getProjects
} = require('../controllers/data.controller')

router.post('/signup', signup)
router.post('/login', passport.authenticate('local'), login)
router.get('/profile', getUser)
router.get('/logout', logout)

router.post('/project', createProject)
router.get('/project', getProjects)

module.exports = router