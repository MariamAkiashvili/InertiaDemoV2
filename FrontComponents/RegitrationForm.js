import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper} from '@material-ui/core';
import { Button } from '@mui/material';

export default function RegistrationForm(props) {
    const paperStyle={padding:"50px 20px", width:400, margin:"20px auto"};
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');
    const[smsPhone,setSMSPhone]=useState('');
    const[password,setPassword]=useState('');
    const[conPass,setConPAss]=useState('');
    const registrate = (e) =>{
        e.preventDefault();
        const user ={firstName, lastName, email, password, conPass};
        let valid = false;
        if(!validateEmail()){
            document.getElementById("email").setAttribute("style","border:2px solid red; border-radius:5px");
            valid = false;
        }else {document.getElementById("email").removeAttribute("style"); valid=true;}
        if(! validatePassword()){
            document.getElementById("password").setAttribute("style","border:2px solid red; border-radius:5px");
            console.log("Choose Strong Password!");
            valid = false;
        }else{document.getElementById("password").removeAttribute("style"); valid = true;}
        if(password!==conPass){
            const pass = document.getElementById("password");
            pass.setAttribute("style","border:2px solid red; border-radius:5px");
            const conPass = document.getElementById("conPass");
            conPass.setAttribute("style","border:2px solid red; border-radius:5px");
            console.log("Password doesn't match");
            valid = false;
        }else{document.getElementById("conPass").removeAttribute("style"); valid =true;}
        if(valid){

            console.log(user);
            
            fetch("http://localhost:8080/user/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
            }).then(()=>{
            console.log("New User Added");
            })

        }
    }


    // Check password contains at least 8 symbols including uppercase and lowercase letters, special symbol and digit;
    const validatePassword = (e)=>{
        const pattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
        return pattern.test(password);
    }

    const validateEmail =(e)=>{
        const pattern=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return pattern.test(email);
    }

    //Check Emial is Not Already Used!!!!
    //If it is used suggest to restore password if doesn't remember it

    // const checkEmailIsUsed = ()=>{
    //     axios("http://localhost:8080/user/checkEmail", {
    //         method:"GET",
    //         headers:["Content-type":"application/json"],
    //         head

    //     })
    // }

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"#28a0d4"}}><u>Registration</u></h1> 
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: 'fullWidth' },
        }}
        noValidate
        autoComplete="off"
        >
        
        <TextField id="firstName" label="Fisrt Name" variant="outlined" fullWidth required
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
        />
        <TextField id="lastName" label="Last Name" variant="outlined" fullWidth required
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}
        />
        <TextField id="email" label="Email" variant="outlined" fullWidth required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField id="smsNumber" label="Phone Number" variant="outlined" fullWidth required
        value={smsPhone}
        onChange={(e)=>setSMSPhone(e.target.value)}
        />
        <TextField id="password" type="password" label="Password"
        helperText="Password must contains at least 8 symbols" 
        variant="outlined" fullWidth required
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <TextField id="conPass" type="password" label="Confirm Password" variant="outlined" fullWidth required
        value={conPass}
        onChange={(e)=>setConPAss(e.target.value)}
        />
    

        <Button style = {{backgroundColor:"#28a0d4",color:"White", width:'400px'}} onClick={registrate}>Registrate</Button>
        </Box>
        </Paper>
    </Container>
  )
}