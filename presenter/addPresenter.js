import { add } from "../store/MessageList.js";

const addPresenter = function(msg){
    const {id, owner, message, dateTime} = msg;
    add(id, owner, message, dateTime);
}

export {addPresenter};