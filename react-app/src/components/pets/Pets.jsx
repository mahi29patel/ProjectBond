

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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'
import { FormGroup, FormControl, InputLabel, Input, styled} from '@mui/material'
import { ButtonAppBar } from '../header/header'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export const Pets = () => {

  const [empList,setEmpList]=useState([]);

  const [security, setSecurity] = useState(null);
  const [securityDialog, setSecurityDialog] = useState(false);
  const [deleteSecurityDialog, setDeleteSecurityDialog] = useState(false);
  
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

  const handleClose=()=> {
    setSecurityDialog(false);
    setDeleteSecurityDialog(false);
  }
  const Container = styled(FormGroup)`
    width: 60%;
    margin: 5% 0 0 20%;
    & > div {
        margin-top: 15px;
`;


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
          filtering:filter,
          actionsColumnIndex: -1
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
          },
          {
            icon: AddIcon,
            tooltip: "Add",
            position: "toolbar",
            onClick: () => {
              setSecurityDialog(true);
            }
          },
          {
            icon: EditIcon,
            tooltip: 'Edit',
            position: 'row',
            onClick: (event, rowData) => {
              setSecurityDialog(true);
            }
          },
          {
            icon: DeleteIcon,
            tooltip: 'Delete User',
            position: 'row',
            onClick: (event, rowData) => {
              setSecurity(rowData);
              console.log(rowData);
              setDeleteSecurityDialog(true);
            }
          }
          
        ]}
       />
       

      <Modal
        open={securityDialog}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >

        {/* TODO: CREATE A APPROPRIATE FORM WITHIN THIS MODAL WHICH WILL BE USED IN ADD AND EDIT ACTION */}
        <Box sx={style} style={{width:'40%'}}>
          <Container>
        <Typography variant="h5">Security Details</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">ID</InputLabel>
                <Input name='id' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">ISIN</InputLabel>
                <Input name='isin' id="my-input" /> 
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">CUSIP</InputLabel>
                <Input name='cusip' id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Issuer</InputLabel>
                <Input name='issuer' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Maturity Date</InputLabel>
                <Input name='maturitydate' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Coupon</InputLabel>
                <Input name='coupon' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Type</InputLabel>
                <Input name='type' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Face Value</InputLabel>
                <Input name='facevalue' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Status</InputLabel>
                <Input name='facevalue' id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Assignee</InputLabel>
                <Input name='assignee' id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" style={{backgroundColor: 'black',color:'white',
                  fontSize: '20px', padding: '10px 60px', borderRadius:'5px', margin:'10px 0px'}}>Submit</Button>
            </FormControl>
            </Container>
        </Box>
      </Modal>

      <Modal open={deleteSecurityDialog} onClose={handleClose} sx={style}>
        <div className="confirmation-content" style={{backgroundColor:'none'}}>
          <i className="pi pi-exclamation-triangle" style={{ fontSize: '2rem'}} />
            {security && <span>Are you sure you want to delete <b>{security.id}</b>?</span>}
            <FormControl>
                <Button variant="contained" color="primary" style={{backgroundColor: '#ddeff4',color:'red',
                  fontSize: '20px', padding: '10px 60px', borderRadius:'5px', margin:'60px 0px'}}>DELETE</Button>
            </FormControl>
        </div>
      </Modal>
    </div>
  );
}

export default Pets;

