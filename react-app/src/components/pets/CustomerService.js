import data from './Customer-Large.json';
export class CustomerService {
   
    
    getCustomersLarge() {
        const result = [];
        data.map((datas) => {
            result.push(datas)
        });
        return result;
       
    }
  
    getCustomers(params) {
        debugger
        const queryParams = params ? Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&') : '';
        debugger
        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then(res => res.json())
    }
}