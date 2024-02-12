import { useState } from 'react';
import './LoginForm.css';
import { Box, Container, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { SubmitButton } from '../Common/Components/Submit Button/SubmitButton';
import { PasswordField } from '../Common/Components/Password Field/PasswordField';
import { handleClickShowPassword, handleMouseDownPassword } from '../Common/Common Methods/PasswordMethods';
import { handleSubmit } from '../Common/Common Methods/SubmitMethod';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const fields = {email: email, password: password}

    const onSubmit = handleSubmit(fields)

    return (
        <Container component="main" maxWidth="xs">
            <Box className="box">
                <Typography component="h1" variant="h5">
                    Log-In
                </Typography>
                <Box
                    component="form"
                    onSubmit={onSubmit}
                >
                    <TextField
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        type="email"
                    />
                    <PasswordField
                    value={password}
                    showPassword={showPassword}
                    onChange={(e:any) => setPassword(e.target.value)}
                    handleClickShowPassword={handleClickShowPassword(setShowPassword)}
                    handleMouseDownPassword={handleMouseDownPassword}
                    inputText={"Password"}
                    label={"Passwaord"}
                    />
                    <SubmitButton
                        buttonText={"Log In"}
                        type={"submit"}
                        variant={"contained"}
                    />
                    <p className="box__p">Don't have an Account ? <Link to="/signUp">Sign-up</Link></p>
                </Box>
            </Box>
        </Container>
    );
};

