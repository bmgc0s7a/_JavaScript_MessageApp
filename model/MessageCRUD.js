import DatabaseInstance from "../infra/DatabaseInstance.js";

class MessageCRUD{

    static all = () => DatabaseInstance.all(); 
    static show = id => DatabaseInstance.get(id);
    static save = message => DatabaseInstance.add(message);
    static update = message => DatabaseInstance.upd(message);
    static destroy = id => DatabaseInstance.del(id);

}

export default MessageCRUD;