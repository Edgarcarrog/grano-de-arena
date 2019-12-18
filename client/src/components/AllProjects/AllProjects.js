import React from "react";
import { Form, Card, Button } from 'antd'
import styled from 'styled-components'
//import { Form, Input, Button, Select } from 'antd'
import 'bootstrap/dist/css/bootstrap.css'
//import DataService from '../../services/DataService'
import { MyContext } from '../../context'
const { Meta } = Card
//import { FormAddProject }  from "../../components/styled-components/components"
const StyledProjects = styled.nav`
.form{
    display: flex;
    flex-wrap: wrap;
    justify-content: space around;
}
`

export default function AllProjects(props) {
    return (
        <MyContext.Consumer>
            {context => (
                <StyledProjects>
                    <h1>Proyectos disponibles</h1>
                <div className="form">
                    
                    {context.allProjects.map((project, i) => {
                        const id = project._id;
                        return (

                            <Card
                                hoverable
                                style={{ width: 250, margin: 30 }}
                                cover={<img alt="photoProfile" src={project.photoURL} key={i} />}
                            >
                                <Meta 
                                title={project.title} 
                                description={project.description}
                                key={i} />
                                <p>Organizador: {project.authorId.name}</p>
                                <div className="form">
                                    <Form onSubmit={(e) => {
                                        context.joinProject(e, id)
                                        props.history.push('/profile')
                                    }}
                                    >
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit">
                                                Unirse
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </Card>
                        )
                    })}
                </div>
                </StyledProjects>
            )}
        </MyContext.Consumer>
    )
}