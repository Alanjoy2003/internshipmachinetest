import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';

const Add = () => {
 // const [counter,setCounter]=useState(0);
  const [form,setForm]=useState({
   "productName":'',
   "category":'',
   "productInformation":'',
   "expireDate":''
  })
let postData=()=>{
  // console.log(form);
  axios.post('http://localhost:4000/new-product',form).then((res)=>{
    alert('productmanagement data posted')
    })
  }
  // let valueAdd=()=>{
  //   setCounter(counter+1);
  // } 

  function valueCap(e){
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})

  }
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        id="outlined-required"
        label="productName"
        defaultValue="productName"
        name='productName'
        value={form.productName}
        onChange={valueCap}
      />
      <br/>
       <TextField
        required
        id="outlined-required"
        label="category"
        defaultValue="category"
        name="category"
        value={form.category}
        onChange={valueCap}
      />
      <br/>
       <TextField
        required
        id="outlined-required"
        label="productInformation"
        defaultValue="productInformation"
        name="productInformation"
        value={form.productInformation}
        onChange={valueCap}
      />
      <br/>
       <TextField
        required
        id="outlined-required"
        label="expireDate"
        defaultValue="date"
        name="expireDate"
        value={form.expireDate}
        onChange={valueCap}
      />
      <br/>
      <Button variant="contained" color="success" onClick={postData}>
 Submit
</Button>
<br/>
{/* <small>Button clicked {counter} time(s).</small> */}
         </div>
         </Box>
  )
}

export default Add