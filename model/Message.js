class Message {
    #id;
    #owner;
    #message;
    #dataTime;

    constructor(id, owner, message, dataTime){
        this.#id = id;
        this.#owner = owner;
        this.#message = message;
        this.#dataTime = dataTime;
    }

    get id(){
        return this.#id;   
    }

    get owner(){
        return this.#owner;
    }

    get message(){
        return this.#message;
    }

    get dataTime(){
        return this.#dataTime;
    }

    set id(id){
        this.#id = id;
    }

    set owner(owner){
        this.#owner = owner;
    }

    set message(message){
        this.#message = message;
    }

    set dataTime(dataTime){
        this.#dataTime = dataTime;
    }
}

export default Message;