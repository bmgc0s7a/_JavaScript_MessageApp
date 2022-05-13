import { addElem } from "../../../helpers/dom/elem.js";
import { add } from "../../../helpers/dom/events.js";
import { textMsg } from "./textMsg.js";
import { delMessage } from "../../events/form/delMessage.js";

const divMsg = function(div,msg){
    const color = (msg.owner == 'Random') ? ['bg-blue-400', 'mr-auto'] : ['bg-blue-200', 'ml-auto']
    const divMens = addElem('div', ['cursor-pointer','text-xs','w-6/12', 'p-3', 'my-5', 'rounded-lg', ...color], 'message');
    divMens.title = 'Double Click to remove';
    divMens._id = msg.id;
    divMens.append(...textMsg(msg));
    add(divMens, 'dblclick', delMessage);
    div.append(divMens);
}

export {divMsg};