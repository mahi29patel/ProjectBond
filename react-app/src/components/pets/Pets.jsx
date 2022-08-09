

import React, { useState,useEffect } from 'react';
import './Pets.css';
import MaterialTable from 'material-table'
import {Checkbox,Select,MenuItem} from '@material-ui/core'
import {Link} from '@material-ui/core'
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

import { ButtonAppBar } from '../header/header'




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
    { title: "ID", field: "id",render:rowData=><Link href={`/trade/${rowData.id}`}>{rowData.id}</Link> },
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
        <ButtonAppBar/>
      <h1 align="center" style={{margin: '20px 0 20px 0'}}>List of Securities</h1>
     
    

     
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

