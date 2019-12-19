import React from 'react'
import styled from 'styled-components'
import { MyContext } from '../../context'
import UserData from './UserData/UserData'
import GetProjects from '../GetProjects/GetProjects'
import JoinedProjects from '../JoinedProjects/JoinedProjects'
const StyledHome = styled.div`  
  font-size: 50px;
  margin: 0;
  padding: 0;
  text-align: center;
  .container{
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyZEXU8cWwwdgj4YXEVe1Z1GhezjL4OJg01r0lO4u4wa1nHFg-");
    background-repeat: no-repeat;
    background-size: 100%;
  }
  }
`
export default function Profile(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <StyledHome>
        <div className="container">
          <div className="row">
            <UserData/>
            <div className="col">
            <GetProjects/>
            </div>
            <div className="col">
            <JoinedProjects/>
            </div>
          </div>
        </div>
        </StyledHome>
      )}
    </MyContext.Consumer>
  )
}