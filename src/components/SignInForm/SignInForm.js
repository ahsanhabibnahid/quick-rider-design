import { TextField, Button, Divider, FormControlLabel, Checkbox, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Box } from '@mui/system';

const SignInForm = () => {
    return (
        <div>
            <div className='card mx-auto p-4' style={{ width: '30rem' }}>
                <h4>Login</h4>
                <TextField id="standard-basic" label="email" variant="standard" />
                <br />
                <TextField id="standard-basic" type="password" label="password" variant="standard" />
                <br />
                <FormControlLabel control={<Checkbox />} label="Remember Me" />
                <br />
                <button class="btn btn-danger" type="button">Create an account</button>
                <br />
                <p className='text-center'>Don't have an account? <a href='#' className='text-danger'>Create an account</a></p>
            </div>
            <div className='mx-auto px-4' style={{ width: '30rem' }}>
                <Divider>Or</Divider>
                <Button variant="outlined" fullWidth startIcon={<FacebookIcon />}>
                    Continue with facebook
                </Button>
                <Button sx={{ mt: 2 }} variant="outlined" fullWidth startIcon={<GoogleIcon />}>
                    Continue with google
                </Button>
            </div>
        </div>

    );
};

export default SignInForm;