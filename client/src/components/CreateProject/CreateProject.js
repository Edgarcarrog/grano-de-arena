import React, { Component } from "react";
import { Form, Input, Icon, Button, Select } from 'antd'
import 'bootstrap/dist/css/bootstrap.css'
import DataService from '../../services/DataService'
//import { MyContext } from '../../context'
const { TextArea } = Input;
const { Option } = Select;

//import { FormAddProject }  from "../../components/styled-components/components"

export default class CreateProject extends Component {
    state = {
        form: {
            title: "",
            description: "",
            category: "Reciclaje"
        }
    };

    inputChange = ({ target: { value, name } }) => {
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        });
        console.log(this.state.form.title +
            this.state.form.description + 'helloouu')
    };


    addProject = async e => {
        e.preventDefault();
        const { form } = this.state;
        //const formData = new FormData()

        const project = await DataService.createProject(form)

        console.log(project);
        alert("Created!");
        this.setState({
            form: {
                title: "",
                description: "",
                category: ""
            }
        })
        //console.log(this.state + ' hola')
    };


    render() {
        return (
            <>

                <Form onSubmit={this.addProject}>
                    <Form.Item>
                        <label for="exampleFormControlTextarea1">Nombre del Proyecto</label>
                        <Input
                            name="title"
                            placeholder="Proyecto"
                            type="text"
                            value={this.state.form.title}
                            onChange={this.inputChange}
                            required
                        />
                    </Form.Item>

                    <Form.Item>
                        <label for="exampleFormControlTextarea1">Descripción</label>
                        <TextArea rows={4}
                            name="description"
                            value={this.state.form.description}
                            onChange={this.inputChange}
                        />
                    </Form.Item>


                    <Form.Item label="Categoría" hasFeedback validateStatus="Success">
                        <Select
                            defaultValue="Campaña Ecológica"
                            name="category"
                            //onChange={this.inputChange}
                        >
                            <Option
                                value="Campaña Ecológica"
                            >Campaña Ecológica</Option>
                            <Option
                                value="Donación"

                            >Donación</Option>
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
            </>
        )
    }



}


