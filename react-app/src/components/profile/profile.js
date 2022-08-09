import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {TableProfile1} from '../table/table';
import {TableProfile2} from '../table/table2';
import {TableProfile3} from '../table/table3';
import {TableProfile4} from '../table/table4';
import { ButtonAppBar } from '../header/header';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <div>
    <ButtonAppBar/>
    <div style={{marginTop:'60px'}}></div>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 2, md: 3 }} >
        <Grid item xs={6}>
          <Item style={{backgroundColor:'#ddeff6'}}>
              <TableProfile1/>

          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{backgroundColor:'#ddeff6'}}>
          <TableProfile2/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{backgroundColor:'#ddeff6'}}>
          <TableProfile3/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{backgroundColor:'#ddeff6'}}>
          <TableProfile4/>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
