import { Button } from "@mui/material"
import './SubmitButton.css';

export const SubmitButton=(props:any)=>{
    return (
        <Button
        className="button"
        fullWidth
        type={props?.type}
        variant={props?.variant}
        >
            {props.buttonText}
        </Button>
    )
}