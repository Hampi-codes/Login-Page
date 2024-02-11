import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './SignUpFrom.css';
import { Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

export const SignUpForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [suggestion, setSuggestion] = useState('');

    const handleGenderChange = (e: any) => {
        setGender(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form submitted:', { name, age, gender, email, suggestion });
    };
    return (
        <Container component="main" maxWidth="xs">
            <Box className="box">
                <Typography component="h1" variant="h5">
                    Sign-Up
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ width: '100%', mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                    />
                    <TextField
                        margin="normal"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                        fullWidth
                        id="age"
                        label="Age"
                        type="number"
                    />
                    <FormControl fullWidth required margin="normal">
                        <InputLabel id="gender-label">Gender</InputLabel>
                        <Select
                            labelId="gender-label"
                            label="Gender"
                            value={gender}
                            onChange={handleGenderChange}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="non-binary">Non-Binary</MenuItem>
                        </Select>
                    </FormControl>
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
                    <TextField
                        margin="normal"
                        value={suggestion}
                        onChange={(e) => setSuggestion(e.target.value)}
                        required
                        fullWidth
                        id="suggestion"
                        label="Any Suggestion"
                        name="text"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

