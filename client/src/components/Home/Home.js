
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const StyledHome = styled.div`  
  font-size: 50px;
  margin: 0;
  padding: 0;
  text-align: center;
  
  .logo{
    width: 100px;
  }
  .header{
    padding: 10px;
  }
  .subf ul{
    font-size: 28px;
  }
  .header{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .subtitle{
    width:600px;
  }
  .photo{
    width:100%;
    height: 400px;
  }
  ul{
    list-style-position: inside;
    padding-left:0;
    text-align: left;
  }
`
export default function Home() {  return (
    <StyledHome>
      <>
      <div className="header">
        <div><h2>Grano de arena</h2></div>
        <div className="subtitle"><h3>Donde puedes poner tu "granito de arena" para participar en acciones sociales</h3></div> 
        <img className="photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkGN2K9KuP4I7w5-zUG47Ef2QEoacnJ79sUOtwYi5RCHMUbUbH" alt="home"></img>
      </div>
      <br></br>
      <hr width="85%"></hr>
      <div>
      <h4>Regístrate</h4>
      <Link to={"/signup"}>
        <button type="submit" className="btn btn-primary">Resgistrarse</button>
      </Link>
      <h4>Inicia Sesión</h4>
      <Link to={"/login"}>
        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
      </Link>
      </div>
      </>
    </StyledHome>
  )
}