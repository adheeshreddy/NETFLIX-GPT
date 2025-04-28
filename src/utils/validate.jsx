export const validateForm=(email,password,isSignin,fullName)=>{

    const isValidEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(isSignin){
    if(!isValidEmail){
        return "Email is invalid";
    }
    if(!isValidPassword){
        return "Password is invalid";
    }
}
else
{
    const isValidFullName=/^[a-zA-Z\s]+$/.test(fullName.current.value);

    if(!isValidFullName){
        return "Full name is invalid";
    }
    if(!isValidEmail){
        return "Email is invalid";
    }
    if(!isValidPassword){
        return "Password is invalid";
    }
}
    return null;
}