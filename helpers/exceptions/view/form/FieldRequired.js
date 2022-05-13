class FieldRequired extends Error{
    constructor(input){
        super(`Input ${input} required!`);
    }
}

export default FieldRequired;