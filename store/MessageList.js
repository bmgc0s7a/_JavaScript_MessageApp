import Message from "../model/Message.js";
import MessageCRUD from "../model/MessageCRUD";

const messageList = [];

const objMsg = (id, owner, message, dateTime) => new Message(id, owner, message, dateTime);
const objStore = (id, owner, message, dateTime) => 
{
    return {
        id: id,
        owner: owner,
        message: message,
        dateTime: dateTime
    }
}

MessageCRUD.all().forEach(msg => messageList.push(objMsg(msg.id, msg.owner, msg.message, msg.dateTime)));

const get = () => messageList;

const add = function(owner, message){
    const id = messageList.length;
    const dateTime = new Date();
    messageList.push(objMsg(id, owner, message, dateTime));
    MessageCRUD.save(objStore(id, owner, message, dateTime));
}

export  {get, add};