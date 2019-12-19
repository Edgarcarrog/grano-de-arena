import React from "react";
import { Form, Input, Button } from 'antd'
import {MyContext} from '../../context'
const { TextArea } = Input;

export default function CommentInput(props) {
    return(
        <MyContext.Consumer>
            {context =>(
                <div className="form">

                <Form onSubmit={e=>{
                    context.createComment(e)
                    props.history.push('/profile')
                }}
                >
                    <Form.Item>
                        <label for="exampleFormControlTextarea1">Comentario</label>
                        <TextArea rows={4}
                            name="description"
                            value={context.commentForm.description}
                            onChange={e => context.handleInput(e, 'commentForm')}
                            required
                        />
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