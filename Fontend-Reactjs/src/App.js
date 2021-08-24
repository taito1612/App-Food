import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import "./style/StyleLogin.css";

import { Switch, Route, Link } from "react-router-dom";

import { Layout, Button } from "antd";

import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./style/index.css";

import AuthService from "./services/auth.service";

import EventBus from "./common/EventBus";
import Home from "./components/home.component";

import Login from "./components/login.component.jsx";
import Register from "./components/register.component";

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

    console.log(user);

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
    const { currentUser } = this.state;
    console.log(currentUser);
    const { Header, Content } = Layout;
    return (
      <div>
        <Header className="Header-app">
          <div className="Header-item">Icon</div>

          <div>
            <div className="Input-Search">
              <input
                className="Input-Search-text"
                placeholder="Nhập vào nội dung muốn tìm kiếm"
              ></input>
              <Button className="btn-Search">
                <SearchOutlined className="btn-search-icon" />
              </Button>
            </div>
          </div>
          {currentUser ? (
            <div className="Header-item">
              <li>
                <Link className="item-btn" to="/login">
                  {currentUser !== undefined
                    ? currentUser.username
                    : "Đăng nhập"}
                </Link>
              </li>

              <li>
                <Link className="item-btn" to="/login" onClick={this.logOut}>
                  Đăng xuất
                </Link>
              </li>
            </div>
          ) : (
            <div className="Header-item">
              <li>
                <Link className="item-btn" to="/login">
                  Đăng nhập
                </Link>
              </li>

              <li>
                <Link className="item-btn" to={"/register"}>
                  Đăng ký
                </Link>
              </li>
            </div>
          )}
        </Header>
        <Content className="Content-app">
          <Switch>
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/register"} component={Register} />
            <Route exact path={[["/home","/"]]} component={Home}/>
          </Switch>
        </Content>
      </div>
    );
  }
}

export default App;
