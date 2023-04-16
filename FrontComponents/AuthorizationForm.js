import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper} from '@material-ui/core';
import { Button } from '@mui/material';

// import { validateEmail } from '../functions/Functions';


export default function AuthorizationForm() {

    const paperStyle={padding:"50px 20px", width:400, margin:"20px auto"};
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');


    const authorization = (e) =>{
        const login ={email, password};

        let valid = false;
        if(!validateEmail(email)){
            document.getElementById("emailLogin").setAttribute("style","border:2px solid red; border-radius:5px");
            valid = false;
            console.log("TRY");
        }else {
            document.getElementById("emailLogin").removeAttribute("style"); valid=true;
        }
        
        
        if(valid){
            
            fetch("http://localhost:8080/user/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(login)
            }).then(()=>{
            console.log("User Logged Successfully");
            })
        }
        
    }
    const validateEmail =(e)=>{
        const pattern=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return pattern.test(email);
    }

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"#28a0d4"}}><u>Authorization</u></h1> 
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: 'fullWidth' },
            }}
            noValidate
            autoComplete="off"
            >
            
            <TextField id="emailLogin" label="EmailLogin" variant="outlined" fullWidth required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField id="passwordLogin" type ="password" label="PasswordLogin" variant="outlined" fullWidth required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <Button style = {{backgroundColor:"#28a0d4",color:"White", width:'400px'}} onClick={authorization}>Authoritate</Button>
            
            {/* {props.children} */}
            </Box>
            </Paper>
        </Container>
    ) 
}