class FieldRequired extends Error{
    constructor(input){
        super(`Error Input: ${input} required!`);
    }
}

export default FieldRequired;