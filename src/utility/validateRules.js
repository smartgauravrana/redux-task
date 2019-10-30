const validate = (value, rules) => {
    let isValid = true;
    
    for (let rule in rules) {
      switch (rule) {
            case 'isRequired': isValid = isValid && requiredValidator(value); break;          
            default: isValid = true;
      }
  
    }
    
    return isValid;
  }

const requiredValidator = value => {
    return value.trim() !== '';	
}

export default validate;