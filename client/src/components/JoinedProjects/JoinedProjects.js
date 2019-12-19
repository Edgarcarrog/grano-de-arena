import React from "react";
import { Card } from 'antd'
import styled from 'styled-components'
import { MyContext } from '../../context'
import { Link } from 'react-router-dom'
const { Meta } = Card
const StyledProjects = styled.nav`
.form{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
`

export default function JoinedProjects(props) {
    return (
        <MyContext.Consumer>
            {context => (
                <StyledProjects>
                <div className="form">
                    <h2>Participando en:</h2>
                    {context.myJoinedProjects.map((project, i) => {
                        return (
                            <Card
                                hoverable
                                style={{ width: 240, margin: 20 }}
                                cover={<img alt="photoProfile" src={project.photoURL} key={i} />}
                            >
                                <Meta title={project.title} description={project.description} key={i} />
                                <Link to={"/commentInput"}>
                                <button type="submit" className="btn btn-primary">Comentar</button>
                            </Link>
                            </Card>
                        )
                    })}
                </div>
                </StyledProjects>
            )}
        </MyContext.Consumer>
    )
}