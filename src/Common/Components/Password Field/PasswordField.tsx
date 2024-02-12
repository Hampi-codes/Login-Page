import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./PasswordField.css"
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";

export const PasswordField = (props: any) => {
    return (
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" fullWidth className='box__formControl'>
            <InputLabel htmlFor="outlined-adornment-password">{props?.inputText}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={props?.showPassword ? 'text' : 'password'}
                value={props?.value}
                onChange={props?.onChange}
                required
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={props?.handleClickShowPassword}
                            onMouseDown={props?.handleMouseDownPassword}
                            edge="end"
                        >
                            {props?.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label={props?.label}
            />
        </FormControl>
    );
};