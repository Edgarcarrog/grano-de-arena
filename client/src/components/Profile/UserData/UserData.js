import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import { MyContext } from '../../../context'
const { Meta } = Card

export default function UserData(props) {
    //console.log(props)
    return (
        <MyContext.Consumer>
            {context => (
                <div className="col">
                    <h2>Perfil</h2>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="photoProfile" src={context.user.photoURL} />}
                    >
                        <Meta title={context.user.name}/>
                        <div className="boton-crear">
                            <Link to={"/createProject"}>
                                <button type="submit" className="btn btn-primary">Iniciar un proyecto</button>
                            </Link>
                        </div>
                    </Card>
                </div>
            )}
        </MyContext.Consumer>
    )
}