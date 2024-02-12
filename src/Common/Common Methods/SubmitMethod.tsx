export const handleSubmit = (fields: any, password?:string, confirmPassword?:string) => {
    return (e: any) => {
        e.preventDefault();
        if(password !== confirmPassword){
            return;
        }else{
            console.log('Form submitted:', fields);
        }
    }
};