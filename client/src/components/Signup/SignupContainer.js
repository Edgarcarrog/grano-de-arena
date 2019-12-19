import React from 'react'
import styled from 'styled-components'
import { Form, Input, Icon, Button } from 'antd'
import { MyContext } from '../../context'
const StyledHome = styled.div`  
  font-size: 50px;
  margin: 0;
  padding: 0;
  text-align: center;
  .box{
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgDv4poNJozGAYht4T07SgcReMzK59Uc-gBtk2sewPcml87Wgc");
    background-size: 100% 100%;
    height: 300px;
    margin: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  }
`
export default function SignupContainer(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <StyledHome>
        <div className="box">
        <Form
          onSubmit={e => {
            context.handleSignup(e)
            props.history.push('/login')
          }}
        >
          <Form.Item>
            <Input
              name="name"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              type="text"
              value={context.formSignup.name}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="email"
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
              type="email"
              value={context.formSignup.email}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="password"
              type="password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
              value={context.formSignup.password}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Signup
            </Button>
          </Form.Item>
        </Form>
        </div>
          </StyledHome>
      )}
    </MyContext.Consumer>
  )
}