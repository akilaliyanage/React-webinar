import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import TestForm from "./TestForm";



const { Header, Content, Footer } = Layout;


class Template extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content">
                <TestForm />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        );
    }
}
 
export default Template;