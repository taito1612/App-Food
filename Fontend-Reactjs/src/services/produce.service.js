import axios from "axios";

const API_URL = "http://localhost:8080/app/produced";

class produce {
  getCurrentProduces() {
    return axios.get(API_URL);
  }
}

export default new produce();
