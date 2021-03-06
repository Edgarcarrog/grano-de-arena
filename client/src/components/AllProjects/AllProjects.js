import React from "react";
import { Form, Card, Button } from 'antd'
import styled from 'styled-components'
import { MyContext } from '../../context'
const { Meta } = Card
const StyledProjects = styled.nav`
.form{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
`

export default function AllProjects(props) {
    return (
        <MyContext.Consumer>
            {context => (
                <StyledProjects>
                    <h2>Proyectos disponibles</h2>
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
                                <p>Contacto: {project.authorId.email}</p>
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