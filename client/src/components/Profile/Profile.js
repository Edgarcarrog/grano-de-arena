import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Card, Button } from 'antd'
import { MyContext } from '../../context'
const { Meta } = Card

export default function Profile(props) {
  console.log(props)
  return (
    <MyContext.Consumer>
      {context => (
        <div className="gutter-example">
          <h1>Perfil</h1>
          <Row>
            <Col span={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta title={context.user.name} description="www.instagram.com" />
              </Card>
            </Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
        </div>
      )}
    </MyContext.Consumer>
  )
}