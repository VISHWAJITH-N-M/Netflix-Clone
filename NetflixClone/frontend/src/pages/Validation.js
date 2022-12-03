const Validation = (values) => {
    let errors = {}

    if(!values.name)
        errors.name = "Please enter a valid email address or phone number."
    if(!values.password)
        errors.password = "Your password must contain between 4 and 60 characters."
    else if(values.password.length < 4)
        errors.password = "Your password must contain between 4 and 60 characters."
    return errors;
    
}

export default Validation;