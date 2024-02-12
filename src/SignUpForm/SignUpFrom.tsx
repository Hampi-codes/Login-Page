import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import './SignUpFrom.css';
import { Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { SubmitButton } from '../Common/Components/Submit Button/SubmitButton';
import { InputField } from '../Common/Components/Input Field/InputField';
import { PasswordField } from '../Common/Components/Password Field/PasswordField';
import { handleClickShowPassword, handleMouseDownPassword } from '../Common/Common Methods/PasswordMethods';
import { handleSubmit } from '../Common/Common Methods/SubmitMethod';

export const SignUpForm = () => {
    const [firstname, setFristName] = useState('');
    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const fields = {
        Name: firstname + " " + lastName,
        Email: email,
        password: password,
    }
    useEffect(() => {
        if (password !== confirmPassword) {
            setError(true);
        } else {
            setError(false);
        }
    }, [password, confirmPassword]);

    const onSubmit = handleSubmit(fields, password, confirmPassword)

    return (
        <Container component="main" maxWidth="xs">
            <Box className="box">
                <Typography component="h1" variant="h5">
                    Sign-Up
                </Typography>
                <Box
                    component="form"
                    onSubmit={onSubmit}
                    sx={{ width: '100%', mt: 1 }}
                >
                    <Grid container spacing={2} >
                        <Grid item lg={6} md={6} sm={6} xs={6} xl={6}>
                            <InputField
                                value={firstname}
                                onChange={(e: any) => setFristName(e.target.value)}
                                label={"First Name"}
                                name={"last name"}
                                type={"text"}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={6} xl={6}>
                            <InputField
                                value={lastName}
                                onChange={(e: any) => setLastName(e.target.value)}
                                label={"Last Name"}
                                name={"last name"}
                                type={"text"}
                            />
                        </Grid>
                    </Grid>
                    <InputField
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                        label={"Email"}
                        type={"email"}
                    />
                    <InputField
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                        label={"Password"}
                        type={"text"}
                    />
                    {error && <p className='error__p'>passwords mismatch</p>}
                    <PasswordField
                        value={confirmPassword}
                        showPassword={showPassword}
                        onChange={(e: any) => setConfirmPassword(e.target.value)}
                        handleClickShowPassword={handleClickShowPassword(setShowPassword)}
                        handleMouseDownPassword={handleMouseDownPassword}
                        inputText={"Confirm Password"}
                        label={"Confirm Passwaord"}
                    />
                    <SubmitButton
                        buttonText={"Sign Up"}
                        type={"submit"}
                        variant={"contained"}
                    />
                    <p className="box__p">Already have an account ? <Link to="/logIn">Login</Link></p>
                </Box>
            </Box>
        </Container>
    );
};