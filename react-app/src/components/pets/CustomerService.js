import data from './Customer-Large.json';

import axios from 'axios';
export class CustomerService {
   
    
    async getCustomersLarge() {
        const result = [];
        await axios.get("http://localhost:8080/dashboard/securities").then(
            res => {
                res.data.map((datas) => {
                    result.push(datas);
                });
                console.log("result", result);
            } 
        )
        return result;
       
    }
  
    getCustomers(params) {
        debugger
        const queryParams = params ? Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&') : '';
        debugger
        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then(res => res.json())
    }
}