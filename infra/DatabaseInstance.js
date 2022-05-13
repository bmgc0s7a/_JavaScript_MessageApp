import LocalStorage from "./Database/Localstorage/LocalStorage.js";

class DatabaseInstance {
    constructor(){
        return new LocalStorage();
    }
}

export default DatabaseInstance;