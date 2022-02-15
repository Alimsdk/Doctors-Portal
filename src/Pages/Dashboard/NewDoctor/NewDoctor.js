import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const NewDoctor = () => {
    const [doctorInfo,setDoctorInfo]=useState(null);
    const [image,setImage]=useState(null)
    const handleDoctorInfo=e=>{
      const name=e.target.name;
      const value=e.target.value;
      const newInfo={...doctorInfo}
      newInfo[name]=value;
      setDoctorInfo(newInfo)
      console.log(newInfo);
    }

    const handleDoctorDataSubmit=e=>{
          if(!image){
              return;
          }
          const formData=new FormData();
          formData.append('name',doctorInfo.name)
          formData.append('email',doctorInfo.email)
          formData.append('image',image)
          fetch('http://localhost:5000/doctors',{
              method:'POST',
              
              body:formData
          }).then(res=>res.json())
          .then(data=>{
              if(data.insertedId){
                  alert('Doctor added successfully')
              }
          });
        e.preventDefault();
    }
    return (
<>
<h3>Add a Doctor</h3>

<form onSubmit={handleDoctorDataSubmit}>
            <TextField sx={{width:'40%'}} onBlur={handleDoctorInfo} name='name' label="Doctor Name" variant="standard" required  /> <br />
             <TextField sx={{width:'40%'}} onBlur={handleDoctorInfo} name='email' label="Doctor Email" variant="standard" required />  <br />
             <label htmlFor="contained-button-file">
  <Input accept="image/*" onChange={e=>setImage(e.target.files[0])} id="contained-button-file" multiple type="file" /> <br />
  <Button variant="contained" type='submit'>
    Upload
  </Button>
</label>

        </form>
</>
    );
};

export default NewDoctor;