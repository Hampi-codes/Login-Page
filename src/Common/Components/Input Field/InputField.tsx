import { TextField } from "@mui/material";
import './InputField.css'

export const InputField = (props: any) => {
    return (
        <TextField
            className="textField"
            required
            fullWidth
            value={props?.value}
            onChange={props?.onChange}
            label={props?.label}
            type={props.type}
            name={props?.name}
        />
    );
};