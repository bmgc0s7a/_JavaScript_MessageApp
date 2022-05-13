import { addElem } from "../../../helpers/dom/elem.js";
import { divMsg } from "../messages/divMsg.js";
import { formNewMessage } from "../form/formNewMessage.js";
import { add }  from "../../../helpers/dom/events.js";
import { addNewMessage } from "../../events/form/addNewMessage.js";

const dashboard = function(div,msg){
    const divDash = addElem('div', ['flex','flex-col','w-full', 'min-h-[400px]', 'h-screen', 'justify-between', 'p-10'], 'dashboard');    
    const msgDiv = addElem('div', ['w-full', 'overflow-auto', 'mb-5', 'px-2'], 'messages');
    msg.forEach(msgOne => divMsg(msgDiv,msgOne));
    divDash.append(msgDiv, formNewMessage());
    add(document, 'addNewMessage', addNewMessage);
    //add(document, 'addNewMessage', randomMessage);
    div.append(divDash);
}

export {dashboard};