import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Layout } from 'antd';
import Footer from '../../footer/Footer'
import { Register } from '../../../redux/user/UserActions';

const {Header,Content} = Layout
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegistrationForm = ({history}) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const {loading, error, userData} = useSelector(state => state.userRegister);
    
    const handleSubmit = (values) => {
        // creating form data object reference
        let  formData = new FormData;
        formData.append('name',values.name);
        formData.append('email',values.email);
        formData.append('password',values.password);
        formData.append('phone',values.phone);

        // dispatch for registration
        dispatch(Register(formData));
        
    };

    useEffect(() => {
        // redirect to website page after successfull registration
        if (userData) {
            history.push("/website");
        }
    }, [history,userData]);
    
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
        <Select
        style={{
            width: 70,
        }}
        >
        <Option value="91">+91</Option>
        {/* we can pass multiple option here as option */}
        </Select>
        </Form.Item>
        );

        return (
            <Layout style={{ minHeight: '100vh' }} >
                <Header >
                    <h2 style={{color:'whitesmoke'}}>User Registration</h2>
                </Header>
                <Layout className="site-layout" >
                    <Content style={{ margin: '24px 16px 0' }} >
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360, background:'white' }}>
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={handleSubmit}
                            initialValues={{
                                prefix: '91',
                            }}
                            scrollToFirstError
                            >
                            <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                            >
                            <Input />
                            </Form.Item>
                            
                            <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                            >
                            <Input.Password />
                            </Form.Item>
                            
                            <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        
                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                            ]}
                            >
                            <Input.Password />
                            </Form.Item>
                            
                            <Form.Item
                            name="name"
                            label="Name"
                            tooltip="What do you want others to call you?"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Name!',
                                    whitespace: true,
                                },
                            ]}
                            >
                            <Input />
                            </Form.Item>
                            
                            <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                            >
                            <Input
                            addonBefore={prefixSelector}
                            style={{
                                width: '100%',
                            }}
                            />
                            </Form.Item>
                            
                            <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                },
                            ]}
                            {...tailFormItemLayout}
                            >
                            <Checkbox>
                            I have read the <a href="">agreement</a>
                            </Checkbox>
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                            <Button type='primary' htmlType='submit' loading={loading}>
                            Register
                            </Button>
                            </Form.Item>
                        </Form>
                    </div>  
                    
                    </Content>
                </Layout>
                <Footer />
            </Layout>
            );
        };
export default RegistrationForm
        