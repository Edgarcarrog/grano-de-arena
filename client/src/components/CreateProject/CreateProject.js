import React from "react";
import { Form, Input, Button, Select } from 'antd'
import 'bootstrap/dist/css/bootstrap.css'
//import DataService from '../../services/DataService'
import {MyContext} from '../../context'
const { TextArea } = Input;
const { Option } = Select;


//import { FormAddProject }  from "../../components/styled-components/components"

export default function CreateProject(props) {
    return(
        <MyContext.Consumer>
            {context =>(
                <div className="form">

                <Form onSubmit={e=>{
                    context.handleProject(e)
                    props.history.push('/profile')
                }}
                >
                    <Form.Item>
                        <label for="exampleFormControlTextarea1">Nombre del Proyecto</label>
                        <Input
                            name="title"
                            placeholder="Proyecto"
                            type="text"
                            value={context.projectForm.title}
                            onChange={e => context.handleInput(e, 'projectForm')}
                            required
                        />
                    </Form.Item>

                    <Form.Item>
                        <label for="exampleFormControlTextarea1">Descripción</label>
                        <TextArea rows={4}
                            name="description"
                            value={context.projectForm.description}
                            onChange={e => context.handleInput(e, 'projectForm')}
                            required
                        />
                    </Form.Item>

                    <Form.Item label="Categoría" hasFeedback validateStatus="Success">
                        <Select
                            defaultValue="Campaña Ecológica"
                            name="category"
                            value={context.projectForm.category}
                            //onChange={context.handleChange}
                            onChange={e => context.handleSelect(e, 'projectForm')}
                        >
                            <Option name="category" value="Campaña Ecológica" onChange={e => context.handleSelect(e, 'projectForm')}>Campaña Ecológica</Option>
                            <Option name="category" value="Donación">Donación</Option>
                            <Option value="Reciclaje">Reciclaje</Option>
                            <Option value="Venta de Artículos">Venta de Artículos</Option>
                            <Option value="Energías Limpias">Energías Limpias</Option>
                            <Option value="Rescate Animal">Rescate Animal</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Crear
                  </Button>
                    </Form.Item>
                </Form>
            </div>
            )}

        </MyContext.Consumer>

    )

}


