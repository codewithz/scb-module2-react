import React,{useState} from 'react';
import {Button,ButtonGroup,Checkbox,FormControlLabel,TextField} from '@material-ui/core';
import { makeStyles ,Typography} from '@material-ui/core';
import {Save,Delete} from '@material-ui/icons';
import { ThemeProvider,createTheme } from '@material-ui/core/styles';
import '@fontsource/roboto';
import { Container,Grid,Paper } from '@material-ui/core';


const useStyles=makeStyles({
    root:{
        backgroundColor:'dodgerblue',
        border:0,
        borderRadius:15,
        color:'white',
        padding:'5px 30px',
        width:100,
        marginTop:15
    }
});

const theme=createTheme({
    palette:{
        primary:{
            main:'#2884f0'
        },
        seconday:{
            main:'#40d50a'
        },
    }
})

function MaterialPlayground(){

    const classes=useStyles();
  


    const[checked,setChecked]=useState(true);
    return (
        <ThemeProvider theme={theme} >
        <Container maxWidth='sm'>
                <center>
        <div>

            <Typography variant='h2'>Welcome to Material UI</Typography>
            <hr />
            <Typography variant='subtitle1'>Learn How to Use MUI</Typography>
            <hr />

            <Button>
                Hello World
            </Button>
            <br />
            <br />
            <Button variant="contained" color='primary'  size="large"
            
            startIcon={<Save />}
            >
                Hello World
            </Button>
            <br />
            <br />
            <Button variant="contained" color='secondary'>
                Hello World
            </Button>
            <br />
            <br />
            <Button 
                variant="contained" 
                color='secondary'
                onClick={()=>alert('Button Clicked')}
                size="small"
                endIcon={<Delete />}
            >
                Click Me
            </Button>

            <br />
            <br />
            <ButtonGroup>
            <Button variant="contained" color="primary" size="large" endIcon={<Save />}>
                Save
            </Button>
            <Button variant="contained" color="secondary" size="large" endIcon={<Delete />}>
                Delete
            </Button>
            </ButtonGroup>

            <hr />
            <Checkbox checked={checked} onChange={(event)=>setChecked(event.target.checked)}/>

            <hr />

            <FormControlLabel 
                control={ <Checkbox 
                            checked={checked} 
                            onChange={(event)=>setChecked(event.target.checked)}
                            />}
                label="Testing Checkbox"
            
            />

            <hr />
            
            <TextField 
                variant='outlined'
                color='secondary'
                type='email'
                placeholder='Enter Email'
                label='Email'
            />


            <hr />
            <Grid container spacing={3} justifyContent='center'>
                <Grid item>
                    <Paper style={{ height:50, width:'100%',backgroundColor:'green' }} />
                </Grid>
                <Grid item>
                        <Paper style={{width:100,height:100}}/>
                </Grid>
                <Grid item>
                        <Paper style={{width:100,height:100}}/>
                </Grid>
                <Grid item>
                        <Paper style={{width:100,height:100}}/>
                </Grid>
            </Grid>

            
            <hr />


            <Button className={classes.root}>Styled Button</Button>

        </div>
        </center>
        </Container>
        </ThemeProvider>

    )
}

export default MaterialPlayground;