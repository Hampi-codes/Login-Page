export const handleClickShowPassword = (setShowPassword:any) => {
    return () => {
      setShowPassword((show:any) => !show);
    };
  };
  
export const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    return () =>{
        event.preventDefault();
    }
};