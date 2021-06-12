import './Login.css'
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Layout } from 'antd';
import Footer from '../../footer/Footer'
import { Register } from '../../../redux/user/UserActions';
import Fintech from '../../../assests/backgroundImages/fintech-industry.jpg'

const {Header,Content} = Layout
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };


const RegistrationForm = ({history}) => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
        return (
            <Layout >
                <Header >
                    <h2 style={{color:'whitesmoke'}}>Welcome, please enter your credentials to login.</h2>
                </Header>
                <Layout className="site-layout" >
                    <Content>
                    <Row>
                        <Col span={4}></Col>
                        <Col span={16} className="login-background">
                    <div>
                       <Row> 
                       <Col span={16} className="login-image">
                        <div>
                        <img src={Fintech} className="login-img" style={{borderRadius: '5px'}}></img>
                        </div>
                       </Col>
                       <Col span={8} className="login-side">
                       <h2>Welcome back</h2>
                        <div className="login-text">
                        
                            <Form className="form-position"
                                {...layout}
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Button type="primary" className="login-button" size='large' htmlType="submit">
                                    Login
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                        </Col>
                        </Row>
                    </div>
                    </Col>
                        <Col span={4}></Col>
                        
                    </Row>
                    
                    </Content>
                </Layout>
            </Layout>
            );
        };
export default RegistrationForm
        