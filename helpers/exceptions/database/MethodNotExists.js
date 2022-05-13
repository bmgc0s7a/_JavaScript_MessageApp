class MethodNotExists extends Error{
    constructor(method){
        super(`Error Database: ${method} not exists!`);
    }
}

export default MethodNotExists;