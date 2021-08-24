import axios from "axios";

const API_URL = "http://localhost:8080/app/category";

class Category {
  getCurrentProduces() {
    return axios.get(API_URL);
  }
}

export default new Category();
