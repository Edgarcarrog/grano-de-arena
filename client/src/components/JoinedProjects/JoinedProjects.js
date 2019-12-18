import React from "react";
import { Card } from 'antd'
import 'bootstrap/dist/css/bootstrap.css'
import { MyContext } from '../../context'
const { Meta } = Card
//import { FormAddProject }  from "../../components/styled-components/components"

export default function JoinedProjects(props) {
    return (
        <MyContext.Consumer>
            {context => (
                <div className="form">
                    <h1>Proyectos donde participo</h1>
                    {context.myJoinedProjects.map((project, i) => {
                        return (
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="photoProfile" src={project.photoURL} key={i} />}
                            >
                                <Meta title={project.title} description={project.description} key={i} />
                            </Card>
                        )
                    })}
                </div>
            )}
        </MyContext.Consumer>
    )
}