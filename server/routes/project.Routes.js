const express = require('express');
const router  = express.Router();
const passport = require('passport');
const catchErrors = require('../middlewares/catchErrors')
//const uploadPhoto = require("../config/cloudinary");


const  {
  createProject,
  //getProjects,
  //projectDetail
} = require ('../controllers/data.controller')

const { isLoggedIn, isNotLoggedIn, isConnected} = require('../middlewares/auth.middlewares');

router.post('/project',isLoggedIn, catchErrors(createProject));



//lista de proyectos
//router.get('/project', isLoggedIn, catchErrors(getProjects))

//detalle de proyectos 
//router.get("/project/:id", isLoggedIn ,catchErrors(projectDetail));

module.exports = router;