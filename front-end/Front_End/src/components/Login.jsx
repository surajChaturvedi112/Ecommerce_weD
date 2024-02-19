import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Login = () => {
    return (
        <div>
            <h1> This is Login</h1>
            <Button sx={{mt:0,ml:3,height:40,width:100}} color="secondary" variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
        </div>
    );
};

export default Login