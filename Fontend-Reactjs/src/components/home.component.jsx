import React, { Component } from "react";
import ProducesService from "../services/produce.service";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "antd/dist/antd.css";
import "../style/home.css";

import {} from "@ant-design/icons";

import { Row, Col } from "antd";

import { Card } from "antd";
import { Button } from "antd";

import { Layout, Menu } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const { Meta } = Card;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produceds: [],
    };
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  componentDidMount() {
    ProducesService.getCurrentProduces().then((res) => {
      this.setState({ produceds: res.data });
    });
  }

  render() {
    const { collapsed } = this.state;
    return (
      <div className="site-layout-background">
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="1">Tom</Menu.Item>
                <Menu.Item key="2">Bill</Menu.Item>
                <Menu.Item key="3">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="4">Team 1</Menu.Item>
                <Menu.Item key="5">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="6" icon={<FileOutlined />}>
                Files
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Row className="rowItem">
              {this.state.produceds.map((food) => (
                <Col className="colums" span={4}>
                  <Card
                    className="Card-item"
                    hoverable
                    cover={<img alt="example" src={food.linkimage} />}
                  >
                    <Meta title={food.namefood} description={food.price} />
                    <Button type="primary" block>
                      Đặt món
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}
