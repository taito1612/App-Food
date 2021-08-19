import React, { Component } from "react";
import ProducesService from "../services/produce.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/StyleProduced.css'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produceds: []
    };
  }

  componentDidMount() {
    ProducesService.getCurrentProduces().then((res) => {
      this.setState({produceds: res.data});
    }
    );
  }

  render() {
    return (
      <div className="list-item">
        {
          this.state.produceds.map(
            food =>
            <div className="item">
              <div>
                <img src={food.linkimage} alt="food"/>
                <h5 className="list-Title-food">{food.namefood}</h5>
                <div className="list-price">Giá: {food.price} đ</div>
                <button className="list-btn">Đặt món</button>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}
