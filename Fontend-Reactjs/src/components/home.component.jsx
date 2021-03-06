import React, { Component } from "react";
import ProducesService from "../services/produce.service";
import CategoryService from "../services/Category.service";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "antd/dist/antd.css";
import "../style/home.css";

import {} from "@ant-design/icons";

import { Row, Col } from "antd";

import { Card } from "antd";
import { Button } from "antd";

import { Layout, Menu } from "antd";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const { Meta } = Card;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produceds: [],
      category: [],
      ChildCategoryFood: [],
    };
    this.getFoodByCategory = this.getFoodByCategory.bind(this);
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  componentDidMount() {
    ProducesService.getCurrentProduces().then((res) => {
      this.setState({ produceds: res.data });
    });

    CategoryService.getCurrentProduces().then((res) => {
      this.setState({ category: res.data });
    });
  }

  getFoodByCategory(id) {
    console.log(id);
    ProducesService.getFoodByCategoryServer(id).then((res) => {
      this.setState({ ChildCategoryFood: res.data });
      console.log(this.state.ChildCategoryFood.length);
    });
  }

  getAllProduced() {
      this.setState({ ChildCategoryFood: [] });
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
              <SubMenu key="sub1" icon={<UserOutlined />} title="Ng?????i d??ng">
                <Menu.Item key="6">Th??ng tin t??i kho???n</Menu.Item>
                <Menu.Item key="7">T??nh tr???ng ????n h??ng</Menu.Item>
                <Menu.Item key="8">????ng xu???t</Menu.Item>
              </SubMenu>

              <SubMenu key="sub2" icon={<TeamOutlined />} title="Menu">
              <Menu.Item onClick= { () => this.getAllProduced()}>Hi???n th??? to??n b??? m??n ??n</Menu.Item>
                {this.state.category.map((cate) => (
                  <Menu.Item key={cate.id} onClick= { () => this.getFoodByCategory(cate.id)}>{cate.namecategory}</Menu.Item>
                ))}
              </SubMenu>
              <SubMenu key="sub3" icon={<TeamOutlined />} title="Admin">
                <Menu.Item key="9">Th??m m??n ??n</Menu.Item>
                <Menu.Item key="10">Th???ng k?? ????n h??ng</Menu.Item>
                <Menu.Item key="11">Th???ng k?? doanh thu</Menu.Item>
                <Menu.Item key="12">????ng xu???t</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Row className="rowItem">
              {this.state.ChildCategoryFood.length > 0
                ? this.state.ChildCategoryFood.map((food) => (
                    <Col className="colums" span={4}>
                      <Card
                        className="Card-item"
                        hoverable
                        cover={<img alt="example" src={food.linkimage} />}
                      >
                        <Meta title={food.namefood} description={food.price} />
                        <Button  block>
                          ?????t m??n
                        </Button>
                      </Card>
                    </Col>
                  ))
                : this.state.produceds.map((food) => (
                    <Col className="colums" span={4}>
                      <Card
                        className="Card-item"
                        hoverable
                        cover={<img alt="example" src={food.linkimage} />}
                      >
                        <Meta title={food.namefood} description={food.price} />
                        <Button  block>
                          ?????t m??n
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
