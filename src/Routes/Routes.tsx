import { Route, Routes } from 'react-router-dom';
import { LoginForm } from '../LoginForm/LoginForm';
import { SignUpForm } from '../SignUpForm/SignUpFrom';

export const RoutesOption = () => {
    return (
        <Routes>
            <Route path="" element={<LoginForm />} />
            <Route path="/logIn" element={<LoginForm />} />
            <Route path="/signUp" element={<SignUpForm />} />
        </Routes>
    );
};
