import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { MyContext } from '../../context'
import UserData from './UserData/UserData'
import GetProjects from '../GetProjects/GetProjects'

export default function Profile(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <div className="container">
          <div className="row">
            <UserData/>
            <div className="col">
            <GetProjects/>
            </div>
            <div className="col">
              
            </div>
          </div>
        </div>
      )}
    </MyContext.Consumer>
  )
}