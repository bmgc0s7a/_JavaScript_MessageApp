import FieldRequired from "../../../helpers/exceptions/view/form/FieldRequired.js"

class FormMessage {
    static exec(input){
        if (!input.value) throw new FieldRequired(input.name); 
    }
}

export default FormMessage;