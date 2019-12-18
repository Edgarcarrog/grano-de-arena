import React from "react";
import { Card } from 'antd'
import 'bootstrap/dist/css/bootstrap.css'
import { MyContext } from '../../context'
import { Link } from 'react-router-dom'
import CommentInput from "../CommentInput/CommentInput";
const { Meta } = Card
//import { FormAddProject }  from "../../components/styled-components/components"

export default function JoinedProjects(props) {
    return (
        <MyContext.Consumer>
            {context => (
                <div className="form">
                    <h2>Proyectos donde participo</h2>
                    {context.myJoinedProjects.map((project, i) => {
                        return (
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="photoProfile" src={project.photoURL} key={i} />}
                            >
                                <Meta title={project.title} description={project.description} key={i} />
                                <CommentInput/>
                            </Card>
                        )
                    })}
                </div>
            )}
        </MyContext.Consumer>
    )
}