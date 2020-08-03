import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class TestForm extends Component {
    constructor(props) {
        super(props);
      this.state = { 
        username: '',
        password: '',
        status:0,
      }
      
     
  }
  
  handleUsername(e) {
    //console.log(e.target.name, " : ", e.target.value);
    this.setState({ username: e.target.value });
    console.log(this.state.username);
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  onFinish = (e) => {
    e.preventDefault();
    const data = { username: this.state.username, password: this.state.password };
    axios.post("https://my-json-server.typicode.com/akilaliyanage/json-fake-api-server/event", data).then((res) => this.setState({status:res.status}));
  }
  

  render() { 
    if (this.state.status === 201) {
        return(<Redirect to="/success"></Redirect>)
      }
        return (
          <Card>
            <form onSubmit={this.onFinish.bind(this)}>
              <Form.Item
                label="Username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input name="username" onChange={this.handleUsername.bind(this)} />
              </Form.Item>

              <Form.Item
                label="Password"
              
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password name="password" onChange={this.handlePassword.bind(this)} />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </form>
          </Card>
        );
    }
}
 
export default TestForm;