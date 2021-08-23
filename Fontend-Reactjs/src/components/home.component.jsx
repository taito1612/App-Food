import React, { Component } from "react";
import ProducesService from "../services/produce.service";
import "bootstrap/dist/css/bootstrap.min.css";

import "antd/dist/antd.css";
// import { Link } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

import {} from "@ant-design/icons";

import { Row, Col } from "antd";

import { Card } from "antd";
import { Button } from "antd";

// import Login from "./../components/login.component";
// import Register from "../components/register.component";

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
    return (
      <div className="site-layout-background">

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
      </div>
    );
  }
}
