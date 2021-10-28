import { TextField, Button, Divider } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const SignUpForm = () => {
    return (
        <div>
            <div className='card mx-auto p-4' style={{ width: '30rem' }}>
                <h4>Create an account</h4>
                <TextField id="standard-basic" label="Name" variant="standard" />
                <br />
                <TextField id="standard-basic" label="Username or email" variant="standard" />
                <br />
                <TextField id="standard-basic" type="password" label="password" variant="standard" />
                <br />
                <TextField id="standard-basic" type="password" label="confirm password" variant="standard" />
                <br />
                <button class="btn btn-danger" type="button">Create an account</button>
                <br />
                <p className='text-center'>Already have an account? <a href='#' className='text-danger'>Login</a></p>
            </div>
            <div className='mx-auto px-4' style={{ width: '30rem' }}>
                <Divider>Or</Divider>
                <Button  variant="outlined" fullWidth startIcon={<FacebookIcon />}>
                    Continue with facebook
                </Button>
                <Button sx={{ mt: 2 }} variant="outlined" fullWidth startIcon={<GoogleIcon />}>
                Continue with google
                </Button>
            </div>
        </div>

    );
};

export default SignUpForm;