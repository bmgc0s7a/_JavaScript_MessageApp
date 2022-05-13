import { addElem } from "../../../helpers/dom/elem.js";
import { textMsg } from "./textMsg.js";

const divMsg = function(div,msg){
    const color = (msg.owner == 'Random') ? ['bg-blue-400', 'mr-auto'] : ['bg-blue-200', 'ml-auto']
    const divMens = addElem('div', ['text-xs','w-6/12', 'p-3', 'my-5', 'rounded-lg', ...color], 'message');
    divMens._id = msg.id;
    divMens.append(...textMsg(msg));
    div.append(divMens);
}

export {divMsg};