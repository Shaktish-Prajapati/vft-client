import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Layout, Card } from 'antd';
import Footer from '../../footer/Footer'
import { Register } from '../../../redux/user/UserActions';

import loginSideImage from '../../../assests/backgroundImages/login_side.jpg'
import { GoogleLogin } from 'react-google-login'
import './Login.css'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const successGoogle = async(res)=>{
        const result = res?.profileObj;
        const token = res?.tokenId;
        console.log(token);
    }
    const failGoogle = async(err)=>{
        console.log(err);
        console.log('goole fail');
    }

    return (
        <Layout key="login">
            <Card /* title="Login..." */ className='login-card' >
                <h3>Login...</h3>
                <Row>
                    <Col span={12} className='login-image-col'>
                        <img src={loginSideImage} width='100%' height='100%' id='login-side-image' />
                    </Col>
                    <Col span={12}>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <GoogleLogin
                                    clientId="604732994949-l1nhb6qluvcoeo7svmdl7g1f1r1ng371.apps.googleusercontent.com"
                                    // render={renderProps => (
                                    //     <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login with Google</button>
                                    // )}
                                    buttonText="Login with Google"
                                    onSuccess={successGoogle}
                                    onFailure={failGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Card>
        </Layout>
    );
};

export default Login;