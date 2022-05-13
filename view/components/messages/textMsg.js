import { addElem } from "../../../helpers/dom/elem.js";

const textMsg = function(msg){
    const pText = addElem('p');
    pText.textContent = msg.message;
    const powner = addElem('p', ['text-[8px]', 'py-2', 'text-right']);
    const dateMsg = new Date(msg.dateTime);
    const dayFormat = `${String((dateMsg.getDay())).padStart(2, 0)}-${String((dateMsg.getMonth())).padStart(2,'0')}-${dateMsg.getFullYear()} ${String(dateMsg.getHours()).padStart(2,'0')}:${String(dateMsg.getMinutes()).padStart(2,'0')}:${String(dateMsg.getSeconds()).padStart(2,'0')}`
    powner.textContent = `by ${msg.owner} at ${dayFormat}`;
    return [pText, powner];
}

export {textMsg};