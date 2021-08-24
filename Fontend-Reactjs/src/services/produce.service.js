import axios from "axios";

const API_URL = "http://localhost:8080/app/";

class produce {
  getCurrentProduces() {
    return axios.get(API_URL + "produced");
  }

  getFoodByCategoryServer(id){
    return axios.get(`${API_URL}producedById?id=${id}`);
  }
}

export default new produce();
