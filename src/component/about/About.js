import React, {Component} from 'react';
import Nav from "../nav/Nav";

import { Form, Icon, Input, Button, Checkbox, Card, Row, Col} from 'antd';
import 'antd/dist/antd.css';

import "../styles/user.css";

const FormItem = Form.Item;

class About extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
            <Nav></Nav>
                <div className="login-wrapper">
                    <Row type="flex" justify="center" align="middle">

                        <Col span={12} >
                            <Card
                                style={{ width: 300 }}>
                                <Form onSubmit={this.handleSubmit} className="login-form">
                                    <FormItem>
                                        {getFieldDecorator('userName', {
                                            rules: [{ required: true, message: 'Please input your username!' }],
                                        })(
                                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: 'Please input your Password!' }],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('remember', {
                                            valuePropName: 'checked',
                                            initialValue: true,
                                        })(
                                            <Checkbox style={{float: "left"}}>Remember me</Checkbox>
                                        )}
                                        <a className="login-form-forgot" href="" style={{float: "fight"}}>Forgot password</a>
                                        <p>
                                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: "100%"}}>
                                                Log in
                                            </Button>
                                        </p>

                                        Or <a href="">register now!</a>
                                    </FormItem>
                                </Form>
                            </Card>

                        </Col>
                    </Row>

                </div>
            </div>
        );
    }
    // render() {
    //     return (
    //         <div>
    //             <Nav></Nav>
    //             <h1>About</h1>
    //         </div>
    //     );
    // }
}

export default About = Form.create()(About);