import validator from 'validator';

module.exports = class UserValidation {
  constructor(data){
    this.id = data.id             
    this.first_name = data.first_name     
    this.last_name = data.last_name      
    this.username = data.username       
    this.email = data.email          
    this.role = data.role           
    this.password = data.password  
    this.password_confirmation = data.password_confirmation    
  }

  validate(){
    let valid = true;
    let messages = []

    if(validator.isEmail(this.email)) messages.push("Email is not valid") 
    
    return response
  }


}