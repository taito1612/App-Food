import React, { Component } from "react";
import ProducesService from "../services/produce.service";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/home.css";

import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import {
  FileOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import { Row, Col } from "antd";

import { Card } from "antd";
import { Layout, Menu, Breadcrumb } from "antd";
import { Button } from "antd";

// import Login from "./../components/login.component";
// import Register from "../components/register.component";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produceds: [],
    };
  }

  

  componentDidMount() {
    ProducesService.getCurrentProduces().then((res) => {
      this.setState({ produceds: res.data });
    });
  }

  render() {
    const { collapsed } = this.state;
    return (
      <Router>
        <div>
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={this.onCollapse}
            >
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                  <Menu.Item key="3">Thông tin tài khoản</Menu.Item>
                  <Menu.Item key="4">Tình trạng đơn hàng</Menu.Item>
                  <Menu.Item key="5">Đăng xuất</Menu.Item>
                </SubMenu>

                <SubMenu icon={<UserOutlined />} title="Admin">
                  <Menu.Item key="3">
                    <Link to={"/admin"}>Admin</Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu
                  key="sub2"
                  icon={<MenuUnfoldOutlined />}
                  title="Category"
                >
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />}>
                  Files
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Content style={{ margin: "0 0px" }}>
                <Breadcrumb
                  className="Breadcrumb-Header"
                  style={{ margin: "16px 9px" }}
                >
                  <div className="Input-Search">
                    <input
                      className="Input-Search-text"
                      placeholder="Nhập vào nội dung muốn tìm kiếm"
                    ></input>
                    <Button className="btn-Search">
                      <SearchOutlined className="btn-search-icon" />
                    </Button>
                  </div>

                  <Breadcrumb.Item className="btn-controlles">
                    {/* <div>
                      <li className="nav-item">
                        <Link to={"/home"}>{currentUser.username}</Link>
                      </li>
                      <li className="nav-item">
                        <a href="/login" onClick={this.logOut}>
                          Đăng xuất
                        </a>
                      </li>
                    </div> */}
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background">
                  <Row className="rowItem">
                    {this.state.produceds.map((food) => (
                      <Col className="colums" span={4}>
                        <Card
                          className="Card-item"
                          hoverable
                          cover={<img alt="example" src={food.linkimage} />}
                        >
                          <Meta
                            title={food.namefood}
                            description={food.price}
                          />
                          <Button type="primary" block>
                            Đặt món
                          </Button>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Content>
            </Layout>
          </Layout>

          {/* <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch> */}
        </div>
      </Router>
    );
  }
}
