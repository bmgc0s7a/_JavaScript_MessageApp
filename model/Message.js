class Message {
    #id;
    #owner;
    #message;
    #dateTime;

    constructor(id, owner, message, dateTime){
        this.#id = id;
        this.#owner = owner;
        this.#message = message;
        this.#dateTime = dateTime;
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

    get dateTime(){
        return this.#dateTime;
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

    set dateTime(dateTime){
        this.#dateTime = dateTime;
    }
}

export default Message;