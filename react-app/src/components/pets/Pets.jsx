
// import React, { useState, useEffect } from 'react';
// import { classNames } from 'primereact/utils';
// import { FilterMatchMode, FilterOperator } from 'primereact/api';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { InputText } from 'primereact/inputtext';
// import { Dropdown } from 'primereact/dropdown';
// import { InputNumber } from 'primereact/inputnumber';
// import { Button } from 'primereact/button';
// import { ProgressBar } from 'primereact/progressbar';
// import { Calendar } from 'primereact/calendar';
// import { MultiSelect } from 'primereact/multiselect';
// import { Slider } from 'primereact/slider';
// import { TriStateCheckbox } from 'primereact/tristatecheckbox';
// import { CustomerService } from './CustomerService';
// import './DataTableDemo.css';
// import 'primeicons/primeicons.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/primereact.css';

// export const Pets = () => {
//     const [customers1, setCustomers1] = useState(null);
//     // const [customers2, setCustomers2] = useState(null);
//     const [filters1, setFilters1] = useState(null);
//     const [filters2, setFilters2] = useState(null);
//     const [globalFilterValue1, setGlobalFilterValue1] = useState('');
//     const [globalFilterValue2, setGlobalFilterValue2] = useState('');
//     const [loading1, setLoading1] = useState(true);
//     // const [loading2, setLoading2] = useState(true);
//     const representatives = [
//         { name: "Amy Elsner", image: 'amyelsner.png' },
//         { name: "Anna Fali", image: 'annafali.png' },
//         { name: "Asiya Javayant", image: 'asiyajavayant.png' },
//         { name: "Bernardo Dominic", image: 'bernardodominic.png' },
//         { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
//         { name: "Ioni Bowcher", image: 'ionibowcher.png' },
//         { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
//         { name: "Onyama Limba", image: 'onyamalimba.png' },
//         { name: "Stephen Shaw", image: 'stephenshaw.png' },
//         { name: "XuXue Feng", image: 'xuxuefeng.png' }
//     ];

//     const statuses = [
//         'Treasury', 'Savings', 'Agency', 'Municipal', 'Corporate'
//     ];

//     const customerService = new CustomerService();

//     useEffect(async () => {

//         debugger
//         let data1 = await customerService.getCustomersLarge();
//         setCustomers1(getCustomers(data1)); setLoading1(false);
//         initFilters1();

    
//     }, []); // eslint-disable-line react-hooks/exhaustive-deps


//     const getCustomers = (data1) => {
//         debugger
//         return [...data1 || []].map(d => {
//             d.date = new Date(d.date);
//             return d;
//         });
//     }
//     const formatDate = (value) => {
//         return value.toLocaleDateString('en-US', {
//             day: '2-digit',
//             month: '2-digit',
//             year: 'numeric',
//         });
//     }
//     const formatCurrency = (value) => {
//         return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
//     }
//     const clearFilter1 = () => {
//         initFilters1();
//     }
   
//     const onGlobalFilterChange1 = (e) => {
//         const value = e.target.value;
//         let _filters1 = { ...filters1 };
//         _filters1['global'].value = value;

//         setFilters1(_filters1);
//         setGlobalFilterValue1(value);
//     }

//     const onGlobalFilterChange2 = (e) => {
//         debugger
//         const value = e.target.value;
//         let _filters2 = { ...filters2 };
//         _filters2['global'].value = value;

//         setFilters2(_filters2);
//         setGlobalFilterValue2(value);
//     }

//     const initFilters1 = () => {
//         setFilters1({
//             'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
//             'ID': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
//             'issuer': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
//             'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
//             'representative': { value: null, matchMode: FilterMatchMode.IN },
//             'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
//             'fvalue': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
//             'coupon': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
//             'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
//             'activity': { value: null, matchMode: FilterMatchMode.BETWEEN },
//             'verified': { value: null, matchMode: FilterMatchMode.EQUALS }
//         });
//         setGlobalFilterValue1('');
//     }
    

//     const renderHeader1 = () => {
//         return (
//             <div className="flex justify-content-between">
//                 <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={clearFilter1} />
//                 <span className="p-input-icon-left">
//                     <i className="pi pi-search" />
//                     <InputText value={globalFilterValue1} onChange={onGlobalFilterChange1} placeholder="Keyword Search" />
//                 </span>
//             </div>
//         )
//     }


//     const representativeBodyTemplate = (rowData) => {
//         const representative = rowData.issuer;
//         return (
//             <React.Fragment>
//                 <img alt={representative.name} src={`https://www.primefaces.org/primereact/images/avatar/${representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
//                 <span className="image-text">{representative.name}</span>
//             </React.Fragment>
//         );
//     }
//     const representativeFilterTemplate = (options) => {
//         return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
//     }
//     const representativesItemTemplate = (option) => {
//         return (
//             <div className="p-multiselect-representative-option">
//                 <img alt={option.name} src={`https://www.primefaces.org/primereact/images/avatar/${option.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
//                 <span className="image-text">{option.name}</span>
//             </div>
//         );
//     }
//     const dateBodyTemplate = (rowData) => {
//         console.log(rowData);
//         // return formatDate(rowData.maturitydate);
//         return rowData.maturitydate;
//     }
    

//     const nameBodyTemplate = (rowData) => {
//         return rowData.issuer;
//     }
//     const dateFilterTemplate = (options) => {
//         return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
//     }
//     const CouponBodyTemplate = (rowData) => {
//         return formatCurrency(rowData.coupon);
//     }

    
//     const CouponFilterTemplate = (options) => {
//         return <InputNumber value={options.value} onChange={(e) => options.filterApplyCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />
//     }

//     const IDBodyTemplate = (rowData) => {
//         return parseInt(rowData.id);
//     }

    
//     const IDFilterTemplate = (options) => {
//         return <InputNumber value={options.value} onChange={(e) => options.filterApplyCallback(e.value, options.index)} mode="decimal"/>
//     }

//     const FvalueBodyTemplate = (rowData) => {
//         return formatCurrency(rowData.facevalue);
//     }

//     const FvalueFilterTemplate = (options) => {
//         return <InputNumber value={options.value} onChange={(e) => options.filterApplyCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />
//     }
    
//     const statusBodyTemplate = (rowData) => {
//         return <span className={`customer-badge status-${rowData.type}`}>{rowData.type}</span>;
//     }
//     const statusFilterTemplate = (options) => {
//         return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
//     }
//     const statusItemTemplate = (option) => {
//         return <span className={`customer-badge status-${option}`}>{option}</span>;
//     }
    
//     const verifiedBodyTemplate = (rowData) => {
//         return <i className={classNames('pi', { 'true-icon pi-check-circle': rowData.status, 'false-icon pi-times-circle': !rowData.status })}></i>;
//     }
//     const verifiedFilterTemplate = (options) => {
//         return <TriStateCheckbox value={options.value} onChange={(e) => options.filterCallback(e.value)} />
//     }
  

//     const header1 = renderHeader1();


//     return (
//         <div className="datatable-filter-demo">
          

//           <div className="card">
               
//                 <DataTable value={customers1} paginator className="p-datatable-customers" showGridlines rows={10} style={{width:'1650px', margin:'20px'}}
//                     dataKey="id" filters={filters1} filterDisplay="menu" loading={loading1} responsiveLayout="scroll"
//                     globalFilterFields={['ID','issuer', 'country.name', 'representative.name', 'balance', 'status','verified', 'coupon','fvalue']} header={header1} emptyMessage="No customers found.">
//                     <Column header="ID" filterField="ID" dataType="numeric" style={{ minWidth: '10rem' }} body={IDBodyTemplate} filter filterElement={IDFilterTemplate} />
//                     <Column header="Issuer" field="issuer" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} body={nameBodyTemplate}/>
//                     <Column header="MaturityDate" filterField="date" dataType="date" style={{ minWidth: '10rem' }} body={dateBodyTemplate}
//                         filter filterElement={dateFilterTemplate} />
//                     <Column header="Coupon" filterField="coupon" dataType="numeric" style={{ minWidth: '10rem' }} body={CouponBodyTemplate} filter filterElement={CouponFilterTemplate} />

//                     <Column header="FaceValue" filterField="fvalue" dataType="numeric" style={{ minWidth: '10rem' }} body={FvalueBodyTemplate} filter filterElement={CouponFilterTemplate} />
                   
//                     <Column header="Agent" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem'}} style={{ minWidth: '14rem' }} body={representativeBodyTemplate}
//                         filter filterElement={representativeFilterTemplate} />
                    
                    
//                     <Column field="status" header="Type" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
//                     {/* <Column field="activity" header="Activity" showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} /> */}
//                     <Column field="verified" header="Status" dataType="boolean" bodyClassName="text-center" style={{ minWidth: '8rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedFilterTemplate} />
//                 </DataTable>
//             </div>
//         </div>
//     );
// }
// export default Pets;

import React, { useState,useEffect } from 'react';
import './Pets.css';
import MaterialTable from 'material-table'
import {Checkbox,Select,MenuItem} from '@material-ui/core'

import { CustomerService } from './CustomerService';
import Search from '@material-ui/icons/Search'
import axios from 'axios';
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'

import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'






export const Pets = () => {

  const [empList,setEmpList]=useState([]);
  // const [filteredData,setFilteredData] = useState(false);
  
 const [filteredData,setFilteredData]=useState([]);
  useEffect(() => {
    
    axios.get("http://localhost:8080/dashboard/securities").then(
      res => {
        const temp= [];
          res.data.map((datas) => {
              temp.push(datas);
          });
          setEmpList(temp);
          console.log("result", empList);
          setFilteredData(empList);
          console.log(filteredData);
      } 
  )
  },[]);

 
  
 const [filter, setFilter]=useState(true)
 const [year,setYear]=useState('all')
  const columns = [
    { title: "ID", field: "id" },
    { title: "Issuer", field: "issuer" },
    { title: "Maturity Date", field: "maturitydate" },
    { title: "Coupon", field: "coupon" },
    { title: "FaceValue", field: "facevalue" },
    { title: "Status", field: 'status' },
    {title: "Type", field:'type'}
  ]
  const handleChange=()=>{
   setFilter(!filter)
  }
  useEffect(()=>{
setFilteredData(year==='all'?empList:empList.filter(dt=>dt.year===year))

  },[year])

  

  return (
     
      


     <div className="Pets">
      <h1 align="center">List of Securities</h1>
     
    

     
     <MaterialTable
      icons={{ 
        Check: Check,
            DetailPanel: ChevronRight,
            Export: SaveAlt,
            Filter: FilterList,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: ChevronRight,
            PreviousPage: ChevronLeft,
            Search: Search,
            ThirdStateCheck: Remove,
      }}
        title="Security"
        data={empList}
        columns={columns}
        options={{
          filtering:filter
        }}
        actions={[
          {
            icon:()=><Checkbox
            checked={filter}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />,
          tooltip:"Hide/Show Filter option",
          isFreeAction:true
          }
          
        ]}
       />
      
       

      
    </div>

    
      
  );
}

export default Pets;

