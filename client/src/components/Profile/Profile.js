import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { MyContext } from '../../context'
import UserData from './UserData/UserData'

export default function Profile(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <div className="container">
          <div className="row">
            <UserData/>
            <div className="col">
              2 of 2
            </div>
            <div className="col">
              3 of 3
            </div>
          </div>
        </div>
      )}
    </MyContext.Consumer>
  )
}