import Message from "../model/Message.js";
import MessageCRUD from "../model/MessageCRUD.js";

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

window.addEventListener('storage', function(e){
    console.log(e);
})

MessageCRUD.all().forEach(msg => messageList.push(objMsg(msg.id, msg.owner, msg.message, msg.dateTime)));


const get = () => messageList.slice();

const add = function(id,owner, message, dateTime){
    messageList.push(objMsg(id, owner, message, dateTime));
    MessageCRUD.save(objStore(id, owner, message, dateTime));
}

const del = function(id){
    messageList.splice(id, id+1);
    MessageCRUD.destroy(id);
}

export  {get, add, del};