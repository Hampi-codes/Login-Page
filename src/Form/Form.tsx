import { useState } from 'react';
import { SignUpForm } from '../SignUpForm/SignUpFrom';
import { LoginForm } from '../LoginForm/LoginForm';
import { Box, FormControl, Switch, Typography } from '@mui/material';

export const Form = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const handleToggleForm = () => {
        setIsSignUp((prev) => !prev);
    };

    return (
        <Box>
            <FormControl fullWidth margin="normal" component="label">
                <Typography variant="subtitle1">
                    {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
                </Typography>
                <Switch
                    color="primary"
                    checked={!isSignUp}
                    onChange={handleToggleForm}
                    inputProps={{ 'aria-label': 'Toggle Sign Up/Login' }}
                />
            </FormControl>
            {isSignUp ? <SignUpForm /> : <LoginForm />}
        </Box>
    );
};

