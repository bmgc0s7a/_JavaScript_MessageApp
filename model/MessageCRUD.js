import DatabaseInstance from "../infra/DatabaseInstance.js";

class MessageCRUD{
    static #instance = new DatabaseInstance();

    static all = () => this.#instance.all(); 
    static show = id => this.#instance.get(id);
    static save = message => this.#instance.add(message);
    static update = message => this.#instance.upd(message);
    static destroy = id => this.#instance.del(id);

}

export default MessageCRUD;