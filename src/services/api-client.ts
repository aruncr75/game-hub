import axios from "axios";

export interface FetchResponse <T>{
    count:number;
    results:T[];
  }
  
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:"6377008e1f5040048c1a82984ec7b0df"
    }
})