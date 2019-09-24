export default class Validation {
  constructor(){
    this.errors = []
    this.isValid = true
  }

  validate(field, sValidations, ){
    let validations = sValidations.split("|")
    validations.forEach(item => {
      switch(item){
        case 'required':

          break;
        case 'numeric':

            break;
              

      }
    });
  }
}