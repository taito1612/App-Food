import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import "./style/StyleLogin.css";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./style/index.css";
import { Card } from "antd";
import ProducesService from "./services/produce.service";
import { Layout, Menu, Breadcrumb } from "antd";
import { Button } from "antd";

import AuthService from "./services/auth.service";

import EventBus from "./common/EventBus";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      produceds: [],
      collapsed: false,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    ProducesService.getCurrentProduces().then((res) => {
      this.setState({ produceds: res.data });
    });

    console.log(this.state.produceds);

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { collapsed } = this.state;

    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <SubMenu key="sub1" icon={<UserOutlined/>} title="User">
                <Menu.Item key="3">Thông tin tài khoản</Menu.Item>
                <Menu.Item key="4">Tình trạng đơn hàng</Menu.Item>
                <Menu.Item key="5">Đăng xuất</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<MenuUnfoldOutlined />} title="Category">
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
              <Breadcrumb style={{ margin: "16px 9px" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Row className="rowItem">
                  {this.state.produceds.map(
                    food =>
                    <Col className="colums" span={4}>
                      <Card
                        className="Card-item"
                        hoverable
                        cover={
                          <img
                            alt="example"
                            src= {food.linkimage}
                          />
                        }
                      >
                        <Meta title={food.namefood} description={food.price}/>
                        <Button type="primary" block>
                          Đặt món
                        </Button>
                      </Card>
                    </Col>
                  )}
                </Row>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
