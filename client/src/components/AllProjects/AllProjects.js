import React from "react";
import { Card } from 'antd'
//import { Form, Input, Button, Select } from 'antd'
//import DataService from '../../services/DataService';
import 'bootstrap/dist/css/bootstrap.css'
//import DataService from '../../services/DataService'
import { MyContext } from '../../context'
const { Meta } = Card
//import { FormAddProject }  from "../../components/styled-components/components"

export default function AllProjects(props) {
    return (
        <MyContext.Consumer>
            {context => (
                <div className="form">
                    <h1>Proyectos disponibles</h1>
                    {context.allProjects.map((project, i) => {
                     return(
                     <Card
                     hoverable
                     style={{ width: 240 }}
                     cover={<img alt="photoProfile" src={project.photoURL} key={i}/>}
                 >
                     <Meta title={project.title} description={project.description} key={i}/>
                 </Card>
                     ) 
                    })}
                </div>
            )}
        </MyContext.Consumer>
    )
}