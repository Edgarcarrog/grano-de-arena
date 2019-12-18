import React from "react";
import { MyContext } from '../../context'
import { Form, Modal, Button, Input, Rate } from 'antd';
import DataService from '../../services/DataService'
import AUTH_SERVICE from '../../services/AuthService'

const { TextArea } = Input;

export default class CommentInput extends React.Component {
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        commentForm: {
            comment: '',
            value: 5,
            authorId: ""
        }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({
            visible: false,
        });
    }
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }

    handleChange = (value) => {
        this.setState({commentForm: {...this.state.commentForm, value: value }});
    }

    creatComment = async e => {
        e.preventDefault()
        await DataService.creatComment()
        .createProject(this.state.projectForm)
    }

    handleInput = (e, obj) => {
        const a = this.state[obj]
        const key = e.target.name
        a[key] = e.target.value
        this.setState({ obj: a })
        console.log(this.state.commentForm)
    }

    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        const { value } = this.state.commentForm;
        
        return (

            <MyContext.Consumer>
                {context => (
                    <Form
                        onSubmit={e => {
                            this.state.commentForm.authorId = context.user._id
                            console.log(this.state.commentForm)
                            this.creatComment(e, () => {
                                this.props.history.push('/profile')
                            })
                        }}
                    >
                        <div>
                            <Button type="primary" onClick={this.showModal}>Comentar</Button>
                            <Modal title="Comentar"
                                visible={visible}
                                onOk={this.handleOk}
                                confirmLoading={confirmLoading}
                                onCancel={this.handleCancel}
                            >
                                <Form.Item>
                                    <label for="exampleFormControlTextarea1">Descripción</label>
                                    <TextArea rows={4}
                                        name="comment"
                                        value={this.state.commentForm.comment}
                                        onChange={e => this.handleInput(e, 'commentForm')}
                                        required
                                    />
                                </Form.Item>
                                <span>
                                    <Rate onChange={this.handleChange} value={value} />
                                    {value && <span className="ant-rate-text">{value} stars</span>}
                                </span>
                            </Modal>
                        </div>
                    </Form>
                )}
            </MyContext.Consumer>
        );
    }
}
